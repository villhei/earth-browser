import { Knex } from "knex"

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable("datasets", (table) => {
    table.uuid("id").primary().defaultTo(knex.raw("gen_random_uuid()"))
    table.string("type").notNullable()
    table.string("name").notNullable()
    table.json("crs")
    table.json("bbox")
    table.json("features")
  })

  await knex("datasets").insert(
    knex.raw(
      "SELECT gen_random_uuid() as id, content ->> 'type' as type, content ->> 'name' as name, content -> 'crs' as crs, content -> 'bbox' as bbox, content -> 'features' as features FROM countries_import"
    )
  )

  await knex.schema.createTable("features", (table) => {
    table.uuid("id").primary().defaultTo(knex.raw("gen_random_uuid()"))
    table
      .uuid("datasetID")
      .notNullable()
      .references("id")
      .inTable("datasets")
      .onDelete("CASCADE")
    table.json("bbox")
    table.json("geometry").notNullable()
    table.json("properties").notNullable()
  })

  await knex("features").insert(
    knex.raw(
      "SELECT gen_random_uuid() as id, id as datasetID, json_array_elements(features)-> 'bbox' as bbox, json_array_elements(features)-> 'geometry' as geometry, json_array_elements(features)-> 'properties' as properties from datasets;"
    )
  )
  await knex.schema.createTable("properties", (table) => {
    table.uuid("id").primary().defaultTo(knex.raw("gen_random_uuid()"))
    table
      .uuid("featureID")
      .notNullable()
      .references("id")
      .inTable("features")
      .onDelete("CASCADE")
    table.string("NAME")
    table.string("NAME_LONG")
    table.string("ABBREVNAME")
    table.string("POSTAL")
    table.string("TYPE")
    table.integer("WOE_ID")
    table.integer("LEVEL")
    table.integer("POP_RANK")
    table.string("ADM0_A3_US")
    table.string("ISO_A2")
    table.string("CONTROLLIN")
    table.integer("ABBREV_LEN")
    table.integer("WIKIPEDIA")
    table.string("FIPS_10_")
    table.integer("LABELRANK")
    table.string("SOVEREIGNT")
    table.string("SU_A3")
    table.integer("GEOU_DIF")
    table.string("ISO_A3_EH")
    table.string("featurecla")
    table.integer("MAPCOLOR9")
    table.string("FORMAL_FR")
    table.integer("LONG_LEN")
    table.string("BORDERING", 511)
    table.string("FORMAL_EN")
    table.string("WB_A2")
    table.integer("HOMEPART")
    table.float("GDP_MD_EST")
    table.string("ECONOMY")
    table.string("ISO_A3")
    table.integer("POP_YEAR")
    table.string("ADM0_A3")
    table.string("BORDER_COLOR_INDEX")
    table.float("MIN_ZOOM")
    table.integer("ADM0_A3_WB")
    table.integer("MAPCOLOR13")
    table.integer("GDP_YEAR")
    table.string("BRK_A3")
    table.string("SOV_A3")
    table.string("INCOME_GRP")
    table.string("ISO_N3")
    table.integer("MAPCOLOR8")
    table.string("GU_A3")
    table.string("REGION_WB")
    table.integer("POP_EST")
    table.string("NAME_SORT")
    table.integer("SU_DIF")
    table.string("ADMIN")
    table.float("AREA")
    table.integer("ADM0_DIF")
    table.string("WOE_NOTE")
    table.float("MIN_LABEL")
    table.integer("scalerank")
    table.string("WB_A3")
    table.string("REGION_UN")
    table.integer("WOE_ID_EH")
    table.string("SUBUNIT")
    table.string("SUBREGION")
    table.string("BRK_NAME")
    table.float("MAX_LABEL")
    table.string("WB_CNTRY")
    table.string("CONTINENT")
    table.string("GEOUNIT")
    table.string("NOTE_ADM0")
    table.string("NOTE_BRK")
    table.string("ABBREV")
    table.string("UN_A3")
    table.string("weblinks")
    table.string("NAME_CIAWF")
    table.integer("MAPCOLOR7")
    table.string("NAME_ALT")
    table.string("FIPS_CODE")
    table.integer("NAME_LEN")
    table.integer("BRK_DIFF")
    table.integer("ADM0_A3_UN")
    table.string("ADM0_A3_IS")
    table.integer("TINY")
    table.integer("LASTCENSUS")
  })

  await knex("properties").insert(
    knex.raw(
      `SELECT
            gen_random_uuid() as id,
            id as featureID,
            properties ->> 'NAME' as NAME,
            properties ->> 'NAME_LONG' as NAME_LONG,
            properties ->> 'ABBREVNAME' as ABBREVNAME,
            properties ->> 'POSTAL' as POSTAL,
            COALESCE(properties ->> 'TYPE', properties ->> 'type') as TYPE,
            (properties ->> 'WOE_ID')::int as WOE_ID,
            (properties ->> 'LEVEL')::int as LEVEL,
            (properties ->> 'POP_RANK')::int as POP_RANK,
            properties ->> 'ADM0_A3_US' as ADM0_A3_US,
            properties ->> 'ISO_A2' as ISO_A2,
            properties ->> 'CONTROLLIN' as CONTROLLIN,
            (properties ->> 'ABBREV_LEN')::int as ABBREV_LEN,
            (properties ->> 'WIKIPEDIA')::int as WIKIPEDIA,
            properties ->> 'FIPS_10_' as FIPS_10_,
            (properties ->> 'LABELRANK')::int as LABELRANK,
            properties ->> 'SOVEREIGNT' as SOVEREIGNT,
            properties ->> 'SU_A3' as SU_A3,
            (properties ->> 'GEOU_DIF')::int as GEOU_DIF,
            properties ->> 'ISO_A3_EH' as ISO_A3_EH,
            properties ->> 'featurecla' as featurecla,
            (properties ->> 'MAPCOLOR9')::int as MAPCOLOR9,
            properties ->> 'FORMAL_FR' as FORMAL_FR,
            (properties ->> 'LONG_LEN')::int as LONG_LEN,
            properties ->> 'BORDERING' as BORDERING,
            properties ->> 'FORMAL_EN' as FORMAL_EN,
            properties ->> 'WB_A2' as WB_A2,
            (properties ->> 'HOMEPART')::int as HOMEPART,
            (properties ->> 'GDP_MD_EST')::float as GDP_MD_EST,
            properties ->> 'ECONOMY' as ECONOMY,
            properties ->> 'ISO_A3' as ISO_A3,
            (properties ->> 'POP_YEAR')::int as POP_YEAR,
            properties ->> 'ADM0_A3' as ADM0_A3,
            properties ->> 'BORDER_COLOR' as BORDER_COLOR,
            (properties ->> 'MIN_ZOOM')::float as MIN_ZOOM,
            (properties ->> 'ADM0_A3_WB')::int as ADM0_A3_WB,
            (properties ->> 'MAPCOLOR13')::int as MAPCOLOR13,
            (properties ->> 'GDP_YEAR')::int as GDP_YEAR,
            properties ->> 'BRK_A3' as BRK_A3,
            properties ->> 'SOV_A3' as SOV_A3,
            properties ->> 'INCOME_GRP' as INCOME_GRP,
            properties ->> 'ISO_N3' as ISO_N3,
            (properties ->> 'MAPCOLOR8')::int as MAPCOLOR8,
            properties ->> 'GU_A3' as GU_A3,
            properties ->> 'REGION_WB' as REGION_WB,
            (properties ->> 'POP_EST')::int as POP_EST,
            properties ->> 'NAME_SORT' as NAME_SORT,
            (properties ->> 'SU_DIF')::int as SU_DIF,
            properties ->> 'ADMIN' as ADMIN,
            (properties ->> 'AREA')::float as AREA,
            (properties ->> 'ADM0_DIF')::int as ADM0_DIF,
            properties ->> 'WOE_NOTE' as WOE_NOTE,
            (properties ->> 'MIN_LABEL')::float as MIN_LABEL,
            (properties ->> 'scalerank')::int as scalerank,
            properties ->> 'WB_A3' as WB_A3,
            properties ->> 'REGION_UN' as REGION_UN,
            (properties ->> 'WOE_ID_EH')::int as WOE_ID_EH,
            properties ->> 'SUBUNIT' as SUBUNIT,
            properties ->> 'SUBREGION' as SUBREGION,
            properties ->> 'BRK_NAME' as BRK_NAME,
            (properties ->> 'MAX_LABEL')::float as MAX_LABEL,
            properties ->> 'WB_CNTRY' as WB_CNTRY,
            properties ->> 'CONTINENT' as CONTINENT,
            properties ->> 'GEOUNIT' as GEOUNIT,
            properties ->> 'NOTE_ADM0' as NOTE_ADM0,
            properties ->> 'NOTE_BRK' as NOTE_BRK,
            properties ->> 'ABBREV' as ABBREV,
            properties ->> 'UN_A3' as UN_A3,
            properties ->> 'weblinks' as weblinks,
            properties ->> 'NAME_CIAWF' as NAME_CIAWF,
            (properties ->> 'MAPCOLOR7')::int as MAPCOLOR7,
            properties ->> 'NAME_ALT' as NAME_ALT,
            properties ->> 'FIPS_CODE' as FIPS_CODE,
            (properties ->> 'NAME_LEN')::int as NAME_LEN,
            (properties ->> 'BRK_DIFF')::int as BRK_DIFF,
            (properties ->> 'ADM0_A3_UN')::int as ADM0_A3_UN,
            properties ->> 'ADM0_A3_IS' as ADM0_A3_IS,
            (properties ->> 'TINY')::int as TINY,
            (properties ->> 'LASTCENSUS')::int as LASTCENSUS
    FROM features;`
    )
  )
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable("properties")
  await knex.schema.dropTable("features")
  await knex.schema.dropTable("datasets")
}
