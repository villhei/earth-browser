import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A location in a connection that can be used for resuming pagination. */
  Cursor: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: { [key: string]: unknown };
  /** A universally unique identifier as defined by [RFC 4122](https://tools.ietf.org/html/rfc4122). */
  UUID: any;
};

/** All input for the create `Dataset` mutation. */
export type CreateDatasetInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Dataset` to be created by this mutation. */
  dataset: DatasetInput;
};

/** The output of our create `Dataset` mutation. */
export type CreateDatasetPayload = {
  __typename?: 'CreateDatasetPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Dataset` that was created by this mutation. */
  dataset?: Maybe<Dataset>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** An edge for our `Dataset`. May be used by Relay 1. */
  datasetEdge?: Maybe<DatasetsEdge>;
};


/** The output of our create `Dataset` mutation. */
export type CreateDatasetPayloadDatasetEdgeArgs = {
  orderBy?: Maybe<Array<DatasetsOrderBy>>;
};

/** All input for the create `FeatureGeometry` mutation. */
export type CreateFeatureGeometryInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `FeatureGeometry` to be created by this mutation. */
  featureGeometry: FeatureGeometryInput;
};

/** The output of our create `FeatureGeometry` mutation. */
export type CreateFeatureGeometryPayload = {
  __typename?: 'CreateFeatureGeometryPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `FeatureGeometry` that was created by this mutation. */
  featureGeometry?: Maybe<FeatureGeometry>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Feature` that is related to this `FeatureGeometry`. */
  featureByFeatureId?: Maybe<Feature>;
  /** An edge for our `FeatureGeometry`. May be used by Relay 1. */
  featureGeometryEdge?: Maybe<FeatureGeometriesEdge>;
};


/** The output of our create `FeatureGeometry` mutation. */
export type CreateFeatureGeometryPayloadFeatureGeometryEdgeArgs = {
  orderBy?: Maybe<Array<FeatureGeometriesOrderBy>>;
};

/** All input for the create `Feature` mutation. */
export type CreateFeatureInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Feature` to be created by this mutation. */
  feature: FeatureInput;
};

/** The output of our create `Feature` mutation. */
export type CreateFeaturePayload = {
  __typename?: 'CreateFeaturePayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Feature` that was created by this mutation. */
  feature?: Maybe<Feature>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Dataset` that is related to this `Feature`. */
  datasetByDatasetId?: Maybe<Dataset>;
  /** An edge for our `Feature`. May be used by Relay 1. */
  featureEdge?: Maybe<FeaturesEdge>;
};


/** The output of our create `Feature` mutation. */
export type CreateFeaturePayloadFeatureEdgeArgs = {
  orderBy?: Maybe<Array<FeaturesOrderBy>>;
};

/** All input for the create `Property` mutation. */
export type CreatePropertyInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Property` to be created by this mutation. */
  property: PropertyInput;
};

/** The output of our create `Property` mutation. */
export type CreatePropertyPayload = {
  __typename?: 'CreatePropertyPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Property` that was created by this mutation. */
  property?: Maybe<Property>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Feature` that is related to this `Property`. */
  featureByFeatureId?: Maybe<Feature>;
  /** An edge for our `Property`. May be used by Relay 1. */
  propertyEdge?: Maybe<PropertiesEdge>;
};


/** The output of our create `Property` mutation. */
export type CreatePropertyPayloadPropertyEdgeArgs = {
  orderBy?: Maybe<Array<PropertiesOrderBy>>;
};


export type Dataset = Node & {
  __typename?: 'Dataset';
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
  id: Scalars['UUID'];
  type: Scalars['String'];
  name: Scalars['String'];
  crs?: Maybe<Scalars['JSON']>;
  bbox?: Maybe<Scalars['JSON']>;
  /** Reads and enables pagination through a set of `Feature`. */
  featuresByDatasetId: FeaturesConnection;
};


export type DatasetFeaturesByDatasetIdArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<Array<FeaturesOrderBy>>;
  condition?: Maybe<FeatureCondition>;
};

/** A condition to be used against `Dataset` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type DatasetCondition = {
  /** Checks for equality with the object’s `id` field. */
  id?: Maybe<Scalars['UUID']>;
  /** Checks for equality with the object’s `type` field. */
  type?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `name` field. */
  name?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `crs` field. */
  crs?: Maybe<Scalars['JSON']>;
  /** Checks for equality with the object’s `bbox` field. */
  bbox?: Maybe<Scalars['JSON']>;
};

/** An input for mutations affecting `Dataset` */
export type DatasetInput = {
  id?: Maybe<Scalars['UUID']>;
  type: Scalars['String'];
  name: Scalars['String'];
  crs?: Maybe<Scalars['JSON']>;
  bbox?: Maybe<Scalars['JSON']>;
};

/** Represents an update to a `Dataset`. Fields that are set will be updated. */
export type DatasetPatch = {
  id?: Maybe<Scalars['UUID']>;
  type?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  crs?: Maybe<Scalars['JSON']>;
  bbox?: Maybe<Scalars['JSON']>;
};

/** A connection to a list of `Dataset` values. */
export type DatasetsConnection = {
  __typename?: 'DatasetsConnection';
  /** A list of `Dataset` objects. */
  nodes: Array<Maybe<Dataset>>;
  /** A list of edges which contains the `Dataset` and cursor to aid in pagination. */
  edges: Array<DatasetsEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Dataset` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `Dataset` edge in the connection. */
export type DatasetsEdge = {
  __typename?: 'DatasetsEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `Dataset` at the end of the edge. */
  node?: Maybe<Dataset>;
};

/** Methods to use when ordering `Dataset`. */
export enum DatasetsOrderBy {
  Natural = 'NATURAL',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  TypeAsc = 'TYPE_ASC',
  TypeDesc = 'TYPE_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  CrsAsc = 'CRS_ASC',
  CrsDesc = 'CRS_DESC',
  BboxAsc = 'BBOX_ASC',
  BboxDesc = 'BBOX_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}

/** All input for the `deleteDatasetByNodeId` mutation. */
export type DeleteDatasetByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `Dataset` to be deleted. */
  nodeId: Scalars['ID'];
};

/** All input for the `deleteDataset` mutation. */
export type DeleteDatasetInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  id: Scalars['UUID'];
};

/** The output of our delete `Dataset` mutation. */
export type DeleteDatasetPayload = {
  __typename?: 'DeleteDatasetPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Dataset` that was deleted by this mutation. */
  dataset?: Maybe<Dataset>;
  deletedDatasetNodeId?: Maybe<Scalars['ID']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** An edge for our `Dataset`. May be used by Relay 1. */
  datasetEdge?: Maybe<DatasetsEdge>;
};


/** The output of our delete `Dataset` mutation. */
export type DeleteDatasetPayloadDatasetEdgeArgs = {
  orderBy?: Maybe<Array<DatasetsOrderBy>>;
};

/** All input for the `deleteFeatureByNodeId` mutation. */
export type DeleteFeatureByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `Feature` to be deleted. */
  nodeId: Scalars['ID'];
};

/** All input for the `deleteFeatureGeometryByNodeId` mutation. */
export type DeleteFeatureGeometryByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `FeatureGeometry` to be deleted. */
  nodeId: Scalars['ID'];
};

/** All input for the `deleteFeatureGeometry` mutation. */
export type DeleteFeatureGeometryInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  id: Scalars['UUID'];
};

/** The output of our delete `FeatureGeometry` mutation. */
export type DeleteFeatureGeometryPayload = {
  __typename?: 'DeleteFeatureGeometryPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `FeatureGeometry` that was deleted by this mutation. */
  featureGeometry?: Maybe<FeatureGeometry>;
  deletedFeatureGeometryNodeId?: Maybe<Scalars['ID']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Feature` that is related to this `FeatureGeometry`. */
  featureByFeatureId?: Maybe<Feature>;
  /** An edge for our `FeatureGeometry`. May be used by Relay 1. */
  featureGeometryEdge?: Maybe<FeatureGeometriesEdge>;
};


/** The output of our delete `FeatureGeometry` mutation. */
export type DeleteFeatureGeometryPayloadFeatureGeometryEdgeArgs = {
  orderBy?: Maybe<Array<FeatureGeometriesOrderBy>>;
};

/** All input for the `deleteFeature` mutation. */
export type DeleteFeatureInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  id: Scalars['UUID'];
};

/** The output of our delete `Feature` mutation. */
export type DeleteFeaturePayload = {
  __typename?: 'DeleteFeaturePayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Feature` that was deleted by this mutation. */
  feature?: Maybe<Feature>;
  deletedFeatureNodeId?: Maybe<Scalars['ID']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Dataset` that is related to this `Feature`. */
  datasetByDatasetId?: Maybe<Dataset>;
  /** An edge for our `Feature`. May be used by Relay 1. */
  featureEdge?: Maybe<FeaturesEdge>;
};


/** The output of our delete `Feature` mutation. */
export type DeleteFeaturePayloadFeatureEdgeArgs = {
  orderBy?: Maybe<Array<FeaturesOrderBy>>;
};

/** All input for the `deletePropertyByNodeId` mutation. */
export type DeletePropertyByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `Property` to be deleted. */
  nodeId: Scalars['ID'];
};

/** All input for the `deleteProperty` mutation. */
export type DeletePropertyInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  id: Scalars['UUID'];
};

/** The output of our delete `Property` mutation. */
export type DeletePropertyPayload = {
  __typename?: 'DeletePropertyPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Property` that was deleted by this mutation. */
  property?: Maybe<Property>;
  deletedPropertyNodeId?: Maybe<Scalars['ID']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Feature` that is related to this `Property`. */
  featureByFeatureId?: Maybe<Feature>;
  /** An edge for our `Property`. May be used by Relay 1. */
  propertyEdge?: Maybe<PropertiesEdge>;
};


/** The output of our delete `Property` mutation. */
export type DeletePropertyPayloadPropertyEdgeArgs = {
  orderBy?: Maybe<Array<PropertiesOrderBy>>;
};

export type Feature = Node & {
  __typename?: 'Feature';
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
  id: Scalars['UUID'];
  datasetId: Scalars['UUID'];
  bbox?: Maybe<Scalars['String']>;
  /** Reads a single `Dataset` that is related to this `Feature`. */
  datasetByDatasetId?: Maybe<Dataset>;
  /** Reads and enables pagination through a set of `Property`. */
  propertiesByFeatureId: PropertiesConnection;
  /** Reads and enables pagination through a set of `FeatureGeometry`. */
  featureGeometriesByFeatureId: FeatureGeometriesConnection;
};


export type FeaturePropertiesByFeatureIdArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<Array<PropertiesOrderBy>>;
  condition?: Maybe<PropertyCondition>;
};


export type FeatureFeatureGeometriesByFeatureIdArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<Array<FeatureGeometriesOrderBy>>;
  condition?: Maybe<FeatureGeometryCondition>;
};

/** A condition to be used against `Feature` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type FeatureCondition = {
  /** Checks for equality with the object’s `id` field. */
  id?: Maybe<Scalars['UUID']>;
  /** Checks for equality with the object’s `datasetId` field. */
  datasetId?: Maybe<Scalars['UUID']>;
  /** Checks for equality with the object’s `bbox` field. */
  bbox?: Maybe<Scalars['String']>;
};

/** A connection to a list of `FeatureGeometry` values. */
export type FeatureGeometriesConnection = {
  __typename?: 'FeatureGeometriesConnection';
  /** A list of `FeatureGeometry` objects. */
  nodes: Array<Maybe<FeatureGeometry>>;
  /** A list of edges which contains the `FeatureGeometry` and cursor to aid in pagination. */
  edges: Array<FeatureGeometriesEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `FeatureGeometry` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `FeatureGeometry` edge in the connection. */
export type FeatureGeometriesEdge = {
  __typename?: 'FeatureGeometriesEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `FeatureGeometry` at the end of the edge. */
  node?: Maybe<FeatureGeometry>;
};

/** Methods to use when ordering `FeatureGeometry`. */
export enum FeatureGeometriesOrderBy {
  Natural = 'NATURAL',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  FeatureIdAsc = 'FEATURE_ID_ASC',
  FeatureIdDesc = 'FEATURE_ID_DESC',
  GeometryAsc = 'GEOMETRY_ASC',
  GeometryDesc = 'GEOMETRY_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}

export type FeatureGeometry = Node & {
  __typename?: 'FeatureGeometry';
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
  id: Scalars['UUID'];
  featureId: Scalars['UUID'];
  geometry?: Maybe<Scalars['String']>;
  /** Reads a single `Feature` that is related to this `FeatureGeometry`. */
  featureByFeatureId?: Maybe<Feature>;
};

/**
 * A condition to be used against `FeatureGeometry` object types. All fields are
 * tested for equality and combined with a logical ‘and.’
 */
export type FeatureGeometryCondition = {
  /** Checks for equality with the object’s `id` field. */
  id?: Maybe<Scalars['UUID']>;
  /** Checks for equality with the object’s `featureId` field. */
  featureId?: Maybe<Scalars['UUID']>;
  /** Checks for equality with the object’s `geometry` field. */
  geometry?: Maybe<Scalars['String']>;
};

/** An input for mutations affecting `FeatureGeometry` */
export type FeatureGeometryInput = {
  id?: Maybe<Scalars['UUID']>;
  featureId: Scalars['UUID'];
  geometry?: Maybe<Scalars['String']>;
};

/** Represents an update to a `FeatureGeometry`. Fields that are set will be updated. */
export type FeatureGeometryPatch = {
  id?: Maybe<Scalars['UUID']>;
  featureId?: Maybe<Scalars['UUID']>;
  geometry?: Maybe<Scalars['String']>;
};

/** An input for mutations affecting `Feature` */
export type FeatureInput = {
  id?: Maybe<Scalars['UUID']>;
  datasetId: Scalars['UUID'];
  bbox?: Maybe<Scalars['String']>;
};

/** Represents an update to a `Feature`. Fields that are set will be updated. */
export type FeaturePatch = {
  id?: Maybe<Scalars['UUID']>;
  datasetId?: Maybe<Scalars['UUID']>;
  bbox?: Maybe<Scalars['String']>;
};

/** A connection to a list of `Feature` values. */
export type FeaturesConnection = {
  __typename?: 'FeaturesConnection';
  /** A list of `Feature` objects. */
  nodes: Array<Maybe<Feature>>;
  /** A list of edges which contains the `Feature` and cursor to aid in pagination. */
  edges: Array<FeaturesEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Feature` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `Feature` edge in the connection. */
export type FeaturesEdge = {
  __typename?: 'FeaturesEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `Feature` at the end of the edge. */
  node?: Maybe<Feature>;
};

/** Methods to use when ordering `Feature`. */
export enum FeaturesOrderBy {
  Natural = 'NATURAL',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  DatasetIdAsc = 'DATASET_ID_ASC',
  DatasetIdDesc = 'DATASET_ID_DESC',
  BboxAsc = 'BBOX_ASC',
  BboxDesc = 'BBOX_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}

export type GeojsonDataset = Node & {
  __typename?: 'GeojsonDataset';
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
  id: Scalars['UUID'];
  name?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['JSON']>;
};

/**
 * A condition to be used against `GeojsonDataset` object types. All fields are
 * tested for equality and combined with a logical ‘and.’
 */
export type GeojsonDatasetCondition = {
  /** Checks for equality with the object’s `id` field. */
  id?: Maybe<Scalars['UUID']>;
  /** Checks for equality with the object’s `name` field. */
  name?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `value` field. */
  value?: Maybe<Scalars['JSON']>;
};

/** A connection to a list of `GeojsonDataset` values. */
export type GeojsonDatasetsConnection = {
  __typename?: 'GeojsonDatasetsConnection';
  /** A list of `GeojsonDataset` objects. */
  nodes: Array<Maybe<GeojsonDataset>>;
  /** A list of edges which contains the `GeojsonDataset` and cursor to aid in pagination. */
  edges: Array<GeojsonDatasetsEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `GeojsonDataset` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `GeojsonDataset` edge in the connection. */
export type GeojsonDatasetsEdge = {
  __typename?: 'GeojsonDatasetsEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `GeojsonDataset` at the end of the edge. */
  node?: Maybe<GeojsonDataset>;
};

/** Methods to use when ordering `GeojsonDataset`. */
export enum GeojsonDatasetsOrderBy {
  Natural = 'NATURAL',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  ValueAsc = 'VALUE_ASC',
  ValueDesc = 'VALUE_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}

export type GeojsonFeature = Node & {
  __typename?: 'GeojsonFeature';
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
  id: Scalars['UUID'];
  datasetid?: Maybe<Scalars['UUID']>;
  feature?: Maybe<Scalars['JSON']>;
};

/**
 * A condition to be used against `GeojsonFeature` object types. All fields are
 * tested for equality and combined with a logical ‘and.’
 */
export type GeojsonFeatureCondition = {
  /** Checks for equality with the object’s `id` field. */
  id?: Maybe<Scalars['UUID']>;
  /** Checks for equality with the object’s `datasetid` field. */
  datasetid?: Maybe<Scalars['UUID']>;
  /** Checks for equality with the object’s `feature` field. */
  feature?: Maybe<Scalars['JSON']>;
};

/** A connection to a list of `GeojsonFeature` values. */
export type GeojsonFeaturesConnection = {
  __typename?: 'GeojsonFeaturesConnection';
  /** A list of `GeojsonFeature` objects. */
  nodes: Array<Maybe<GeojsonFeature>>;
  /** A list of edges which contains the `GeojsonFeature` and cursor to aid in pagination. */
  edges: Array<GeojsonFeaturesEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `GeojsonFeature` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `GeojsonFeature` edge in the connection. */
export type GeojsonFeaturesEdge = {
  __typename?: 'GeojsonFeaturesEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `GeojsonFeature` at the end of the edge. */
  node?: Maybe<GeojsonFeature>;
};

/** Methods to use when ordering `GeojsonFeature`. */
export enum GeojsonFeaturesOrderBy {
  Natural = 'NATURAL',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  DatasetidAsc = 'DATASETID_ASC',
  DatasetidDesc = 'DATASETID_DESC',
  FeatureAsc = 'FEATURE_ASC',
  FeatureDesc = 'FEATURE_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}


/** The root mutation type which contains root level fields which mutate data. */
export type Mutation = {
  __typename?: 'Mutation';
  /** Creates a single `Dataset`. */
  createDataset?: Maybe<CreateDatasetPayload>;
  /** Creates a single `FeatureGeometry`. */
  createFeatureGeometry?: Maybe<CreateFeatureGeometryPayload>;
  /** Creates a single `Feature`. */
  createFeature?: Maybe<CreateFeaturePayload>;
  /** Creates a single `Property`. */
  createProperty?: Maybe<CreatePropertyPayload>;
  /** Updates a single `Dataset` using its globally unique id and a patch. */
  updateDatasetByNodeId?: Maybe<UpdateDatasetPayload>;
  /** Updates a single `Dataset` using a unique key and a patch. */
  updateDataset?: Maybe<UpdateDatasetPayload>;
  /** Updates a single `FeatureGeometry` using its globally unique id and a patch. */
  updateFeatureGeometryByNodeId?: Maybe<UpdateFeatureGeometryPayload>;
  /** Updates a single `FeatureGeometry` using a unique key and a patch. */
  updateFeatureGeometry?: Maybe<UpdateFeatureGeometryPayload>;
  /** Updates a single `Feature` using its globally unique id and a patch. */
  updateFeatureByNodeId?: Maybe<UpdateFeaturePayload>;
  /** Updates a single `Feature` using a unique key and a patch. */
  updateFeature?: Maybe<UpdateFeaturePayload>;
  /** Updates a single `Property` using its globally unique id and a patch. */
  updatePropertyByNodeId?: Maybe<UpdatePropertyPayload>;
  /** Updates a single `Property` using a unique key and a patch. */
  updateProperty?: Maybe<UpdatePropertyPayload>;
  /** Deletes a single `Dataset` using its globally unique id. */
  deleteDatasetByNodeId?: Maybe<DeleteDatasetPayload>;
  /** Deletes a single `Dataset` using a unique key. */
  deleteDataset?: Maybe<DeleteDatasetPayload>;
  /** Deletes a single `FeatureGeometry` using its globally unique id. */
  deleteFeatureGeometryByNodeId?: Maybe<DeleteFeatureGeometryPayload>;
  /** Deletes a single `FeatureGeometry` using a unique key. */
  deleteFeatureGeometry?: Maybe<DeleteFeatureGeometryPayload>;
  /** Deletes a single `Feature` using its globally unique id. */
  deleteFeatureByNodeId?: Maybe<DeleteFeaturePayload>;
  /** Deletes a single `Feature` using a unique key. */
  deleteFeature?: Maybe<DeleteFeaturePayload>;
  /** Deletes a single `Property` using its globally unique id. */
  deletePropertyByNodeId?: Maybe<DeletePropertyPayload>;
  /** Deletes a single `Property` using a unique key. */
  deleteProperty?: Maybe<DeletePropertyPayload>;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateDatasetArgs = {
  input: CreateDatasetInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateFeatureGeometryArgs = {
  input: CreateFeatureGeometryInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateFeatureArgs = {
  input: CreateFeatureInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreatePropertyArgs = {
  input: CreatePropertyInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateDatasetByNodeIdArgs = {
  input: UpdateDatasetByNodeIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateDatasetArgs = {
  input: UpdateDatasetInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateFeatureGeometryByNodeIdArgs = {
  input: UpdateFeatureGeometryByNodeIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateFeatureGeometryArgs = {
  input: UpdateFeatureGeometryInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateFeatureByNodeIdArgs = {
  input: UpdateFeatureByNodeIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateFeatureArgs = {
  input: UpdateFeatureInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdatePropertyByNodeIdArgs = {
  input: UpdatePropertyByNodeIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdatePropertyArgs = {
  input: UpdatePropertyInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteDatasetByNodeIdArgs = {
  input: DeleteDatasetByNodeIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteDatasetArgs = {
  input: DeleteDatasetInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteFeatureGeometryByNodeIdArgs = {
  input: DeleteFeatureGeometryByNodeIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteFeatureGeometryArgs = {
  input: DeleteFeatureGeometryInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteFeatureByNodeIdArgs = {
  input: DeleteFeatureByNodeIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteFeatureArgs = {
  input: DeleteFeatureInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeletePropertyByNodeIdArgs = {
  input: DeletePropertyByNodeIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeletePropertyArgs = {
  input: DeletePropertyInput;
};

/** An object with a globally unique `ID`. */
export type Node = {
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
};

/** Information about pagination in a connection. */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['Cursor']>;
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['Cursor']>;
};

/** A connection to a list of `Property` values. */
export type PropertiesConnection = {
  __typename?: 'PropertiesConnection';
  /** A list of `Property` objects. */
  nodes: Array<Maybe<Property>>;
  /** A list of edges which contains the `Property` and cursor to aid in pagination. */
  edges: Array<PropertiesEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Property` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `Property` edge in the connection. */
export type PropertiesEdge = {
  __typename?: 'PropertiesEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `Property` at the end of the edge. */
  node?: Maybe<Property>;
};

/** Methods to use when ordering `Property`. */
export enum PropertiesOrderBy {
  Natural = 'NATURAL',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  FeatureIdAsc = 'FEATURE_ID_ASC',
  FeatureIdDesc = 'FEATURE_ID_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  NameLongAsc = 'NAME_LONG_ASC',
  NameLongDesc = 'NAME_LONG_DESC',
  AbbrevnameAsc = 'ABBREVNAME_ASC',
  AbbrevnameDesc = 'ABBREVNAME_DESC',
  PostalAsc = 'POSTAL_ASC',
  PostalDesc = 'POSTAL_DESC',
  TypeAsc = 'TYPE_ASC',
  TypeDesc = 'TYPE_DESC',
  WoeIdAsc = 'WOE_ID_ASC',
  WoeIdDesc = 'WOE_ID_DESC',
  LevelAsc = 'LEVEL_ASC',
  LevelDesc = 'LEVEL_DESC',
  PopRankAsc = 'POP_RANK_ASC',
  PopRankDesc = 'POP_RANK_DESC',
  Adm0A3UsAsc = 'ADM0_A3_US_ASC',
  Adm0A3UsDesc = 'ADM0_A3_US_DESC',
  IsoA2Asc = 'ISO_A2_ASC',
  IsoA2Desc = 'ISO_A2_DESC',
  ControllinAsc = 'CONTROLLIN_ASC',
  ControllinDesc = 'CONTROLLIN_DESC',
  AbbrevLenAsc = 'ABBREV_LEN_ASC',
  AbbrevLenDesc = 'ABBREV_LEN_DESC',
  WikipediaAsc = 'WIKIPEDIA_ASC',
  WikipediaDesc = 'WIKIPEDIA_DESC',
  Fips_10Asc = 'FIPS_10_ASC',
  Fips_10Desc = 'FIPS_10_DESC',
  LabelrankAsc = 'LABELRANK_ASC',
  LabelrankDesc = 'LABELRANK_DESC',
  SovereigntAsc = 'SOVEREIGNT_ASC',
  SovereigntDesc = 'SOVEREIGNT_DESC',
  SuA3Asc = 'SU_A3_ASC',
  SuA3Desc = 'SU_A3_DESC',
  GeouDifAsc = 'GEOU_DIF_ASC',
  GeouDifDesc = 'GEOU_DIF_DESC',
  IsoA3EhAsc = 'ISO_A3_EH_ASC',
  IsoA3EhDesc = 'ISO_A3_EH_DESC',
  FeatureclaAsc = 'FEATURECLA_ASC',
  FeatureclaDesc = 'FEATURECLA_DESC',
  Mapcolor9Asc = 'MAPCOLOR9_ASC',
  Mapcolor9Desc = 'MAPCOLOR9_DESC',
  FormalFrAsc = 'FORMAL_FR_ASC',
  FormalFrDesc = 'FORMAL_FR_DESC',
  LongLenAsc = 'LONG_LEN_ASC',
  LongLenDesc = 'LONG_LEN_DESC',
  BorderingAsc = 'BORDERING_ASC',
  BorderingDesc = 'BORDERING_DESC',
  FormalEnAsc = 'FORMAL_EN_ASC',
  FormalEnDesc = 'FORMAL_EN_DESC',
  WbA2Asc = 'WB_A2_ASC',
  WbA2Desc = 'WB_A2_DESC',
  HomepartAsc = 'HOMEPART_ASC',
  HomepartDesc = 'HOMEPART_DESC',
  GdpMdEstAsc = 'GDP_MD_EST_ASC',
  GdpMdEstDesc = 'GDP_MD_EST_DESC',
  EconomyAsc = 'ECONOMY_ASC',
  EconomyDesc = 'ECONOMY_DESC',
  IsoA3Asc = 'ISO_A3_ASC',
  IsoA3Desc = 'ISO_A3_DESC',
  PopYearAsc = 'POP_YEAR_ASC',
  PopYearDesc = 'POP_YEAR_DESC',
  Adm0A3Asc = 'ADM0_A3_ASC',
  Adm0A3Desc = 'ADM0_A3_DESC',
  BorderColorIndexAsc = 'BORDER_COLOR_INDEX_ASC',
  BorderColorIndexDesc = 'BORDER_COLOR_INDEX_DESC',
  MinZoomAsc = 'MIN_ZOOM_ASC',
  MinZoomDesc = 'MIN_ZOOM_DESC',
  Adm0A3WbAsc = 'ADM0_A3_WB_ASC',
  Adm0A3WbDesc = 'ADM0_A3_WB_DESC',
  Mapcolor13Asc = 'MAPCOLOR13_ASC',
  Mapcolor13Desc = 'MAPCOLOR13_DESC',
  GdpYearAsc = 'GDP_YEAR_ASC',
  GdpYearDesc = 'GDP_YEAR_DESC',
  BrkA3Asc = 'BRK_A3_ASC',
  BrkA3Desc = 'BRK_A3_DESC',
  SovA3Asc = 'SOV_A3_ASC',
  SovA3Desc = 'SOV_A3_DESC',
  IncomeGrpAsc = 'INCOME_GRP_ASC',
  IncomeGrpDesc = 'INCOME_GRP_DESC',
  IsoN3Asc = 'ISO_N3_ASC',
  IsoN3Desc = 'ISO_N3_DESC',
  Mapcolor8Asc = 'MAPCOLOR8_ASC',
  Mapcolor8Desc = 'MAPCOLOR8_DESC',
  GuA3Asc = 'GU_A3_ASC',
  GuA3Desc = 'GU_A3_DESC',
  RegionWbAsc = 'REGION_WB_ASC',
  RegionWbDesc = 'REGION_WB_DESC',
  PopEstAsc = 'POP_EST_ASC',
  PopEstDesc = 'POP_EST_DESC',
  NameSortAsc = 'NAME_SORT_ASC',
  NameSortDesc = 'NAME_SORT_DESC',
  SuDifAsc = 'SU_DIF_ASC',
  SuDifDesc = 'SU_DIF_DESC',
  AdminAsc = 'ADMIN_ASC',
  AdminDesc = 'ADMIN_DESC',
  AreaAsc = 'AREA_ASC',
  AreaDesc = 'AREA_DESC',
  Adm0DifAsc = 'ADM0_DIF_ASC',
  Adm0DifDesc = 'ADM0_DIF_DESC',
  WoeNoteAsc = 'WOE_NOTE_ASC',
  WoeNoteDesc = 'WOE_NOTE_DESC',
  MinLabelAsc = 'MIN_LABEL_ASC',
  MinLabelDesc = 'MIN_LABEL_DESC',
  ScalerankAsc = 'SCALERANK_ASC',
  ScalerankDesc = 'SCALERANK_DESC',
  WbA3Asc = 'WB_A3_ASC',
  WbA3Desc = 'WB_A3_DESC',
  RegionUnAsc = 'REGION_UN_ASC',
  RegionUnDesc = 'REGION_UN_DESC',
  WoeIdEhAsc = 'WOE_ID_EH_ASC',
  WoeIdEhDesc = 'WOE_ID_EH_DESC',
  SubunitAsc = 'SUBUNIT_ASC',
  SubunitDesc = 'SUBUNIT_DESC',
  SubregionAsc = 'SUBREGION_ASC',
  SubregionDesc = 'SUBREGION_DESC',
  BrkNameAsc = 'BRK_NAME_ASC',
  BrkNameDesc = 'BRK_NAME_DESC',
  MaxLabelAsc = 'MAX_LABEL_ASC',
  MaxLabelDesc = 'MAX_LABEL_DESC',
  WbCntryAsc = 'WB_CNTRY_ASC',
  WbCntryDesc = 'WB_CNTRY_DESC',
  ContinentAsc = 'CONTINENT_ASC',
  ContinentDesc = 'CONTINENT_DESC',
  GeounitAsc = 'GEOUNIT_ASC',
  GeounitDesc = 'GEOUNIT_DESC',
  NoteAdm0Asc = 'NOTE_ADM0_ASC',
  NoteAdm0Desc = 'NOTE_ADM0_DESC',
  NoteBrkAsc = 'NOTE_BRK_ASC',
  NoteBrkDesc = 'NOTE_BRK_DESC',
  AbbrevAsc = 'ABBREV_ASC',
  AbbrevDesc = 'ABBREV_DESC',
  UnA3Asc = 'UN_A3_ASC',
  UnA3Desc = 'UN_A3_DESC',
  WeblinksAsc = 'WEBLINKS_ASC',
  WeblinksDesc = 'WEBLINKS_DESC',
  NameCiawfAsc = 'NAME_CIAWF_ASC',
  NameCiawfDesc = 'NAME_CIAWF_DESC',
  Mapcolor7Asc = 'MAPCOLOR7_ASC',
  Mapcolor7Desc = 'MAPCOLOR7_DESC',
  NameAltAsc = 'NAME_ALT_ASC',
  NameAltDesc = 'NAME_ALT_DESC',
  FipsCodeAsc = 'FIPS_CODE_ASC',
  FipsCodeDesc = 'FIPS_CODE_DESC',
  NameLenAsc = 'NAME_LEN_ASC',
  NameLenDesc = 'NAME_LEN_DESC',
  BrkDiffAsc = 'BRK_DIFF_ASC',
  BrkDiffDesc = 'BRK_DIFF_DESC',
  Adm0A3UnAsc = 'ADM0_A3_UN_ASC',
  Adm0A3UnDesc = 'ADM0_A3_UN_DESC',
  Adm0A3IsAsc = 'ADM0_A3_IS_ASC',
  Adm0A3IsDesc = 'ADM0_A3_IS_DESC',
  TinyAsc = 'TINY_ASC',
  TinyDesc = 'TINY_DESC',
  LastcensusAsc = 'LASTCENSUS_ASC',
  LastcensusDesc = 'LASTCENSUS_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}

export type Property = Node & {
  __typename?: 'Property';
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
  id: Scalars['UUID'];
  featureId: Scalars['UUID'];
  name?: Maybe<Scalars['String']>;
  nameLong?: Maybe<Scalars['String']>;
  abbrevname?: Maybe<Scalars['String']>;
  postal?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  woeId?: Maybe<Scalars['Int']>;
  level?: Maybe<Scalars['Int']>;
  popRank?: Maybe<Scalars['Int']>;
  adm0A3Us?: Maybe<Scalars['String']>;
  isoA2?: Maybe<Scalars['String']>;
  controllin?: Maybe<Scalars['String']>;
  abbrevLen?: Maybe<Scalars['Int']>;
  wikipedia?: Maybe<Scalars['Int']>;
  fips10_?: Maybe<Scalars['String']>;
  labelrank?: Maybe<Scalars['Int']>;
  sovereignt?: Maybe<Scalars['String']>;
  suA3?: Maybe<Scalars['String']>;
  geouDif?: Maybe<Scalars['Int']>;
  isoA3Eh?: Maybe<Scalars['String']>;
  featurecla?: Maybe<Scalars['String']>;
  mapcolor9?: Maybe<Scalars['Int']>;
  formalFr?: Maybe<Scalars['String']>;
  longLen?: Maybe<Scalars['Int']>;
  bordering?: Maybe<Scalars['String']>;
  formalEn?: Maybe<Scalars['String']>;
  wbA2?: Maybe<Scalars['String']>;
  homepart?: Maybe<Scalars['Int']>;
  gdpMdEst?: Maybe<Scalars['Float']>;
  economy?: Maybe<Scalars['String']>;
  isoA3?: Maybe<Scalars['String']>;
  popYear?: Maybe<Scalars['Int']>;
  adm0A3?: Maybe<Scalars['String']>;
  borderColorIndex?: Maybe<Scalars['String']>;
  minZoom?: Maybe<Scalars['Float']>;
  adm0A3Wb?: Maybe<Scalars['Int']>;
  mapcolor13?: Maybe<Scalars['Int']>;
  gdpYear?: Maybe<Scalars['Int']>;
  brkA3?: Maybe<Scalars['String']>;
  sovA3?: Maybe<Scalars['String']>;
  incomeGrp?: Maybe<Scalars['String']>;
  isoN3?: Maybe<Scalars['String']>;
  mapcolor8?: Maybe<Scalars['Int']>;
  guA3?: Maybe<Scalars['String']>;
  regionWb?: Maybe<Scalars['String']>;
  popEst?: Maybe<Scalars['Int']>;
  nameSort?: Maybe<Scalars['String']>;
  suDif?: Maybe<Scalars['Int']>;
  admin?: Maybe<Scalars['String']>;
  area?: Maybe<Scalars['Float']>;
  adm0Dif?: Maybe<Scalars['Int']>;
  woeNote?: Maybe<Scalars['String']>;
  minLabel?: Maybe<Scalars['Float']>;
  scalerank?: Maybe<Scalars['Int']>;
  wbA3?: Maybe<Scalars['String']>;
  regionUn?: Maybe<Scalars['String']>;
  woeIdEh?: Maybe<Scalars['Int']>;
  subunit?: Maybe<Scalars['String']>;
  subregion?: Maybe<Scalars['String']>;
  brkName?: Maybe<Scalars['String']>;
  maxLabel?: Maybe<Scalars['Float']>;
  wbCntry?: Maybe<Scalars['String']>;
  continent?: Maybe<Scalars['String']>;
  geounit?: Maybe<Scalars['String']>;
  noteAdm0?: Maybe<Scalars['String']>;
  noteBrk?: Maybe<Scalars['String']>;
  abbrev?: Maybe<Scalars['String']>;
  unA3?: Maybe<Scalars['String']>;
  weblinks?: Maybe<Scalars['String']>;
  nameCiawf?: Maybe<Scalars['String']>;
  mapcolor7?: Maybe<Scalars['Int']>;
  nameAlt?: Maybe<Scalars['String']>;
  fipsCode?: Maybe<Scalars['String']>;
  nameLen?: Maybe<Scalars['Int']>;
  brkDiff?: Maybe<Scalars['Int']>;
  adm0A3Un?: Maybe<Scalars['Int']>;
  adm0A3Is?: Maybe<Scalars['String']>;
  tiny?: Maybe<Scalars['Int']>;
  lastcensus?: Maybe<Scalars['Int']>;
  /** Reads a single `Feature` that is related to this `Property`. */
  featureByFeatureId?: Maybe<Feature>;
};

/**
 * A condition to be used against `Property` object types. All fields are tested
 * for equality and combined with a logical ‘and.’
 */
export type PropertyCondition = {
  /** Checks for equality with the object’s `id` field. */
  id?: Maybe<Scalars['UUID']>;
  /** Checks for equality with the object’s `featureId` field. */
  featureId?: Maybe<Scalars['UUID']>;
  /** Checks for equality with the object’s `name` field. */
  name?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `nameLong` field. */
  nameLong?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `abbrevname` field. */
  abbrevname?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `postal` field. */
  postal?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `type` field. */
  type?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `woeId` field. */
  woeId?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `level` field. */
  level?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `popRank` field. */
  popRank?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `adm0A3Us` field. */
  adm0A3Us?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `isoA2` field. */
  isoA2?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `controllin` field. */
  controllin?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `abbrevLen` field. */
  abbrevLen?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `wikipedia` field. */
  wikipedia?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `fips10_` field. */
  fips10_?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `labelrank` field. */
  labelrank?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `sovereignt` field. */
  sovereignt?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `suA3` field. */
  suA3?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `geouDif` field. */
  geouDif?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `isoA3Eh` field. */
  isoA3Eh?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `featurecla` field. */
  featurecla?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `mapcolor9` field. */
  mapcolor9?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `formalFr` field. */
  formalFr?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `longLen` field. */
  longLen?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `bordering` field. */
  bordering?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `formalEn` field. */
  formalEn?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `wbA2` field. */
  wbA2?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `homepart` field. */
  homepart?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `gdpMdEst` field. */
  gdpMdEst?: Maybe<Scalars['Float']>;
  /** Checks for equality with the object’s `economy` field. */
  economy?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `isoA3` field. */
  isoA3?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `popYear` field. */
  popYear?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `adm0A3` field. */
  adm0A3?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `borderColorIndex` field. */
  borderColorIndex?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `minZoom` field. */
  minZoom?: Maybe<Scalars['Float']>;
  /** Checks for equality with the object’s `adm0A3Wb` field. */
  adm0A3Wb?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `mapcolor13` field. */
  mapcolor13?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `gdpYear` field. */
  gdpYear?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `brkA3` field. */
  brkA3?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `sovA3` field. */
  sovA3?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `incomeGrp` field. */
  incomeGrp?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `isoN3` field. */
  isoN3?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `mapcolor8` field. */
  mapcolor8?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `guA3` field. */
  guA3?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `regionWb` field. */
  regionWb?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `popEst` field. */
  popEst?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `nameSort` field. */
  nameSort?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `suDif` field. */
  suDif?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `admin` field. */
  admin?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `area` field. */
  area?: Maybe<Scalars['Float']>;
  /** Checks for equality with the object’s `adm0Dif` field. */
  adm0Dif?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `woeNote` field. */
  woeNote?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `minLabel` field. */
  minLabel?: Maybe<Scalars['Float']>;
  /** Checks for equality with the object’s `scalerank` field. */
  scalerank?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `wbA3` field. */
  wbA3?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `regionUn` field. */
  regionUn?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `woeIdEh` field. */
  woeIdEh?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `subunit` field. */
  subunit?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `subregion` field. */
  subregion?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `brkName` field. */
  brkName?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `maxLabel` field. */
  maxLabel?: Maybe<Scalars['Float']>;
  /** Checks for equality with the object’s `wbCntry` field. */
  wbCntry?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `continent` field. */
  continent?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `geounit` field. */
  geounit?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `noteAdm0` field. */
  noteAdm0?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `noteBrk` field. */
  noteBrk?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `abbrev` field. */
  abbrev?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `unA3` field. */
  unA3?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `weblinks` field. */
  weblinks?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `nameCiawf` field. */
  nameCiawf?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `mapcolor7` field. */
  mapcolor7?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `nameAlt` field. */
  nameAlt?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `fipsCode` field. */
  fipsCode?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `nameLen` field. */
  nameLen?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `brkDiff` field. */
  brkDiff?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `adm0A3Un` field. */
  adm0A3Un?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `adm0A3Is` field. */
  adm0A3Is?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `tiny` field. */
  tiny?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `lastcensus` field. */
  lastcensus?: Maybe<Scalars['Int']>;
};

/** An input for mutations affecting `Property` */
export type PropertyInput = {
  id?: Maybe<Scalars['UUID']>;
  featureId: Scalars['UUID'];
  name?: Maybe<Scalars['String']>;
  nameLong?: Maybe<Scalars['String']>;
  abbrevname?: Maybe<Scalars['String']>;
  postal?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  woeId?: Maybe<Scalars['Int']>;
  level?: Maybe<Scalars['Int']>;
  popRank?: Maybe<Scalars['Int']>;
  adm0A3Us?: Maybe<Scalars['String']>;
  isoA2?: Maybe<Scalars['String']>;
  controllin?: Maybe<Scalars['String']>;
  abbrevLen?: Maybe<Scalars['Int']>;
  wikipedia?: Maybe<Scalars['Int']>;
  fips10_?: Maybe<Scalars['String']>;
  labelrank?: Maybe<Scalars['Int']>;
  sovereignt?: Maybe<Scalars['String']>;
  suA3?: Maybe<Scalars['String']>;
  geouDif?: Maybe<Scalars['Int']>;
  isoA3Eh?: Maybe<Scalars['String']>;
  featurecla?: Maybe<Scalars['String']>;
  mapcolor9?: Maybe<Scalars['Int']>;
  formalFr?: Maybe<Scalars['String']>;
  longLen?: Maybe<Scalars['Int']>;
  bordering?: Maybe<Scalars['String']>;
  formalEn?: Maybe<Scalars['String']>;
  wbA2?: Maybe<Scalars['String']>;
  homepart?: Maybe<Scalars['Int']>;
  gdpMdEst?: Maybe<Scalars['Float']>;
  economy?: Maybe<Scalars['String']>;
  isoA3?: Maybe<Scalars['String']>;
  popYear?: Maybe<Scalars['Int']>;
  adm0A3?: Maybe<Scalars['String']>;
  borderColorIndex?: Maybe<Scalars['String']>;
  minZoom?: Maybe<Scalars['Float']>;
  adm0A3Wb?: Maybe<Scalars['Int']>;
  mapcolor13?: Maybe<Scalars['Int']>;
  gdpYear?: Maybe<Scalars['Int']>;
  brkA3?: Maybe<Scalars['String']>;
  sovA3?: Maybe<Scalars['String']>;
  incomeGrp?: Maybe<Scalars['String']>;
  isoN3?: Maybe<Scalars['String']>;
  mapcolor8?: Maybe<Scalars['Int']>;
  guA3?: Maybe<Scalars['String']>;
  regionWb?: Maybe<Scalars['String']>;
  popEst?: Maybe<Scalars['Int']>;
  nameSort?: Maybe<Scalars['String']>;
  suDif?: Maybe<Scalars['Int']>;
  admin?: Maybe<Scalars['String']>;
  area?: Maybe<Scalars['Float']>;
  adm0Dif?: Maybe<Scalars['Int']>;
  woeNote?: Maybe<Scalars['String']>;
  minLabel?: Maybe<Scalars['Float']>;
  scalerank?: Maybe<Scalars['Int']>;
  wbA3?: Maybe<Scalars['String']>;
  regionUn?: Maybe<Scalars['String']>;
  woeIdEh?: Maybe<Scalars['Int']>;
  subunit?: Maybe<Scalars['String']>;
  subregion?: Maybe<Scalars['String']>;
  brkName?: Maybe<Scalars['String']>;
  maxLabel?: Maybe<Scalars['Float']>;
  wbCntry?: Maybe<Scalars['String']>;
  continent?: Maybe<Scalars['String']>;
  geounit?: Maybe<Scalars['String']>;
  noteAdm0?: Maybe<Scalars['String']>;
  noteBrk?: Maybe<Scalars['String']>;
  abbrev?: Maybe<Scalars['String']>;
  unA3?: Maybe<Scalars['String']>;
  weblinks?: Maybe<Scalars['String']>;
  nameCiawf?: Maybe<Scalars['String']>;
  mapcolor7?: Maybe<Scalars['Int']>;
  nameAlt?: Maybe<Scalars['String']>;
  fipsCode?: Maybe<Scalars['String']>;
  nameLen?: Maybe<Scalars['Int']>;
  brkDiff?: Maybe<Scalars['Int']>;
  adm0A3Un?: Maybe<Scalars['Int']>;
  adm0A3Is?: Maybe<Scalars['String']>;
  tiny?: Maybe<Scalars['Int']>;
  lastcensus?: Maybe<Scalars['Int']>;
};

/** Represents an update to a `Property`. Fields that are set will be updated. */
export type PropertyPatch = {
  id?: Maybe<Scalars['UUID']>;
  featureId?: Maybe<Scalars['UUID']>;
  name?: Maybe<Scalars['String']>;
  nameLong?: Maybe<Scalars['String']>;
  abbrevname?: Maybe<Scalars['String']>;
  postal?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  woeId?: Maybe<Scalars['Int']>;
  level?: Maybe<Scalars['Int']>;
  popRank?: Maybe<Scalars['Int']>;
  adm0A3Us?: Maybe<Scalars['String']>;
  isoA2?: Maybe<Scalars['String']>;
  controllin?: Maybe<Scalars['String']>;
  abbrevLen?: Maybe<Scalars['Int']>;
  wikipedia?: Maybe<Scalars['Int']>;
  fips10_?: Maybe<Scalars['String']>;
  labelrank?: Maybe<Scalars['Int']>;
  sovereignt?: Maybe<Scalars['String']>;
  suA3?: Maybe<Scalars['String']>;
  geouDif?: Maybe<Scalars['Int']>;
  isoA3Eh?: Maybe<Scalars['String']>;
  featurecla?: Maybe<Scalars['String']>;
  mapcolor9?: Maybe<Scalars['Int']>;
  formalFr?: Maybe<Scalars['String']>;
  longLen?: Maybe<Scalars['Int']>;
  bordering?: Maybe<Scalars['String']>;
  formalEn?: Maybe<Scalars['String']>;
  wbA2?: Maybe<Scalars['String']>;
  homepart?: Maybe<Scalars['Int']>;
  gdpMdEst?: Maybe<Scalars['Float']>;
  economy?: Maybe<Scalars['String']>;
  isoA3?: Maybe<Scalars['String']>;
  popYear?: Maybe<Scalars['Int']>;
  adm0A3?: Maybe<Scalars['String']>;
  borderColorIndex?: Maybe<Scalars['String']>;
  minZoom?: Maybe<Scalars['Float']>;
  adm0A3Wb?: Maybe<Scalars['Int']>;
  mapcolor13?: Maybe<Scalars['Int']>;
  gdpYear?: Maybe<Scalars['Int']>;
  brkA3?: Maybe<Scalars['String']>;
  sovA3?: Maybe<Scalars['String']>;
  incomeGrp?: Maybe<Scalars['String']>;
  isoN3?: Maybe<Scalars['String']>;
  mapcolor8?: Maybe<Scalars['Int']>;
  guA3?: Maybe<Scalars['String']>;
  regionWb?: Maybe<Scalars['String']>;
  popEst?: Maybe<Scalars['Int']>;
  nameSort?: Maybe<Scalars['String']>;
  suDif?: Maybe<Scalars['Int']>;
  admin?: Maybe<Scalars['String']>;
  area?: Maybe<Scalars['Float']>;
  adm0Dif?: Maybe<Scalars['Int']>;
  woeNote?: Maybe<Scalars['String']>;
  minLabel?: Maybe<Scalars['Float']>;
  scalerank?: Maybe<Scalars['Int']>;
  wbA3?: Maybe<Scalars['String']>;
  regionUn?: Maybe<Scalars['String']>;
  woeIdEh?: Maybe<Scalars['Int']>;
  subunit?: Maybe<Scalars['String']>;
  subregion?: Maybe<Scalars['String']>;
  brkName?: Maybe<Scalars['String']>;
  maxLabel?: Maybe<Scalars['Float']>;
  wbCntry?: Maybe<Scalars['String']>;
  continent?: Maybe<Scalars['String']>;
  geounit?: Maybe<Scalars['String']>;
  noteAdm0?: Maybe<Scalars['String']>;
  noteBrk?: Maybe<Scalars['String']>;
  abbrev?: Maybe<Scalars['String']>;
  unA3?: Maybe<Scalars['String']>;
  weblinks?: Maybe<Scalars['String']>;
  nameCiawf?: Maybe<Scalars['String']>;
  mapcolor7?: Maybe<Scalars['Int']>;
  nameAlt?: Maybe<Scalars['String']>;
  fipsCode?: Maybe<Scalars['String']>;
  nameLen?: Maybe<Scalars['Int']>;
  brkDiff?: Maybe<Scalars['Int']>;
  adm0A3Un?: Maybe<Scalars['Int']>;
  adm0A3Is?: Maybe<Scalars['String']>;
  tiny?: Maybe<Scalars['Int']>;
  lastcensus?: Maybe<Scalars['Int']>;
};

/** The root query type which gives access points into the data universe. */
export type Query = Node & {
  __typename?: 'Query';
  /**
   * Exposes the root query type nested one level down. This is helpful for Relay 1
   * which can only query top level fields if they are in a particular form.
   */
  query: Query;
  /** The root query type must be a `Node` to work well with Relay 1 mutations. This just resolves to `query`. */
  nodeId: Scalars['ID'];
  /** Fetches an object given its globally unique `ID`. */
  node?: Maybe<Node>;
  /** Reads and enables pagination through a set of `Dataset`. */
  datasets?: Maybe<DatasetsConnection>;
  /** Reads and enables pagination through a set of `FeatureGeometry`. */
  featureGeometries?: Maybe<FeatureGeometriesConnection>;
  /** Reads and enables pagination through a set of `Feature`. */
  features?: Maybe<FeaturesConnection>;
  /** Reads and enables pagination through a set of `GeojsonDataset`. */
  geojsonDatasets?: Maybe<GeojsonDatasetsConnection>;
  /** Reads and enables pagination through a set of `GeojsonFeature`. */
  geojsonFeatures?: Maybe<GeojsonFeaturesConnection>;
  /** Reads and enables pagination through a set of `Property`. */
  properties?: Maybe<PropertiesConnection>;
  dataset?: Maybe<Dataset>;
  featureGeometry?: Maybe<FeatureGeometry>;
  feature?: Maybe<Feature>;
  geojsonDataset?: Maybe<GeojsonDataset>;
  geojsonFeature?: Maybe<GeojsonFeature>;
  property?: Maybe<Property>;
  /** Reads a single `Dataset` using its globally unique `ID`. */
  datasetByNodeId?: Maybe<Dataset>;
  /** Reads a single `FeatureGeometry` using its globally unique `ID`. */
  featureGeometryByNodeId?: Maybe<FeatureGeometry>;
  /** Reads a single `Feature` using its globally unique `ID`. */
  featureByNodeId?: Maybe<Feature>;
  /** Reads a single `GeojsonDataset` using its globally unique `ID`. */
  geojsonDatasetByNodeId?: Maybe<GeojsonDataset>;
  /** Reads a single `GeojsonFeature` using its globally unique `ID`. */
  geojsonFeatureByNodeId?: Maybe<GeojsonFeature>;
  /** Reads a single `Property` using its globally unique `ID`. */
  propertyByNodeId?: Maybe<Property>;
};


/** The root query type which gives access points into the data universe. */
export type QueryNodeArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryDatasetsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<Array<DatasetsOrderBy>>;
  condition?: Maybe<DatasetCondition>;
};


/** The root query type which gives access points into the data universe. */
export type QueryFeatureGeometriesArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<Array<FeatureGeometriesOrderBy>>;
  condition?: Maybe<FeatureGeometryCondition>;
};


/** The root query type which gives access points into the data universe. */
export type QueryFeaturesArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<Array<FeaturesOrderBy>>;
  condition?: Maybe<FeatureCondition>;
};


/** The root query type which gives access points into the data universe. */
export type QueryGeojsonDatasetsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<Array<GeojsonDatasetsOrderBy>>;
  condition?: Maybe<GeojsonDatasetCondition>;
};


/** The root query type which gives access points into the data universe. */
export type QueryGeojsonFeaturesArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<Array<GeojsonFeaturesOrderBy>>;
  condition?: Maybe<GeojsonFeatureCondition>;
};


/** The root query type which gives access points into the data universe. */
export type QueryPropertiesArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<Array<PropertiesOrderBy>>;
  condition?: Maybe<PropertyCondition>;
};


/** The root query type which gives access points into the data universe. */
export type QueryDatasetArgs = {
  id: Scalars['UUID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryFeatureGeometryArgs = {
  id: Scalars['UUID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryFeatureArgs = {
  id: Scalars['UUID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryGeojsonDatasetArgs = {
  id: Scalars['UUID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryGeojsonFeatureArgs = {
  id: Scalars['UUID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryPropertyArgs = {
  id: Scalars['UUID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryDatasetByNodeIdArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryFeatureGeometryByNodeIdArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryFeatureByNodeIdArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryGeojsonDatasetByNodeIdArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryGeojsonFeatureByNodeIdArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryPropertyByNodeIdArgs = {
  nodeId: Scalars['ID'];
};


/** All input for the `updateDatasetByNodeId` mutation. */
export type UpdateDatasetByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `Dataset` to be updated. */
  nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `Dataset` being updated. */
  patch: DatasetPatch;
};

/** All input for the `updateDataset` mutation. */
export type UpdateDatasetInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** An object where the defined keys will be set on the `Dataset` being updated. */
  patch: DatasetPatch;
  id: Scalars['UUID'];
};

/** The output of our update `Dataset` mutation. */
export type UpdateDatasetPayload = {
  __typename?: 'UpdateDatasetPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Dataset` that was updated by this mutation. */
  dataset?: Maybe<Dataset>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** An edge for our `Dataset`. May be used by Relay 1. */
  datasetEdge?: Maybe<DatasetsEdge>;
};


/** The output of our update `Dataset` mutation. */
export type UpdateDatasetPayloadDatasetEdgeArgs = {
  orderBy?: Maybe<Array<DatasetsOrderBy>>;
};

/** All input for the `updateFeatureByNodeId` mutation. */
export type UpdateFeatureByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `Feature` to be updated. */
  nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `Feature` being updated. */
  patch: FeaturePatch;
};

/** All input for the `updateFeatureGeometryByNodeId` mutation. */
export type UpdateFeatureGeometryByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `FeatureGeometry` to be updated. */
  nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `FeatureGeometry` being updated. */
  patch: FeatureGeometryPatch;
};

/** All input for the `updateFeatureGeometry` mutation. */
export type UpdateFeatureGeometryInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** An object where the defined keys will be set on the `FeatureGeometry` being updated. */
  patch: FeatureGeometryPatch;
  id: Scalars['UUID'];
};

/** The output of our update `FeatureGeometry` mutation. */
export type UpdateFeatureGeometryPayload = {
  __typename?: 'UpdateFeatureGeometryPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `FeatureGeometry` that was updated by this mutation. */
  featureGeometry?: Maybe<FeatureGeometry>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Feature` that is related to this `FeatureGeometry`. */
  featureByFeatureId?: Maybe<Feature>;
  /** An edge for our `FeatureGeometry`. May be used by Relay 1. */
  featureGeometryEdge?: Maybe<FeatureGeometriesEdge>;
};


/** The output of our update `FeatureGeometry` mutation. */
export type UpdateFeatureGeometryPayloadFeatureGeometryEdgeArgs = {
  orderBy?: Maybe<Array<FeatureGeometriesOrderBy>>;
};

/** All input for the `updateFeature` mutation. */
export type UpdateFeatureInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** An object where the defined keys will be set on the `Feature` being updated. */
  patch: FeaturePatch;
  id: Scalars['UUID'];
};

/** The output of our update `Feature` mutation. */
export type UpdateFeaturePayload = {
  __typename?: 'UpdateFeaturePayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Feature` that was updated by this mutation. */
  feature?: Maybe<Feature>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Dataset` that is related to this `Feature`. */
  datasetByDatasetId?: Maybe<Dataset>;
  /** An edge for our `Feature`. May be used by Relay 1. */
  featureEdge?: Maybe<FeaturesEdge>;
};


/** The output of our update `Feature` mutation. */
export type UpdateFeaturePayloadFeatureEdgeArgs = {
  orderBy?: Maybe<Array<FeaturesOrderBy>>;
};

/** All input for the `updatePropertyByNodeId` mutation. */
export type UpdatePropertyByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `Property` to be updated. */
  nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `Property` being updated. */
  patch: PropertyPatch;
};

/** All input for the `updateProperty` mutation. */
export type UpdatePropertyInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** An object where the defined keys will be set on the `Property` being updated. */
  patch: PropertyPatch;
  id: Scalars['UUID'];
};

/** The output of our update `Property` mutation. */
export type UpdatePropertyPayload = {
  __typename?: 'UpdatePropertyPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Property` that was updated by this mutation. */
  property?: Maybe<Property>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Feature` that is related to this `Property`. */
  featureByFeatureId?: Maybe<Feature>;
  /** An edge for our `Property`. May be used by Relay 1. */
  propertyEdge?: Maybe<PropertiesEdge>;
};


/** The output of our update `Property` mutation. */
export type UpdatePropertyPayloadPropertyEdgeArgs = {
  orderBy?: Maybe<Array<PropertiesOrderBy>>;
};

export type GeoJsonDatasetFragment = (
  { __typename?: 'GeojsonDataset' }
  & Pick<GeojsonDataset, 'id' | 'name' | 'value'>
);

export type GetGeoJsonDatasetQueryVariables = Exact<{
  id: Scalars['UUID'];
}>;


export type GetGeoJsonDatasetQuery = (
  { __typename?: 'Query' }
  & { geojsonDataset?: Maybe<(
    { __typename?: 'GeojsonDataset' }
    & GeoJsonDatasetFragment
  )> }
);

export type GeoJsonDatasetDescriptionFragment = (
  { __typename?: 'GeojsonDataset' }
  & Pick<GeojsonDataset, 'id' | 'name'>
);

export type GetGeoJsonDescriptionsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetGeoJsonDescriptionsQuery = (
  { __typename?: 'Query' }
  & { geojsonDatasets?: Maybe<(
    { __typename?: 'GeojsonDatasetsConnection' }
    & { nodes: Array<Maybe<(
      { __typename?: 'GeojsonDataset' }
      & GeoJsonDatasetDescriptionFragment
    )>> }
  )> }
);

export const GeoJsonDatasetFragmentDoc = gql`
    fragment GeoJSONDataset on GeojsonDataset {
  id
  name
  value
}
    `;
export const GeoJsonDatasetDescriptionFragmentDoc = gql`
    fragment GeoJSONDatasetDescription on GeojsonDataset {
  id
  name
}
    `;
export const GetGeoJsonDatasetDocument = gql`
    query GetGeoJSONDataset($id: UUID!) {
  geojsonDataset(id: $id) {
    ...GeoJSONDataset
  }
}
    ${GeoJsonDatasetFragmentDoc}`;

/**
 * __useGetGeoJsonDatasetQuery__
 *
 * To run a query within a React component, call `useGetGeoJsonDatasetQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetGeoJsonDatasetQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetGeoJsonDatasetQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetGeoJsonDatasetQuery(baseOptions: Apollo.QueryHookOptions<GetGeoJsonDatasetQuery, GetGeoJsonDatasetQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetGeoJsonDatasetQuery, GetGeoJsonDatasetQueryVariables>(GetGeoJsonDatasetDocument, options);
      }
export function useGetGeoJsonDatasetLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetGeoJsonDatasetQuery, GetGeoJsonDatasetQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetGeoJsonDatasetQuery, GetGeoJsonDatasetQueryVariables>(GetGeoJsonDatasetDocument, options);
        }
export type GetGeoJsonDatasetQueryHookResult = ReturnType<typeof useGetGeoJsonDatasetQuery>;
export type GetGeoJsonDatasetLazyQueryHookResult = ReturnType<typeof useGetGeoJsonDatasetLazyQuery>;
export type GetGeoJsonDatasetQueryResult = Apollo.QueryResult<GetGeoJsonDatasetQuery, GetGeoJsonDatasetQueryVariables>;
export const GetGeoJsonDescriptionsDocument = gql`
    query GetGeoJSONDescriptions {
  geojsonDatasets {
    nodes {
      ...GeoJSONDatasetDescription
    }
  }
}
    ${GeoJsonDatasetDescriptionFragmentDoc}`;

/**
 * __useGetGeoJsonDescriptionsQuery__
 *
 * To run a query within a React component, call `useGetGeoJsonDescriptionsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetGeoJsonDescriptionsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetGeoJsonDescriptionsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetGeoJsonDescriptionsQuery(baseOptions?: Apollo.QueryHookOptions<GetGeoJsonDescriptionsQuery, GetGeoJsonDescriptionsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetGeoJsonDescriptionsQuery, GetGeoJsonDescriptionsQueryVariables>(GetGeoJsonDescriptionsDocument, options);
      }
export function useGetGeoJsonDescriptionsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetGeoJsonDescriptionsQuery, GetGeoJsonDescriptionsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetGeoJsonDescriptionsQuery, GetGeoJsonDescriptionsQueryVariables>(GetGeoJsonDescriptionsDocument, options);
        }
export type GetGeoJsonDescriptionsQueryHookResult = ReturnType<typeof useGetGeoJsonDescriptionsQuery>;
export type GetGeoJsonDescriptionsLazyQueryHookResult = ReturnType<typeof useGetGeoJsonDescriptionsLazyQuery>;
export type GetGeoJsonDescriptionsQueryResult = Apollo.QueryResult<GetGeoJsonDescriptionsQuery, GetGeoJsonDescriptionsQueryVariables>;