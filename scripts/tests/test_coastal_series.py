from pathlib import Path
import sys
import tempfile
import unittest

import numpy as np
from PIL import Image

sys.path.insert(0, str(Path(__file__).resolve().parents[1]))
from paleomasks.coastal_series import read_stack, reuse_scenario, scenarios, select_level, target_years
from paleomasks.coastal_depth import make_preview
from paleomasks.contract import calendar_bp, fingerprint


class CoastalSeriesTests(unittest.TestCase):
    def test_thousand_year_steps_cross_bce_ce_without_year_zero(self):
        years = target_years()
        self.assertEqual(len(years), 125)
        self.assertEqual(years[0], -123000)
        self.assertEqual(years[-4:], [-2000, -1000, 1, 1001])
        self.assertNotIn(0, years)
        self.assertTrue(all(calendar_bp(a) - calendar_bp(b) == 1000 for a, b in zip(years, years[1:])))
        self.assertEqual(target_years(-2000, 1000), [-2000, -1000, 1])

    def test_invalid_ranges_and_steps_are_rejected(self):
        for args in ((0, 1000, 1000), (-1000, 0, 1000), (1000, -1000, 1000), (-1000, 1000, 0),
                     (-1000, 1000, -1), (-1000, 1000, 1.5)):
            with self.subTest(args=args), self.assertRaises(ValueError):
                target_years(*args)

    def test_interpolation_uses_calendar_bp_and_retains_original_uncertainty(self):
        ages = np.array([0, 1000, 2000])
        values = np.array([[0., 1, -1, 1], [-10, 2, -14, -6], [-20, 3, -26, -14]])
        era = select_level(450, ages, values, {})  # 1,500 BP, not 450 BP.
        self.assertEqual(era['slug'], 'world-450')
        self.assertEqual(era['sea_level_m'], -15)
        source = era['sea_level_source']
        self.assertEqual(source['older_row_weight'], .5)
        self.assertEqual(source['policy'], 'linear_interpolation')
        self.assertEqual([r['source_minus_target_years'] for r in source['source_rows']], [-500, 500])
        self.assertEqual([r['source_95_percent_interval_m'] for r in source['source_rows']], [[-14, -6], [-26, -14]])
        self.assertNotIn('source_95_percent_interval_m', source)

    def test_exact_rows_including_endpoints_and_zero_level_are_not_interpolated(self):
        ages = np.array([0, 1000, 2000])
        values = np.array([[0., 1, -1, 1], [-10, 2, -14, -6], [-20, 3, -26, -14]])
        for year, level in ((1950, 0), (950, -10), (-51, -20)):
            source = select_level(year, ages, values, {})['sea_level_source']
            self.assertEqual(source['sea_level_m'], level)
            self.assertEqual(source['policy'], 'exact_source_row')
            self.assertEqual(len(source['source_rows']), 1)
        for year in (-52, 1951):
            with self.assertRaises(ValueError):
                select_level(year, ages, values, {})

    def test_pinned_series_uses_the_short_stack_without_legacy_assumptions(self):
        ages, values, source = read_stack()
        self.assertEqual((ages[0], ages[-1], len(ages)), (0, 430000, 431))
        self.assertEqual(values[24, 0], -130)
        series = scenarios(baseline='published')
        self.assertAlmostEqual(series[0]['sea_level_m'], -6.37103)
        self.assertAlmostEqual(series[-1]['sea_level_m'], 7.67386)
        self.assertEqual(len({s['slug'] for s in series}), 125)
        for era in series:
            self.assertEqual(era['sea_level_source']['sha256'], source['sha256'])
            self.assertLessEqual(abs(era['sea_level_m']), 160)
            self.assertEqual(era['sea_level_source']['policy'], 'linear_interpolation')

    def test_preview_uses_supplied_levels_and_supports_ce_labels(self):
        with tempfile.TemporaryDirectory() as temp:
            path = Path(temp)
            make_preview(path, {'world-1': np.zeros((4, 8), np.uint8)}, {'world-1': 0}, 'page.png')
            with Image.open(path / 'page.png') as image:
                self.assertEqual(image.size, (2048, 616))
                self.assertEqual(image.getpixel((100, 300)), (23, 27, 32))

    def test_1950_reference_is_a_separate_source_endpoint_without_rebasing(self):
        series = scenarios(include_1950=True, baseline='published')
        self.assertEqual(len(series), 126)
        self.assertEqual(series[-2]['year_start'], 1001)
        endpoint = series[-1]
        self.assertEqual(endpoint['year_start'], 1950)
        self.assertEqual(endpoint['target_calendar_bp'], 0)
        self.assertTrue(endpoint['reference_endpoint'])
        self.assertEqual(endpoint['sea_level_m'], 8.49)
        self.assertEqual(endpoint['sea_level_source']['policy'], 'exact_source_row')
        self.assertEqual(len(scenarios(950, 1950, include_1950=True)), 2)

    def test_reuse_preserves_bytes_and_rejects_changed_sources_or_corrupt_files(self):
        scenario = scenarios(1950, 1950)[0]
        with tempfile.TemporaryDirectory() as temp:
            root = Path(temp)
            old, new = root / 'old', root / 'new'
            old.mkdir()
            new.mkdir()
            (old / 'manifest.json').write_text('{}')
            artifacts = []
            for suffix in ('depth-change', 'depth-change-8bit', 'land-change', 'shoreline', 'excluded'):
                path = old / f"{scenario['slug']}-{suffix}.png"
                save = np.zeros((2, 4), dtype=np.uint16 if suffix == 'depth-change' else np.uint8)
                Image.fromarray(save).save(path)
                artifacts.append({'path': path.name, **fingerprint(path)})
            prior = {'eras': [{**scenario, 'depth_white_m': 160, 'ice_exclusion': None}], 'artifacts': artifacts}
            reused = reuse_scenario(scenario, prior, old, new)
            self.assertEqual(reused['reused_from']['sha256'], fingerprint(old / 'manifest.json')['sha256'])
            for record in artifacts:
                self.assertEqual((old / record['path']).read_bytes(), (new / record['path']).read_bytes())
            with self.assertRaises(ValueError):
                reuse_scenario({**scenario, 'sea_level_m': 1}, prior, old, new)
            (old / artifacts[-1]['path']).write_bytes(b'corrupt')
            with self.assertRaises(ValueError):
                reuse_scenario(scenario, prior, old, new)

    def test_normalization_anchors_present_and_retains_published_rows_and_uncertainty(self):
        original = scenarios(include_1950=True, baseline='published')
        normalized = scenarios(include_1950=True)
        self.assertEqual(len(normalized), 126)
        self.assertEqual(normalized[-1]['sea_level_m'], 0)
        self.assertEqual(normalized[-1]['published_sea_level_m'], 8.49)
        self.assertAlmostEqual(normalized[0]['sea_level_m'], -14.86103)
        for before, after in zip(original, normalized):
            self.assertEqual(after['sea_level_source'], before['sea_level_source'])
            self.assertEqual(after['published_sea_level_m'], before['sea_level_m'])
            self.assertAlmostEqual(after['sea_level_m'], before['sea_level_m'] - 8.49)
            self.assertEqual(after['normalization']['applied_offset_m'], -8.49)
            self.assertLessEqual(abs(after['sea_level_m']), 160)
        self.assertAlmostEqual(scenarios(-22051, -22051)[0]['sea_level_m'], -138.49)  # Exactly 24 ka BP.
        with self.assertRaises(ValueError):
            scenarios(baseline='unknown')

    def test_published_masks_cannot_be_reused_for_normalized_dates(self):
        old = scenarios(1950, 1950, baseline='published')[0]
        new = scenarios(1950, 1950)[0]
        with tempfile.TemporaryDirectory() as temp, self.assertRaisesRegex(ValueError, 'source/date differs'):
            reuse_scenario(new, {'eras': [old]}, Path(temp), Path(temp))


if __name__ == '__main__':
    unittest.main()
