"""Explicit reconstruction dates independent of the historical territory catalog."""
import csv
import io

from .contract import DATA, calendar_bp, fingerprint, load_contract, read_json, require, selected_members, verify_file

RECORD = "RECONSTRUCTION-BC22000.json"
SLUG = "world-bc22000"


def load_overlay_contract():
    contract, selection, catalog = load_contract()
    extra = read_json(DATA / RECORD)
    require(extra["record_version"] == "1.0.0", "Unsupported additional-era record")
    require(extra["base_selection"] == fingerprint(DATA / "SOURCE-SELECTION.json"), "Stale base selection")
    era = extra["era"]
    require(era == {"slug": SLUG, "year_start": -22000, "target_calendar_bp": calendar_bp(-22000),
                    "age_system": "calendar BP (1950)"}, "Additional era chronology mismatch")
    require(SLUG not in catalog, "Additional era duplicates territory catalog")
    require(len(extra["downloads"]) == 2 and all(d in selection["downloads"] for d in extra["downloads"]),
            "Additional source archives differ from pinned originals")
    require(len(extra["inspected_layers"]) == 6, "Expected six additional ice layers")
    require(len(extra["permitted_margin_uses"]) == 2
            and {u["dataset"] for u in extra["permitted_margin_uses"]} == {"nadi-1", "dated-1"},
            "Expected both regional ice sources")
    selection["inspected_layers"].extend(extra["inspected_layers"])
    for use in extra["permitted_margin_uses"]:
        require(use["era_slug"] == SLUG and use["target_calendar_bp"] == era["target_calendar_bp"]
                and use["source_calendar_bp"] == 24000 and use["source_minus_target_years"] == 51
                and use["policy"] == "nearest_slice_approximation", "Additional ice chronology mismatch")
        require(use["bounds"] == (["OPTIMAL", "MIN", "MAX"] if use["dataset"] == "nadi-1" else ["mc", "min", "max"]),
                "Incomplete additional uncertainty suite")
        selected_members(selection, use)
    contract["permitted_margin_uses"].extend(extra["permitted_margin_uses"])
    catalog[SLUG] = era
    return contract, selection, catalog


def sea_level_record():
    record = read_json(DATA / RECORD)["sea_level"]
    path = DATA / record["path"]
    verify_file(path, record)
    lines = path.read_text().splitlines()
    start = next(i for i, line in enumerate(lines) if line.startswith("age_calkaBP\t"))
    rows = list(csv.DictReader(io.StringIO("\n".join(lines[start:])), delimiter="\t"))
    matches = [row for row in rows if float(row["age_calkaBP"]) * 1000 == record["source_calendar_bp"]]
    require(len(matches) == 1, "Missing/duplicate sea-level source row")
    row = matches[0]
    require(record["column"] == "SeaLev_shortPC1" and record["source_calendar_bp"] == 24000
            and record["target_calendar_bp"] == calendar_bp(-22000)
            and record["source_minus_target_years"] == 51 and record["interpolation"] == "none",
            "Sea-level source chronology mismatch")
    require(float(row[record["column"]]) == record["sea_level_m"]
            and float(row["SeaLev_shortPC1_err_sig"]) == record["standard_deviation_m"]
            and [float(row[k]) for k in ("SeaLev_shortPC1_err_lo", "SeaLev_shortPC1_err_up")]
            == record["source_95_percent_interval_m"], "Sea-level values differ from pinned data")
    return record
