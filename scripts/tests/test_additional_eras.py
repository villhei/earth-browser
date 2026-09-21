import copy
from pathlib import Path
import sys
import unittest
from unittest.mock import patch

sys.path.insert(0, str(Path(__file__).resolve().parents[1]))
from paleomasks.additional_eras import RECORD, SLUG, load_overlay_contract, sea_level_record
from paleomasks.contract import DATA, ContractError, load_contract, read_json, selected_members
from paleomasks.pipeline import build_manifest


class AdditionalEraTests(unittest.TestCase):
    def test_extra_date_preserves_territory_catalog_and_original_source_uses(self):
        base, original, catalog = load_contract()
        contract, selection, eras = load_overlay_contract()
        self.assertEqual(len(catalog), 54)
        self.assertNotIn(SLUG, catalog)
        self.assertEqual(len(eras), 55)
        self.assertEqual(eras[SLUG]["target_calendar_bp"], 23949)
        self.assertEqual(contract["permitted_margin_uses"][:-2], base["permitted_margin_uses"])
        self.assertEqual(selection["inspected_layers"][:-6], original["inspected_layers"])
        for use in contract["permitted_margin_uses"][-2:]:
            self.assertEqual(use["source_calendar_bp"], 24000)
            self.assertEqual(use["source_minus_target_years"], 51)
            self.assertEqual(len(selected_members(selection, use)), 3)
        sources = build_manifest(eras[SLUG], contract, selection)["sources"]
        self.assertEqual(len(sources), 2)
        for source in sources:
            self.assertEqual(source["chronology"]["original_age"]["value"], 24)
            self.assertEqual(source["chronology"]["target_calendar_bp"], 23949)
            self.assertEqual(source["chronology"]["interpolation"], "none")

    def test_rejects_wrong_dates_missing_bounds_and_unpinned_archives(self):
        original = read_json(DATA / RECORD)
        for mutate in (lambda r: r["era"].update(target_calendar_bp=22000),
                       lambda r: r["permitted_margin_uses"][0].update(source_minus_target_years=0),
                       lambda r: r["inspected_layers"].pop(),
                       lambda r: r["downloads"][0].update(sha256="wrong")):
            record = copy.deepcopy(original)
            mutate(record)
            with patch("paleomasks.additional_eras.read_json", return_value=record):
                with self.assertRaises(ContractError):
                    load_overlay_contract()

    def test_sea_level_and_uncertainty_match_pinned_source_row(self):
        record = sea_level_record()
        self.assertEqual(record["sea_level_m"], -130)
        self.assertEqual(record["source_calendar_bp"], 24000)
        self.assertEqual(record["source_95_percent_interval_m"], [-134.58, -118.09])
        wrong = read_json(DATA / RECORD)
        wrong["sea_level"]["sea_level_m"] = -134
        with patch("paleomasks.additional_eras.read_json", return_value=wrong):
            with self.assertRaisesRegex(ContractError, "values differ"):
                sea_level_record()
