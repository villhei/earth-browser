"""Calendar-dated coastal scenarios from the pinned Spratt–Lisiecki stack."""
import csv
import io
import shutil

import numpy as np

from .additional_eras import sea_level_record
from .contract import DATA, calendar_bp, fingerprint, require, verify_file


def target_years(start=-123000, end=1001, step=1000):
    """Advance in elapsed years, crossing BCE/CE without a historical year zero."""
    require(type(step) is int and step > 0, "Step must be a positive integer")
    first, last = calendar_bp(start), calendar_bp(end)
    require(first >= last, "Start must precede end")
    result = []
    for bp in range(first, last - 1, -step):
        result.append(1949 - bp if bp >= 1950 else 1950 - bp)
    return result


def read_stack():
    pin = sea_level_record()  # Verifies original source bytes and published scaling.
    lines = (DATA / pin["path"]).read_text().splitlines()
    rows = list(csv.DictReader(io.StringIO("\n".join(
        line for line in lines if line.strip() and not line.startswith("#"))), delimiter="\t"))
    rows = [row for row in rows if row["SeaLev_shortPC1"].lower() not in ("nan", "na", "")]
    ages = [float(row["age_calkaBP"]) * 1000 for row in rows]
    require(ages == list(range(0, 430001, 1000)), "Unexpected short-stack chronology")
    columns = ("SeaLev_shortPC1", "SeaLev_shortPC1_err_sig", "SeaLev_shortPC1_err_lo", "SeaLev_shortPC1_err_up")
    values = np.array([[float(row[key]) for key in columns] for row in rows])
    require(np.isfinite(values).all(), "Nonfinite sea-level source data")
    source = {key: pin[key] for key in ("source", "publication_doi", "dataset_doi", "url", "landing_page",
                                       "retrieved", "path", "bytes", "sha256", "column", "reference")}
    return np.array(ages), values, source


def select_level(year, ages, values, source):
    bp = calendar_bp(year)
    require(ages[0] <= bp <= ages[-1], "Target outside sea-level source coverage")
    upper = int(np.searchsorted(ages, bp))
    lower = upper if ages[upper] == bp else upper - 1
    weight = 0. if lower == upper else float((bp - ages[lower]) / (ages[upper] - ages[lower]))
    selected = values[lower] * (1 - weight) + values[upper] * weight
    require(abs(selected[0]) <= 160, "Sea level exceeds coastal encoding range")
    source_rows = [{"source_calendar_bp": int(ages[i]), "sea_level_m": float(values[i, 0]),
                    "standard_deviation_m": float(values[i, 1]),
                    "source_95_percent_interval_m": values[i, 2:4].tolist(),
                    "source_minus_target_years": int(ages[i] - bp)} for i in sorted({lower, upper})]
    record = {**source, "target_calendar_bp": bp, "source_rows": source_rows,
              "policy": "exact_source_row" if lower == upper else "linear_interpolation",
              "interpolation": "none" if lower == upper else "linear between bracketing calendar-BP rows",
              "older_row_weight": weight, "sea_level_m": float(selected[0]),
              "uncertainty": {"kind": "original bracketing-row uncertainty retained; no derived confidence interval",
                              "note": "Does not quantify regional coastline or modern-terrain uncertainty."}}
    return {"slug": f"world-bc{-year}" if year < 0 else f"world-{year}", "year_start": year,
            "target_calendar_bp": bp, "sea_level_m": float(selected[0]), "sea_level_source": record}


def scenarios(start=-123000, end=1001, step=1000, include_1950=False, baseline="1950"):
    require(baseline in ("1950", "published"), "Unknown sea-level baseline")
    ages, values, source = read_stack()
    years = target_years(start, end, step)
    if include_1950 and years[-1] != 1950:
        require(years[-1] < 1950, "1950 reference must follow the regular series")
        years.append(1950)
    result = [select_level(year, ages, values, source) for year in years]
    if baseline == "1950":
        endpoint = select_level(1950, ages, values, source)
        offset = endpoint["sea_level_m"]
        normalization = {"kind": "subtract_published_1950", "reference_year": 1950,
                         "reference_calendar_bp": 0, "published_reference_m": offset,
                         "visualization_reference_m": 0., "applied_offset_m": -offset,
                         "formula": "sea_level_m = published_sea_level_m - published_reference_m",
                         "decision": "COASTAL-BASELINE-DECISION.md"}
        for era in result:
            era["published_sea_level_m"] = era["sea_level_m"]
            era["sea_level_m"] -= offset
            era["normalization"] = dict(normalization)
            require(abs(era["sea_level_m"]) <= 160, "Normalized level exceeds coastal encoding range")
    if include_1950:
        result[-1]["reference_endpoint"] = True
    return result


def reuse_scenario(scenario, previous, source_dir, output_dir):
    """Copy an explicitly selected prior scenario after input and byte checks."""
    matching = [era for era in previous["eras"] if era["slug"] == scenario["slug"]]
    require(len(matching) == 1, "Missing or duplicate reused era")
    era = matching[0]
    require(all(era.get(key) == value for key, value in scenario.items()), "Reused scenario source/date differs")
    require(era["depth_white_m"] == 160 and era["ice_exclusion"] is None, "Incompatible reused encoding")
    artifacts = {item["path"]: item for item in previous["artifacts"]}
    for suffix in ("depth-change", "depth-change-8bit", "land-change", "shoreline", "excluded"):
        name = f"{scenario['slug']}-{suffix}.png"
        require(name in artifacts, "Missing reused artifact")
        verify_file(source_dir / name, artifacts[name])
        shutil.copyfile(source_dir / name, output_dir / name)
    return {**era, "reused_from": {"manifest": "provenance/reused-manifest.json", **fingerprint(source_dir / "manifest.json")}}
