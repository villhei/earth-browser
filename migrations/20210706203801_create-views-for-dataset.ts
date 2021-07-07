import { Knex } from "knex"

export async function up(knex: Knex): Promise<void> {
  await knex.raw(`
    create view geojson_features as
    select
        f.id as id,
        f."datasetID" as datasetID,
        st_asgeojson(row(fg.geometry,
        to_jsonb(p.*)::jsonb - 'id')) as feature
    from
        features f
    join properties p on
        f.id = p."featureID"
    join feature_geometries fg on
        f.id = fg."featureID";

    grant
    select
        on
        geojson_features to default_role;

    grant select on geojson_features to default_role;
    comment on view geojson_features is E'@primaryKey id';
        
    create view geojson_datasets as
    select
        fc.id as id,
        fc.name as name,
        to_jsonb(fc) as value
    from
        (
        select
            datasets.id,
            datasets.name as name,
            'FeatureCollection' as type,
            jsonb_agg(gf.feature::jsonb) as features
        from
            datasets
        join geojson_features gf on
            gf.datasetID = datasets.id
        group by
            datasets.id) as fc;

    grant select on geojson_datasets to default_role;
    comment on view geojson_datasets is E'@primaryKey id';
    `)
}

export async function down(knex: Knex): Promise<void> {
  await knex.raw(`
        revoke select on geojson_datasets from default_role;
      	drop view geojson_datasets;
        revoke select on geojson_features from default_role;
       	drop view geojson_features;

    `)
}
