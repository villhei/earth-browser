import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** A location in a connection that can be used for resuming pagination. */
  Cursor: { input: any; output: any; }
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: { input: { [key: string]: unknown }; output: { [key: string]: unknown }; }
  /** A universally unique identifier as defined by [RFC 4122](https://tools.ietf.org/html/rfc4122). */
  UUID: { input: any; output: any; }
};

/** All input for the create `Dataset` mutation. */
export type CreateDatasetInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
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
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** The `Dataset` that was created by this mutation. */
  dataset?: Maybe<Dataset>;
  /** An edge for our `Dataset`. May be used by Relay 1. */
  datasetEdge?: Maybe<DatasetsEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our create `Dataset` mutation. */
export type CreateDatasetPayloadDatasetEdgeArgs = {
  orderBy?: InputMaybe<Array<DatasetsOrderBy>>;
};

/** All input for the create `FeatureGeometry` mutation. */
export type CreateFeatureGeometryInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
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
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** Reads a single `Feature` that is related to this `FeatureGeometry`. */
  featureByFeatureId?: Maybe<Feature>;
  /** The `FeatureGeometry` that was created by this mutation. */
  featureGeometry?: Maybe<FeatureGeometry>;
  /** An edge for our `FeatureGeometry`. May be used by Relay 1. */
  featureGeometryEdge?: Maybe<FeatureGeometriesEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our create `FeatureGeometry` mutation. */
export type CreateFeatureGeometryPayloadFeatureGeometryEdgeArgs = {
  orderBy?: InputMaybe<Array<FeatureGeometriesOrderBy>>;
};

/** All input for the create `Feature` mutation. */
export type CreateFeatureInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
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
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** Reads a single `Dataset` that is related to this `Feature`. */
  datasetByDatasetId?: Maybe<Dataset>;
  /** The `Feature` that was created by this mutation. */
  feature?: Maybe<Feature>;
  /** An edge for our `Feature`. May be used by Relay 1. */
  featureEdge?: Maybe<FeaturesEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our create `Feature` mutation. */
export type CreateFeaturePayloadFeatureEdgeArgs = {
  orderBy?: InputMaybe<Array<FeaturesOrderBy>>;
};

/** All input for the create `Property` mutation. */
export type CreatePropertyInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
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
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** Reads a single `Feature` that is related to this `Property`. */
  featureByFeatureId?: Maybe<Feature>;
  /** The `Property` that was created by this mutation. */
  property?: Maybe<Property>;
  /** An edge for our `Property`. May be used by Relay 1. */
  propertyEdge?: Maybe<PropertiesEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our create `Property` mutation. */
export type CreatePropertyPayloadPropertyEdgeArgs = {
  orderBy?: InputMaybe<Array<PropertiesOrderBy>>;
};

export type Dataset = Node & {
  __typename?: 'Dataset';
  bbox?: Maybe<Scalars['JSON']['output']>;
  crs?: Maybe<Scalars['JSON']['output']>;
  /** Reads and enables pagination through a set of `Feature`. */
  featuresByDatasetId: FeaturesConnection;
  id: Scalars['UUID']['output'];
  name: Scalars['String']['output'];
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID']['output'];
  type: Scalars['String']['output'];
};


export type DatasetFeaturesByDatasetIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<FeatureCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<FeaturesOrderBy>>;
};

/** A condition to be used against `Dataset` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type DatasetCondition = {
  /** Checks for equality with the object’s `bbox` field. */
  bbox?: InputMaybe<Scalars['JSON']['input']>;
  /** Checks for equality with the object’s `crs` field. */
  crs?: InputMaybe<Scalars['JSON']['input']>;
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars['UUID']['input']>;
  /** Checks for equality with the object’s `name` field. */
  name?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `type` field. */
  type?: InputMaybe<Scalars['String']['input']>;
};

/** An input for mutations affecting `Dataset` */
export type DatasetInput = {
  bbox?: InputMaybe<Scalars['JSON']['input']>;
  crs?: InputMaybe<Scalars['JSON']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  name: Scalars['String']['input'];
  type: Scalars['String']['input'];
};

/** Represents an update to a `Dataset`. Fields that are set will be updated. */
export type DatasetPatch = {
  bbox?: InputMaybe<Scalars['JSON']['input']>;
  crs?: InputMaybe<Scalars['JSON']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
};

/** A connection to a list of `Dataset` values. */
export type DatasetsConnection = {
  __typename?: 'DatasetsConnection';
  /** A list of edges which contains the `Dataset` and cursor to aid in pagination. */
  edges: Array<DatasetsEdge>;
  /** A list of `Dataset` objects. */
  nodes: Array<Maybe<Dataset>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Dataset` you could get from the connection. */
  totalCount: Scalars['Int']['output'];
};

/** A `Dataset` edge in the connection. */
export type DatasetsEdge = {
  __typename?: 'DatasetsEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** The `Dataset` at the end of the edge. */
  node?: Maybe<Dataset>;
};

/** Methods to use when ordering `Dataset`. */
export enum DatasetsOrderBy {
  BboxAsc = 'BBOX_ASC',
  BboxDesc = 'BBOX_DESC',
  CrsAsc = 'CRS_ASC',
  CrsDesc = 'CRS_DESC',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  TypeAsc = 'TYPE_ASC',
  TypeDesc = 'TYPE_DESC'
}

/** All input for the `deleteDatasetByNodeId` mutation. */
export type DeleteDatasetByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The globally unique `ID` which will identify a single `Dataset` to be deleted. */
  nodeId: Scalars['ID']['input'];
};

/** All input for the `deleteDataset` mutation. */
export type DeleteDatasetInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['UUID']['input'];
};

/** The output of our delete `Dataset` mutation. */
export type DeleteDatasetPayload = {
  __typename?: 'DeleteDatasetPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** The `Dataset` that was deleted by this mutation. */
  dataset?: Maybe<Dataset>;
  /** An edge for our `Dataset`. May be used by Relay 1. */
  datasetEdge?: Maybe<DatasetsEdge>;
  deletedDatasetNodeId?: Maybe<Scalars['ID']['output']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our delete `Dataset` mutation. */
export type DeleteDatasetPayloadDatasetEdgeArgs = {
  orderBy?: InputMaybe<Array<DatasetsOrderBy>>;
};

/** All input for the `deleteFeatureByNodeId` mutation. */
export type DeleteFeatureByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The globally unique `ID` which will identify a single `Feature` to be deleted. */
  nodeId: Scalars['ID']['input'];
};

/** All input for the `deleteFeatureGeometryByNodeId` mutation. */
export type DeleteFeatureGeometryByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The globally unique `ID` which will identify a single `FeatureGeometry` to be deleted. */
  nodeId: Scalars['ID']['input'];
};

/** All input for the `deleteFeatureGeometry` mutation. */
export type DeleteFeatureGeometryInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['UUID']['input'];
};

/** The output of our delete `FeatureGeometry` mutation. */
export type DeleteFeatureGeometryPayload = {
  __typename?: 'DeleteFeatureGeometryPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  deletedFeatureGeometryNodeId?: Maybe<Scalars['ID']['output']>;
  /** Reads a single `Feature` that is related to this `FeatureGeometry`. */
  featureByFeatureId?: Maybe<Feature>;
  /** The `FeatureGeometry` that was deleted by this mutation. */
  featureGeometry?: Maybe<FeatureGeometry>;
  /** An edge for our `FeatureGeometry`. May be used by Relay 1. */
  featureGeometryEdge?: Maybe<FeatureGeometriesEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our delete `FeatureGeometry` mutation. */
export type DeleteFeatureGeometryPayloadFeatureGeometryEdgeArgs = {
  orderBy?: InputMaybe<Array<FeatureGeometriesOrderBy>>;
};

/** All input for the `deleteFeature` mutation. */
export type DeleteFeatureInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['UUID']['input'];
};

/** The output of our delete `Feature` mutation. */
export type DeleteFeaturePayload = {
  __typename?: 'DeleteFeaturePayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** Reads a single `Dataset` that is related to this `Feature`. */
  datasetByDatasetId?: Maybe<Dataset>;
  deletedFeatureNodeId?: Maybe<Scalars['ID']['output']>;
  /** The `Feature` that was deleted by this mutation. */
  feature?: Maybe<Feature>;
  /** An edge for our `Feature`. May be used by Relay 1. */
  featureEdge?: Maybe<FeaturesEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our delete `Feature` mutation. */
export type DeleteFeaturePayloadFeatureEdgeArgs = {
  orderBy?: InputMaybe<Array<FeaturesOrderBy>>;
};

/** All input for the `deletePropertyByNodeId` mutation. */
export type DeletePropertyByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The globally unique `ID` which will identify a single `Property` to be deleted. */
  nodeId: Scalars['ID']['input'];
};

/** All input for the `deleteProperty` mutation. */
export type DeletePropertyInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['UUID']['input'];
};

/** The output of our delete `Property` mutation. */
export type DeletePropertyPayload = {
  __typename?: 'DeletePropertyPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  deletedPropertyNodeId?: Maybe<Scalars['ID']['output']>;
  /** Reads a single `Feature` that is related to this `Property`. */
  featureByFeatureId?: Maybe<Feature>;
  /** The `Property` that was deleted by this mutation. */
  property?: Maybe<Property>;
  /** An edge for our `Property`. May be used by Relay 1. */
  propertyEdge?: Maybe<PropertiesEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our delete `Property` mutation. */
export type DeletePropertyPayloadPropertyEdgeArgs = {
  orderBy?: InputMaybe<Array<PropertiesOrderBy>>;
};

export type Feature = Node & {
  __typename?: 'Feature';
  bbox?: Maybe<Scalars['String']['output']>;
  /** Reads a single `Dataset` that is related to this `Feature`. */
  datasetByDatasetId?: Maybe<Dataset>;
  datasetId: Scalars['UUID']['output'];
  /** Reads and enables pagination through a set of `FeatureGeometry`. */
  featureGeometriesByFeatureId: FeatureGeometriesConnection;
  id: Scalars['UUID']['output'];
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID']['output'];
  /** Reads and enables pagination through a set of `Property`. */
  propertiesByFeatureId: PropertiesConnection;
};


export type FeatureFeatureGeometriesByFeatureIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<FeatureGeometryCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<FeatureGeometriesOrderBy>>;
};


export type FeaturePropertiesByFeatureIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<PropertyCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<PropertiesOrderBy>>;
};

/** A condition to be used against `Feature` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type FeatureCondition = {
  /** Checks for equality with the object’s `bbox` field. */
  bbox?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `datasetId` field. */
  datasetId?: InputMaybe<Scalars['UUID']['input']>;
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars['UUID']['input']>;
};

/** A connection to a list of `FeatureGeometry` values. */
export type FeatureGeometriesConnection = {
  __typename?: 'FeatureGeometriesConnection';
  /** A list of edges which contains the `FeatureGeometry` and cursor to aid in pagination. */
  edges: Array<FeatureGeometriesEdge>;
  /** A list of `FeatureGeometry` objects. */
  nodes: Array<Maybe<FeatureGeometry>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `FeatureGeometry` you could get from the connection. */
  totalCount: Scalars['Int']['output'];
};

/** A `FeatureGeometry` edge in the connection. */
export type FeatureGeometriesEdge = {
  __typename?: 'FeatureGeometriesEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** The `FeatureGeometry` at the end of the edge. */
  node?: Maybe<FeatureGeometry>;
};

/** Methods to use when ordering `FeatureGeometry`. */
export enum FeatureGeometriesOrderBy {
  FeatureIdAsc = 'FEATURE_ID_ASC',
  FeatureIdDesc = 'FEATURE_ID_DESC',
  GeometryAsc = 'GEOMETRY_ASC',
  GeometryDesc = 'GEOMETRY_DESC',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}

export type FeatureGeometry = Node & {
  __typename?: 'FeatureGeometry';
  /** Reads a single `Feature` that is related to this `FeatureGeometry`. */
  featureByFeatureId?: Maybe<Feature>;
  featureId: Scalars['UUID']['output'];
  geometry?: Maybe<Scalars['String']['output']>;
  id: Scalars['UUID']['output'];
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID']['output'];
};

/**
 * A condition to be used against `FeatureGeometry` object types. All fields are
 * tested for equality and combined with a logical ‘and.’
 */
export type FeatureGeometryCondition = {
  /** Checks for equality with the object’s `featureId` field. */
  featureId?: InputMaybe<Scalars['UUID']['input']>;
  /** Checks for equality with the object’s `geometry` field. */
  geometry?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars['UUID']['input']>;
};

/** An input for mutations affecting `FeatureGeometry` */
export type FeatureGeometryInput = {
  featureId: Scalars['UUID']['input'];
  geometry?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
};

/** Represents an update to a `FeatureGeometry`. Fields that are set will be updated. */
export type FeatureGeometryPatch = {
  featureId?: InputMaybe<Scalars['UUID']['input']>;
  geometry?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
};

/** An input for mutations affecting `Feature` */
export type FeatureInput = {
  bbox?: InputMaybe<Scalars['String']['input']>;
  datasetId: Scalars['UUID']['input'];
  id?: InputMaybe<Scalars['UUID']['input']>;
};

/** Represents an update to a `Feature`. Fields that are set will be updated. */
export type FeaturePatch = {
  bbox?: InputMaybe<Scalars['String']['input']>;
  datasetId?: InputMaybe<Scalars['UUID']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
};

/** A connection to a list of `Feature` values. */
export type FeaturesConnection = {
  __typename?: 'FeaturesConnection';
  /** A list of edges which contains the `Feature` and cursor to aid in pagination. */
  edges: Array<FeaturesEdge>;
  /** A list of `Feature` objects. */
  nodes: Array<Maybe<Feature>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Feature` you could get from the connection. */
  totalCount: Scalars['Int']['output'];
};

/** A `Feature` edge in the connection. */
export type FeaturesEdge = {
  __typename?: 'FeaturesEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** The `Feature` at the end of the edge. */
  node?: Maybe<Feature>;
};

/** Methods to use when ordering `Feature`. */
export enum FeaturesOrderBy {
  BboxAsc = 'BBOX_ASC',
  BboxDesc = 'BBOX_DESC',
  DatasetIdAsc = 'DATASET_ID_ASC',
  DatasetIdDesc = 'DATASET_ID_DESC',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}

export type GeojsonDataset = Node & {
  __typename?: 'GeojsonDataset';
  id: Scalars['UUID']['output'];
  name?: Maybe<Scalars['String']['output']>;
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID']['output'];
  value?: Maybe<Scalars['JSON']['output']>;
};

/**
 * A condition to be used against `GeojsonDataset` object types. All fields are
 * tested for equality and combined with a logical ‘and.’
 */
export type GeojsonDatasetCondition = {
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars['UUID']['input']>;
  /** Checks for equality with the object’s `name` field. */
  name?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `value` field. */
  value?: InputMaybe<Scalars['JSON']['input']>;
};

/** A connection to a list of `GeojsonDataset` values. */
export type GeojsonDatasetsConnection = {
  __typename?: 'GeojsonDatasetsConnection';
  /** A list of edges which contains the `GeojsonDataset` and cursor to aid in pagination. */
  edges: Array<GeojsonDatasetsEdge>;
  /** A list of `GeojsonDataset` objects. */
  nodes: Array<Maybe<GeojsonDataset>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `GeojsonDataset` you could get from the connection. */
  totalCount: Scalars['Int']['output'];
};

/** A `GeojsonDataset` edge in the connection. */
export type GeojsonDatasetsEdge = {
  __typename?: 'GeojsonDatasetsEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** The `GeojsonDataset` at the end of the edge. */
  node?: Maybe<GeojsonDataset>;
};

/** Methods to use when ordering `GeojsonDataset`. */
export enum GeojsonDatasetsOrderBy {
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  ValueAsc = 'VALUE_ASC',
  ValueDesc = 'VALUE_DESC'
}

export type GeojsonFeature = Node & {
  __typename?: 'GeojsonFeature';
  datasetid?: Maybe<Scalars['UUID']['output']>;
  feature?: Maybe<Scalars['JSON']['output']>;
  id: Scalars['UUID']['output'];
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID']['output'];
};

/**
 * A condition to be used against `GeojsonFeature` object types. All fields are
 * tested for equality and combined with a logical ‘and.’
 */
export type GeojsonFeatureCondition = {
  /** Checks for equality with the object’s `datasetid` field. */
  datasetid?: InputMaybe<Scalars['UUID']['input']>;
  /** Checks for equality with the object’s `feature` field. */
  feature?: InputMaybe<Scalars['JSON']['input']>;
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars['UUID']['input']>;
};

/** A connection to a list of `GeojsonFeature` values. */
export type GeojsonFeaturesConnection = {
  __typename?: 'GeojsonFeaturesConnection';
  /** A list of edges which contains the `GeojsonFeature` and cursor to aid in pagination. */
  edges: Array<GeojsonFeaturesEdge>;
  /** A list of `GeojsonFeature` objects. */
  nodes: Array<Maybe<GeojsonFeature>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `GeojsonFeature` you could get from the connection. */
  totalCount: Scalars['Int']['output'];
};

/** A `GeojsonFeature` edge in the connection. */
export type GeojsonFeaturesEdge = {
  __typename?: 'GeojsonFeaturesEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** The `GeojsonFeature` at the end of the edge. */
  node?: Maybe<GeojsonFeature>;
};

/** Methods to use when ordering `GeojsonFeature`. */
export enum GeojsonFeaturesOrderBy {
  DatasetidAsc = 'DATASETID_ASC',
  DatasetidDesc = 'DATASETID_DESC',
  FeatureAsc = 'FEATURE_ASC',
  FeatureDesc = 'FEATURE_DESC',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}

/** The root mutation type which contains root level fields which mutate data. */
export type Mutation = {
  __typename?: 'Mutation';
  /** Creates a single `Dataset`. */
  createDataset?: Maybe<CreateDatasetPayload>;
  /** Creates a single `Feature`. */
  createFeature?: Maybe<CreateFeaturePayload>;
  /** Creates a single `FeatureGeometry`. */
  createFeatureGeometry?: Maybe<CreateFeatureGeometryPayload>;
  /** Creates a single `Property`. */
  createProperty?: Maybe<CreatePropertyPayload>;
  /** Deletes a single `Dataset` using a unique key. */
  deleteDataset?: Maybe<DeleteDatasetPayload>;
  /** Deletes a single `Dataset` using its globally unique id. */
  deleteDatasetByNodeId?: Maybe<DeleteDatasetPayload>;
  /** Deletes a single `Feature` using a unique key. */
  deleteFeature?: Maybe<DeleteFeaturePayload>;
  /** Deletes a single `Feature` using its globally unique id. */
  deleteFeatureByNodeId?: Maybe<DeleteFeaturePayload>;
  /** Deletes a single `FeatureGeometry` using a unique key. */
  deleteFeatureGeometry?: Maybe<DeleteFeatureGeometryPayload>;
  /** Deletes a single `FeatureGeometry` using its globally unique id. */
  deleteFeatureGeometryByNodeId?: Maybe<DeleteFeatureGeometryPayload>;
  /** Deletes a single `Property` using a unique key. */
  deleteProperty?: Maybe<DeletePropertyPayload>;
  /** Deletes a single `Property` using its globally unique id. */
  deletePropertyByNodeId?: Maybe<DeletePropertyPayload>;
  /** Updates a single `Dataset` using a unique key and a patch. */
  updateDataset?: Maybe<UpdateDatasetPayload>;
  /** Updates a single `Dataset` using its globally unique id and a patch. */
  updateDatasetByNodeId?: Maybe<UpdateDatasetPayload>;
  /** Updates a single `Feature` using a unique key and a patch. */
  updateFeature?: Maybe<UpdateFeaturePayload>;
  /** Updates a single `Feature` using its globally unique id and a patch. */
  updateFeatureByNodeId?: Maybe<UpdateFeaturePayload>;
  /** Updates a single `FeatureGeometry` using a unique key and a patch. */
  updateFeatureGeometry?: Maybe<UpdateFeatureGeometryPayload>;
  /** Updates a single `FeatureGeometry` using its globally unique id and a patch. */
  updateFeatureGeometryByNodeId?: Maybe<UpdateFeatureGeometryPayload>;
  /** Updates a single `Property` using a unique key and a patch. */
  updateProperty?: Maybe<UpdatePropertyPayload>;
  /** Updates a single `Property` using its globally unique id and a patch. */
  updatePropertyByNodeId?: Maybe<UpdatePropertyPayload>;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateDatasetArgs = {
  input: CreateDatasetInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateFeatureArgs = {
  input: CreateFeatureInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateFeatureGeometryArgs = {
  input: CreateFeatureGeometryInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreatePropertyArgs = {
  input: CreatePropertyInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteDatasetArgs = {
  input: DeleteDatasetInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteDatasetByNodeIdArgs = {
  input: DeleteDatasetByNodeIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteFeatureArgs = {
  input: DeleteFeatureInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteFeatureByNodeIdArgs = {
  input: DeleteFeatureByNodeIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteFeatureGeometryArgs = {
  input: DeleteFeatureGeometryInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteFeatureGeometryByNodeIdArgs = {
  input: DeleteFeatureGeometryByNodeIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeletePropertyArgs = {
  input: DeletePropertyInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeletePropertyByNodeIdArgs = {
  input: DeletePropertyByNodeIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateDatasetArgs = {
  input: UpdateDatasetInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateDatasetByNodeIdArgs = {
  input: UpdateDatasetByNodeIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateFeatureArgs = {
  input: UpdateFeatureInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateFeatureByNodeIdArgs = {
  input: UpdateFeatureByNodeIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateFeatureGeometryArgs = {
  input: UpdateFeatureGeometryInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateFeatureGeometryByNodeIdArgs = {
  input: UpdateFeatureGeometryByNodeIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdatePropertyArgs = {
  input: UpdatePropertyInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdatePropertyByNodeIdArgs = {
  input: UpdatePropertyByNodeIdInput;
};

/** An object with a globally unique `ID`. */
export type Node = {
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID']['output'];
};

/** Information about pagination in a connection. */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['Cursor']['output']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean']['output'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean']['output'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['Cursor']['output']>;
};

/** A connection to a list of `Property` values. */
export type PropertiesConnection = {
  __typename?: 'PropertiesConnection';
  /** A list of edges which contains the `Property` and cursor to aid in pagination. */
  edges: Array<PropertiesEdge>;
  /** A list of `Property` objects. */
  nodes: Array<Maybe<Property>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Property` you could get from the connection. */
  totalCount: Scalars['Int']['output'];
};

/** A `Property` edge in the connection. */
export type PropertiesEdge = {
  __typename?: 'PropertiesEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** The `Property` at the end of the edge. */
  node?: Maybe<Property>;
};

/** Methods to use when ordering `Property`. */
export enum PropertiesOrderBy {
  AbbrevnameAsc = 'ABBREVNAME_ASC',
  AbbrevnameDesc = 'ABBREVNAME_DESC',
  AbbrevAsc = 'ABBREV_ASC',
  AbbrevDesc = 'ABBREV_DESC',
  AbbrevLenAsc = 'ABBREV_LEN_ASC',
  AbbrevLenDesc = 'ABBREV_LEN_DESC',
  Adm0A3Asc = 'ADM0_A3_ASC',
  Adm0A3Desc = 'ADM0_A3_DESC',
  Adm0A3IsAsc = 'ADM0_A3_IS_ASC',
  Adm0A3IsDesc = 'ADM0_A3_IS_DESC',
  Adm0A3UnAsc = 'ADM0_A3_UN_ASC',
  Adm0A3UnDesc = 'ADM0_A3_UN_DESC',
  Adm0A3UsAsc = 'ADM0_A3_US_ASC',
  Adm0A3UsDesc = 'ADM0_A3_US_DESC',
  Adm0A3WbAsc = 'ADM0_A3_WB_ASC',
  Adm0A3WbDesc = 'ADM0_A3_WB_DESC',
  Adm0DifAsc = 'ADM0_DIF_ASC',
  Adm0DifDesc = 'ADM0_DIF_DESC',
  AdminAsc = 'ADMIN_ASC',
  AdminDesc = 'ADMIN_DESC',
  AreaAsc = 'AREA_ASC',
  AreaDesc = 'AREA_DESC',
  BorderingAsc = 'BORDERING_ASC',
  BorderingDesc = 'BORDERING_DESC',
  BorderColorIndexAsc = 'BORDER_COLOR_INDEX_ASC',
  BorderColorIndexDesc = 'BORDER_COLOR_INDEX_DESC',
  BrkA3Asc = 'BRK_A3_ASC',
  BrkA3Desc = 'BRK_A3_DESC',
  BrkDiffAsc = 'BRK_DIFF_ASC',
  BrkDiffDesc = 'BRK_DIFF_DESC',
  BrkNameAsc = 'BRK_NAME_ASC',
  BrkNameDesc = 'BRK_NAME_DESC',
  ContinentAsc = 'CONTINENT_ASC',
  ContinentDesc = 'CONTINENT_DESC',
  ControllinAsc = 'CONTROLLIN_ASC',
  ControllinDesc = 'CONTROLLIN_DESC',
  EconomyAsc = 'ECONOMY_ASC',
  EconomyDesc = 'ECONOMY_DESC',
  FeatureclaAsc = 'FEATURECLA_ASC',
  FeatureclaDesc = 'FEATURECLA_DESC',
  FeatureIdAsc = 'FEATURE_ID_ASC',
  FeatureIdDesc = 'FEATURE_ID_DESC',
  Fips_10Asc = 'FIPS_10_ASC',
  Fips_10Desc = 'FIPS_10_DESC',
  FipsCodeAsc = 'FIPS_CODE_ASC',
  FipsCodeDesc = 'FIPS_CODE_DESC',
  FormalEnAsc = 'FORMAL_EN_ASC',
  FormalEnDesc = 'FORMAL_EN_DESC',
  FormalFrAsc = 'FORMAL_FR_ASC',
  FormalFrDesc = 'FORMAL_FR_DESC',
  GdpMdEstAsc = 'GDP_MD_EST_ASC',
  GdpMdEstDesc = 'GDP_MD_EST_DESC',
  GdpYearAsc = 'GDP_YEAR_ASC',
  GdpYearDesc = 'GDP_YEAR_DESC',
  GeounitAsc = 'GEOUNIT_ASC',
  GeounitDesc = 'GEOUNIT_DESC',
  GeouDifAsc = 'GEOU_DIF_ASC',
  GeouDifDesc = 'GEOU_DIF_DESC',
  GuA3Asc = 'GU_A3_ASC',
  GuA3Desc = 'GU_A3_DESC',
  HomepartAsc = 'HOMEPART_ASC',
  HomepartDesc = 'HOMEPART_DESC',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  IncomeGrpAsc = 'INCOME_GRP_ASC',
  IncomeGrpDesc = 'INCOME_GRP_DESC',
  IsoA2Asc = 'ISO_A2_ASC',
  IsoA2Desc = 'ISO_A2_DESC',
  IsoA3Asc = 'ISO_A3_ASC',
  IsoA3Desc = 'ISO_A3_DESC',
  IsoA3EhAsc = 'ISO_A3_EH_ASC',
  IsoA3EhDesc = 'ISO_A3_EH_DESC',
  IsoN3Asc = 'ISO_N3_ASC',
  IsoN3Desc = 'ISO_N3_DESC',
  LabelrankAsc = 'LABELRANK_ASC',
  LabelrankDesc = 'LABELRANK_DESC',
  LastcensusAsc = 'LASTCENSUS_ASC',
  LastcensusDesc = 'LASTCENSUS_DESC',
  LevelAsc = 'LEVEL_ASC',
  LevelDesc = 'LEVEL_DESC',
  LongLenAsc = 'LONG_LEN_ASC',
  LongLenDesc = 'LONG_LEN_DESC',
  Mapcolor7Asc = 'MAPCOLOR7_ASC',
  Mapcolor7Desc = 'MAPCOLOR7_DESC',
  Mapcolor8Asc = 'MAPCOLOR8_ASC',
  Mapcolor8Desc = 'MAPCOLOR8_DESC',
  Mapcolor9Asc = 'MAPCOLOR9_ASC',
  Mapcolor9Desc = 'MAPCOLOR9_DESC',
  Mapcolor13Asc = 'MAPCOLOR13_ASC',
  Mapcolor13Desc = 'MAPCOLOR13_DESC',
  MaxLabelAsc = 'MAX_LABEL_ASC',
  MaxLabelDesc = 'MAX_LABEL_DESC',
  MinLabelAsc = 'MIN_LABEL_ASC',
  MinLabelDesc = 'MIN_LABEL_DESC',
  MinZoomAsc = 'MIN_ZOOM_ASC',
  MinZoomDesc = 'MIN_ZOOM_DESC',
  NameAltAsc = 'NAME_ALT_ASC',
  NameAltDesc = 'NAME_ALT_DESC',
  NameAsc = 'NAME_ASC',
  NameCiawfAsc = 'NAME_CIAWF_ASC',
  NameCiawfDesc = 'NAME_CIAWF_DESC',
  NameDesc = 'NAME_DESC',
  NameLenAsc = 'NAME_LEN_ASC',
  NameLenDesc = 'NAME_LEN_DESC',
  NameLongAsc = 'NAME_LONG_ASC',
  NameLongDesc = 'NAME_LONG_DESC',
  NameSortAsc = 'NAME_SORT_ASC',
  NameSortDesc = 'NAME_SORT_DESC',
  Natural = 'NATURAL',
  NoteAdm0Asc = 'NOTE_ADM0_ASC',
  NoteAdm0Desc = 'NOTE_ADM0_DESC',
  NoteBrkAsc = 'NOTE_BRK_ASC',
  NoteBrkDesc = 'NOTE_BRK_DESC',
  PopEstAsc = 'POP_EST_ASC',
  PopEstDesc = 'POP_EST_DESC',
  PopRankAsc = 'POP_RANK_ASC',
  PopRankDesc = 'POP_RANK_DESC',
  PopYearAsc = 'POP_YEAR_ASC',
  PopYearDesc = 'POP_YEAR_DESC',
  PostalAsc = 'POSTAL_ASC',
  PostalDesc = 'POSTAL_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  RegionUnAsc = 'REGION_UN_ASC',
  RegionUnDesc = 'REGION_UN_DESC',
  RegionWbAsc = 'REGION_WB_ASC',
  RegionWbDesc = 'REGION_WB_DESC',
  ScalerankAsc = 'SCALERANK_ASC',
  ScalerankDesc = 'SCALERANK_DESC',
  SovereigntAsc = 'SOVEREIGNT_ASC',
  SovereigntDesc = 'SOVEREIGNT_DESC',
  SovA3Asc = 'SOV_A3_ASC',
  SovA3Desc = 'SOV_A3_DESC',
  SubregionAsc = 'SUBREGION_ASC',
  SubregionDesc = 'SUBREGION_DESC',
  SubunitAsc = 'SUBUNIT_ASC',
  SubunitDesc = 'SUBUNIT_DESC',
  SuA3Asc = 'SU_A3_ASC',
  SuA3Desc = 'SU_A3_DESC',
  SuDifAsc = 'SU_DIF_ASC',
  SuDifDesc = 'SU_DIF_DESC',
  TinyAsc = 'TINY_ASC',
  TinyDesc = 'TINY_DESC',
  TypeAsc = 'TYPE_ASC',
  TypeDesc = 'TYPE_DESC',
  UnA3Asc = 'UN_A3_ASC',
  UnA3Desc = 'UN_A3_DESC',
  WbA2Asc = 'WB_A2_ASC',
  WbA2Desc = 'WB_A2_DESC',
  WbA3Asc = 'WB_A3_ASC',
  WbA3Desc = 'WB_A3_DESC',
  WbCntryAsc = 'WB_CNTRY_ASC',
  WbCntryDesc = 'WB_CNTRY_DESC',
  WeblinksAsc = 'WEBLINKS_ASC',
  WeblinksDesc = 'WEBLINKS_DESC',
  WikipediaAsc = 'WIKIPEDIA_ASC',
  WikipediaDesc = 'WIKIPEDIA_DESC',
  WoeIdAsc = 'WOE_ID_ASC',
  WoeIdDesc = 'WOE_ID_DESC',
  WoeIdEhAsc = 'WOE_ID_EH_ASC',
  WoeIdEhDesc = 'WOE_ID_EH_DESC',
  WoeNoteAsc = 'WOE_NOTE_ASC',
  WoeNoteDesc = 'WOE_NOTE_DESC'
}

export type Property = Node & {
  __typename?: 'Property';
  abbrev?: Maybe<Scalars['String']['output']>;
  abbrevLen?: Maybe<Scalars['Int']['output']>;
  abbrevname?: Maybe<Scalars['String']['output']>;
  adm0A3?: Maybe<Scalars['String']['output']>;
  adm0A3Is?: Maybe<Scalars['String']['output']>;
  adm0A3Un?: Maybe<Scalars['Int']['output']>;
  adm0A3Us?: Maybe<Scalars['String']['output']>;
  adm0A3Wb?: Maybe<Scalars['Int']['output']>;
  adm0Dif?: Maybe<Scalars['Int']['output']>;
  admin?: Maybe<Scalars['String']['output']>;
  area?: Maybe<Scalars['Float']['output']>;
  borderColorIndex?: Maybe<Scalars['String']['output']>;
  bordering?: Maybe<Scalars['String']['output']>;
  brkA3?: Maybe<Scalars['String']['output']>;
  brkDiff?: Maybe<Scalars['Int']['output']>;
  brkName?: Maybe<Scalars['String']['output']>;
  continent?: Maybe<Scalars['String']['output']>;
  controllin?: Maybe<Scalars['String']['output']>;
  economy?: Maybe<Scalars['String']['output']>;
  /** Reads a single `Feature` that is related to this `Property`. */
  featureByFeatureId?: Maybe<Feature>;
  featureId: Scalars['UUID']['output'];
  featurecla?: Maybe<Scalars['String']['output']>;
  fips10_?: Maybe<Scalars['String']['output']>;
  fipsCode?: Maybe<Scalars['String']['output']>;
  formalEn?: Maybe<Scalars['String']['output']>;
  formalFr?: Maybe<Scalars['String']['output']>;
  gdpMdEst?: Maybe<Scalars['Float']['output']>;
  gdpYear?: Maybe<Scalars['Int']['output']>;
  geouDif?: Maybe<Scalars['Int']['output']>;
  geounit?: Maybe<Scalars['String']['output']>;
  guA3?: Maybe<Scalars['String']['output']>;
  homepart?: Maybe<Scalars['Int']['output']>;
  id: Scalars['UUID']['output'];
  incomeGrp?: Maybe<Scalars['String']['output']>;
  isoA2?: Maybe<Scalars['String']['output']>;
  isoA3?: Maybe<Scalars['String']['output']>;
  isoA3Eh?: Maybe<Scalars['String']['output']>;
  isoN3?: Maybe<Scalars['String']['output']>;
  labelrank?: Maybe<Scalars['Int']['output']>;
  lastcensus?: Maybe<Scalars['Int']['output']>;
  level?: Maybe<Scalars['Int']['output']>;
  longLen?: Maybe<Scalars['Int']['output']>;
  mapcolor7?: Maybe<Scalars['Int']['output']>;
  mapcolor8?: Maybe<Scalars['Int']['output']>;
  mapcolor9?: Maybe<Scalars['Int']['output']>;
  mapcolor13?: Maybe<Scalars['Int']['output']>;
  maxLabel?: Maybe<Scalars['Float']['output']>;
  minLabel?: Maybe<Scalars['Float']['output']>;
  minZoom?: Maybe<Scalars['Float']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  nameAlt?: Maybe<Scalars['String']['output']>;
  nameCiawf?: Maybe<Scalars['String']['output']>;
  nameLen?: Maybe<Scalars['Int']['output']>;
  nameLong?: Maybe<Scalars['String']['output']>;
  nameSort?: Maybe<Scalars['String']['output']>;
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID']['output'];
  noteAdm0?: Maybe<Scalars['String']['output']>;
  noteBrk?: Maybe<Scalars['String']['output']>;
  popEst?: Maybe<Scalars['Int']['output']>;
  popRank?: Maybe<Scalars['Int']['output']>;
  popYear?: Maybe<Scalars['Int']['output']>;
  postal?: Maybe<Scalars['String']['output']>;
  regionUn?: Maybe<Scalars['String']['output']>;
  regionWb?: Maybe<Scalars['String']['output']>;
  scalerank?: Maybe<Scalars['Int']['output']>;
  sovA3?: Maybe<Scalars['String']['output']>;
  sovereignt?: Maybe<Scalars['String']['output']>;
  suA3?: Maybe<Scalars['String']['output']>;
  suDif?: Maybe<Scalars['Int']['output']>;
  subregion?: Maybe<Scalars['String']['output']>;
  subunit?: Maybe<Scalars['String']['output']>;
  tiny?: Maybe<Scalars['Int']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  unA3?: Maybe<Scalars['String']['output']>;
  wbA2?: Maybe<Scalars['String']['output']>;
  wbA3?: Maybe<Scalars['String']['output']>;
  wbCntry?: Maybe<Scalars['String']['output']>;
  weblinks?: Maybe<Scalars['String']['output']>;
  wikipedia?: Maybe<Scalars['Int']['output']>;
  woeId?: Maybe<Scalars['Int']['output']>;
  woeIdEh?: Maybe<Scalars['Int']['output']>;
  woeNote?: Maybe<Scalars['String']['output']>;
};

/**
 * A condition to be used against `Property` object types. All fields are tested
 * for equality and combined with a logical ‘and.’
 */
export type PropertyCondition = {
  /** Checks for equality with the object’s `abbrev` field. */
  abbrev?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `abbrevLen` field. */
  abbrevLen?: InputMaybe<Scalars['Int']['input']>;
  /** Checks for equality with the object’s `abbrevname` field. */
  abbrevname?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `adm0A3` field. */
  adm0A3?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `adm0A3Is` field. */
  adm0A3Is?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `adm0A3Un` field. */
  adm0A3Un?: InputMaybe<Scalars['Int']['input']>;
  /** Checks for equality with the object’s `adm0A3Us` field. */
  adm0A3Us?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `adm0A3Wb` field. */
  adm0A3Wb?: InputMaybe<Scalars['Int']['input']>;
  /** Checks for equality with the object’s `adm0Dif` field. */
  adm0Dif?: InputMaybe<Scalars['Int']['input']>;
  /** Checks for equality with the object’s `admin` field. */
  admin?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `area` field. */
  area?: InputMaybe<Scalars['Float']['input']>;
  /** Checks for equality with the object’s `borderColorIndex` field. */
  borderColorIndex?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `bordering` field. */
  bordering?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `brkA3` field. */
  brkA3?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `brkDiff` field. */
  brkDiff?: InputMaybe<Scalars['Int']['input']>;
  /** Checks for equality with the object’s `brkName` field. */
  brkName?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `continent` field. */
  continent?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `controllin` field. */
  controllin?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `economy` field. */
  economy?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `featureId` field. */
  featureId?: InputMaybe<Scalars['UUID']['input']>;
  /** Checks for equality with the object’s `featurecla` field. */
  featurecla?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `fips10_` field. */
  fips10_?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `fipsCode` field. */
  fipsCode?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `formalEn` field. */
  formalEn?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `formalFr` field. */
  formalFr?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `gdpMdEst` field. */
  gdpMdEst?: InputMaybe<Scalars['Float']['input']>;
  /** Checks for equality with the object’s `gdpYear` field. */
  gdpYear?: InputMaybe<Scalars['Int']['input']>;
  /** Checks for equality with the object’s `geouDif` field. */
  geouDif?: InputMaybe<Scalars['Int']['input']>;
  /** Checks for equality with the object’s `geounit` field. */
  geounit?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `guA3` field. */
  guA3?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `homepart` field. */
  homepart?: InputMaybe<Scalars['Int']['input']>;
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars['UUID']['input']>;
  /** Checks for equality with the object’s `incomeGrp` field. */
  incomeGrp?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `isoA2` field. */
  isoA2?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `isoA3` field. */
  isoA3?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `isoA3Eh` field. */
  isoA3Eh?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `isoN3` field. */
  isoN3?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `labelrank` field. */
  labelrank?: InputMaybe<Scalars['Int']['input']>;
  /** Checks for equality with the object’s `lastcensus` field. */
  lastcensus?: InputMaybe<Scalars['Int']['input']>;
  /** Checks for equality with the object’s `level` field. */
  level?: InputMaybe<Scalars['Int']['input']>;
  /** Checks for equality with the object’s `longLen` field. */
  longLen?: InputMaybe<Scalars['Int']['input']>;
  /** Checks for equality with the object’s `mapcolor7` field. */
  mapcolor7?: InputMaybe<Scalars['Int']['input']>;
  /** Checks for equality with the object’s `mapcolor8` field. */
  mapcolor8?: InputMaybe<Scalars['Int']['input']>;
  /** Checks for equality with the object’s `mapcolor9` field. */
  mapcolor9?: InputMaybe<Scalars['Int']['input']>;
  /** Checks for equality with the object’s `mapcolor13` field. */
  mapcolor13?: InputMaybe<Scalars['Int']['input']>;
  /** Checks for equality with the object’s `maxLabel` field. */
  maxLabel?: InputMaybe<Scalars['Float']['input']>;
  /** Checks for equality with the object’s `minLabel` field. */
  minLabel?: InputMaybe<Scalars['Float']['input']>;
  /** Checks for equality with the object’s `minZoom` field. */
  minZoom?: InputMaybe<Scalars['Float']['input']>;
  /** Checks for equality with the object’s `name` field. */
  name?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `nameAlt` field. */
  nameAlt?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `nameCiawf` field. */
  nameCiawf?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `nameLen` field. */
  nameLen?: InputMaybe<Scalars['Int']['input']>;
  /** Checks for equality with the object’s `nameLong` field. */
  nameLong?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `nameSort` field. */
  nameSort?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `noteAdm0` field. */
  noteAdm0?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `noteBrk` field. */
  noteBrk?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `popEst` field. */
  popEst?: InputMaybe<Scalars['Int']['input']>;
  /** Checks for equality with the object’s `popRank` field. */
  popRank?: InputMaybe<Scalars['Int']['input']>;
  /** Checks for equality with the object’s `popYear` field. */
  popYear?: InputMaybe<Scalars['Int']['input']>;
  /** Checks for equality with the object’s `postal` field. */
  postal?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `regionUn` field. */
  regionUn?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `regionWb` field. */
  regionWb?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `scalerank` field. */
  scalerank?: InputMaybe<Scalars['Int']['input']>;
  /** Checks for equality with the object’s `sovA3` field. */
  sovA3?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `sovereignt` field. */
  sovereignt?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `suA3` field. */
  suA3?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `suDif` field. */
  suDif?: InputMaybe<Scalars['Int']['input']>;
  /** Checks for equality with the object’s `subregion` field. */
  subregion?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `subunit` field. */
  subunit?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `tiny` field. */
  tiny?: InputMaybe<Scalars['Int']['input']>;
  /** Checks for equality with the object’s `type` field. */
  type?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `unA3` field. */
  unA3?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `wbA2` field. */
  wbA2?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `wbA3` field. */
  wbA3?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `wbCntry` field. */
  wbCntry?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `weblinks` field. */
  weblinks?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `wikipedia` field. */
  wikipedia?: InputMaybe<Scalars['Int']['input']>;
  /** Checks for equality with the object’s `woeId` field. */
  woeId?: InputMaybe<Scalars['Int']['input']>;
  /** Checks for equality with the object’s `woeIdEh` field. */
  woeIdEh?: InputMaybe<Scalars['Int']['input']>;
  /** Checks for equality with the object’s `woeNote` field. */
  woeNote?: InputMaybe<Scalars['String']['input']>;
};

/** An input for mutations affecting `Property` */
export type PropertyInput = {
  abbrev?: InputMaybe<Scalars['String']['input']>;
  abbrevLen?: InputMaybe<Scalars['Int']['input']>;
  abbrevname?: InputMaybe<Scalars['String']['input']>;
  adm0A3?: InputMaybe<Scalars['String']['input']>;
  adm0A3Is?: InputMaybe<Scalars['String']['input']>;
  adm0A3Un?: InputMaybe<Scalars['Int']['input']>;
  adm0A3Us?: InputMaybe<Scalars['String']['input']>;
  adm0A3Wb?: InputMaybe<Scalars['Int']['input']>;
  adm0Dif?: InputMaybe<Scalars['Int']['input']>;
  admin?: InputMaybe<Scalars['String']['input']>;
  area?: InputMaybe<Scalars['Float']['input']>;
  borderColorIndex?: InputMaybe<Scalars['String']['input']>;
  bordering?: InputMaybe<Scalars['String']['input']>;
  brkA3?: InputMaybe<Scalars['String']['input']>;
  brkDiff?: InputMaybe<Scalars['Int']['input']>;
  brkName?: InputMaybe<Scalars['String']['input']>;
  continent?: InputMaybe<Scalars['String']['input']>;
  controllin?: InputMaybe<Scalars['String']['input']>;
  economy?: InputMaybe<Scalars['String']['input']>;
  featureId: Scalars['UUID']['input'];
  featurecla?: InputMaybe<Scalars['String']['input']>;
  fips10_?: InputMaybe<Scalars['String']['input']>;
  fipsCode?: InputMaybe<Scalars['String']['input']>;
  formalEn?: InputMaybe<Scalars['String']['input']>;
  formalFr?: InputMaybe<Scalars['String']['input']>;
  gdpMdEst?: InputMaybe<Scalars['Float']['input']>;
  gdpYear?: InputMaybe<Scalars['Int']['input']>;
  geouDif?: InputMaybe<Scalars['Int']['input']>;
  geounit?: InputMaybe<Scalars['String']['input']>;
  guA3?: InputMaybe<Scalars['String']['input']>;
  homepart?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  incomeGrp?: InputMaybe<Scalars['String']['input']>;
  isoA2?: InputMaybe<Scalars['String']['input']>;
  isoA3?: InputMaybe<Scalars['String']['input']>;
  isoA3Eh?: InputMaybe<Scalars['String']['input']>;
  isoN3?: InputMaybe<Scalars['String']['input']>;
  labelrank?: InputMaybe<Scalars['Int']['input']>;
  lastcensus?: InputMaybe<Scalars['Int']['input']>;
  level?: InputMaybe<Scalars['Int']['input']>;
  longLen?: InputMaybe<Scalars['Int']['input']>;
  mapcolor7?: InputMaybe<Scalars['Int']['input']>;
  mapcolor8?: InputMaybe<Scalars['Int']['input']>;
  mapcolor9?: InputMaybe<Scalars['Int']['input']>;
  mapcolor13?: InputMaybe<Scalars['Int']['input']>;
  maxLabel?: InputMaybe<Scalars['Float']['input']>;
  minLabel?: InputMaybe<Scalars['Float']['input']>;
  minZoom?: InputMaybe<Scalars['Float']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  nameAlt?: InputMaybe<Scalars['String']['input']>;
  nameCiawf?: InputMaybe<Scalars['String']['input']>;
  nameLen?: InputMaybe<Scalars['Int']['input']>;
  nameLong?: InputMaybe<Scalars['String']['input']>;
  nameSort?: InputMaybe<Scalars['String']['input']>;
  noteAdm0?: InputMaybe<Scalars['String']['input']>;
  noteBrk?: InputMaybe<Scalars['String']['input']>;
  popEst?: InputMaybe<Scalars['Int']['input']>;
  popRank?: InputMaybe<Scalars['Int']['input']>;
  popYear?: InputMaybe<Scalars['Int']['input']>;
  postal?: InputMaybe<Scalars['String']['input']>;
  regionUn?: InputMaybe<Scalars['String']['input']>;
  regionWb?: InputMaybe<Scalars['String']['input']>;
  scalerank?: InputMaybe<Scalars['Int']['input']>;
  sovA3?: InputMaybe<Scalars['String']['input']>;
  sovereignt?: InputMaybe<Scalars['String']['input']>;
  suA3?: InputMaybe<Scalars['String']['input']>;
  suDif?: InputMaybe<Scalars['Int']['input']>;
  subregion?: InputMaybe<Scalars['String']['input']>;
  subunit?: InputMaybe<Scalars['String']['input']>;
  tiny?: InputMaybe<Scalars['Int']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
  unA3?: InputMaybe<Scalars['String']['input']>;
  wbA2?: InputMaybe<Scalars['String']['input']>;
  wbA3?: InputMaybe<Scalars['String']['input']>;
  wbCntry?: InputMaybe<Scalars['String']['input']>;
  weblinks?: InputMaybe<Scalars['String']['input']>;
  wikipedia?: InputMaybe<Scalars['Int']['input']>;
  woeId?: InputMaybe<Scalars['Int']['input']>;
  woeIdEh?: InputMaybe<Scalars['Int']['input']>;
  woeNote?: InputMaybe<Scalars['String']['input']>;
};

/** Represents an update to a `Property`. Fields that are set will be updated. */
export type PropertyPatch = {
  abbrev?: InputMaybe<Scalars['String']['input']>;
  abbrevLen?: InputMaybe<Scalars['Int']['input']>;
  abbrevname?: InputMaybe<Scalars['String']['input']>;
  adm0A3?: InputMaybe<Scalars['String']['input']>;
  adm0A3Is?: InputMaybe<Scalars['String']['input']>;
  adm0A3Un?: InputMaybe<Scalars['Int']['input']>;
  adm0A3Us?: InputMaybe<Scalars['String']['input']>;
  adm0A3Wb?: InputMaybe<Scalars['Int']['input']>;
  adm0Dif?: InputMaybe<Scalars['Int']['input']>;
  admin?: InputMaybe<Scalars['String']['input']>;
  area?: InputMaybe<Scalars['Float']['input']>;
  borderColorIndex?: InputMaybe<Scalars['String']['input']>;
  bordering?: InputMaybe<Scalars['String']['input']>;
  brkA3?: InputMaybe<Scalars['String']['input']>;
  brkDiff?: InputMaybe<Scalars['Int']['input']>;
  brkName?: InputMaybe<Scalars['String']['input']>;
  continent?: InputMaybe<Scalars['String']['input']>;
  controllin?: InputMaybe<Scalars['String']['input']>;
  economy?: InputMaybe<Scalars['String']['input']>;
  featureId?: InputMaybe<Scalars['UUID']['input']>;
  featurecla?: InputMaybe<Scalars['String']['input']>;
  fips10_?: InputMaybe<Scalars['String']['input']>;
  fipsCode?: InputMaybe<Scalars['String']['input']>;
  formalEn?: InputMaybe<Scalars['String']['input']>;
  formalFr?: InputMaybe<Scalars['String']['input']>;
  gdpMdEst?: InputMaybe<Scalars['Float']['input']>;
  gdpYear?: InputMaybe<Scalars['Int']['input']>;
  geouDif?: InputMaybe<Scalars['Int']['input']>;
  geounit?: InputMaybe<Scalars['String']['input']>;
  guA3?: InputMaybe<Scalars['String']['input']>;
  homepart?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  incomeGrp?: InputMaybe<Scalars['String']['input']>;
  isoA2?: InputMaybe<Scalars['String']['input']>;
  isoA3?: InputMaybe<Scalars['String']['input']>;
  isoA3Eh?: InputMaybe<Scalars['String']['input']>;
  isoN3?: InputMaybe<Scalars['String']['input']>;
  labelrank?: InputMaybe<Scalars['Int']['input']>;
  lastcensus?: InputMaybe<Scalars['Int']['input']>;
  level?: InputMaybe<Scalars['Int']['input']>;
  longLen?: InputMaybe<Scalars['Int']['input']>;
  mapcolor7?: InputMaybe<Scalars['Int']['input']>;
  mapcolor8?: InputMaybe<Scalars['Int']['input']>;
  mapcolor9?: InputMaybe<Scalars['Int']['input']>;
  mapcolor13?: InputMaybe<Scalars['Int']['input']>;
  maxLabel?: InputMaybe<Scalars['Float']['input']>;
  minLabel?: InputMaybe<Scalars['Float']['input']>;
  minZoom?: InputMaybe<Scalars['Float']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  nameAlt?: InputMaybe<Scalars['String']['input']>;
  nameCiawf?: InputMaybe<Scalars['String']['input']>;
  nameLen?: InputMaybe<Scalars['Int']['input']>;
  nameLong?: InputMaybe<Scalars['String']['input']>;
  nameSort?: InputMaybe<Scalars['String']['input']>;
  noteAdm0?: InputMaybe<Scalars['String']['input']>;
  noteBrk?: InputMaybe<Scalars['String']['input']>;
  popEst?: InputMaybe<Scalars['Int']['input']>;
  popRank?: InputMaybe<Scalars['Int']['input']>;
  popYear?: InputMaybe<Scalars['Int']['input']>;
  postal?: InputMaybe<Scalars['String']['input']>;
  regionUn?: InputMaybe<Scalars['String']['input']>;
  regionWb?: InputMaybe<Scalars['String']['input']>;
  scalerank?: InputMaybe<Scalars['Int']['input']>;
  sovA3?: InputMaybe<Scalars['String']['input']>;
  sovereignt?: InputMaybe<Scalars['String']['input']>;
  suA3?: InputMaybe<Scalars['String']['input']>;
  suDif?: InputMaybe<Scalars['Int']['input']>;
  subregion?: InputMaybe<Scalars['String']['input']>;
  subunit?: InputMaybe<Scalars['String']['input']>;
  tiny?: InputMaybe<Scalars['Int']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
  unA3?: InputMaybe<Scalars['String']['input']>;
  wbA2?: InputMaybe<Scalars['String']['input']>;
  wbA3?: InputMaybe<Scalars['String']['input']>;
  wbCntry?: InputMaybe<Scalars['String']['input']>;
  weblinks?: InputMaybe<Scalars['String']['input']>;
  wikipedia?: InputMaybe<Scalars['Int']['input']>;
  woeId?: InputMaybe<Scalars['Int']['input']>;
  woeIdEh?: InputMaybe<Scalars['Int']['input']>;
  woeNote?: InputMaybe<Scalars['String']['input']>;
};

/** The root query type which gives access points into the data universe. */
export type Query = Node & {
  __typename?: 'Query';
  dataset?: Maybe<Dataset>;
  /** Reads a single `Dataset` using its globally unique `ID`. */
  datasetByNodeId?: Maybe<Dataset>;
  /** Reads and enables pagination through a set of `Dataset`. */
  datasets?: Maybe<DatasetsConnection>;
  feature?: Maybe<Feature>;
  /** Reads a single `Feature` using its globally unique `ID`. */
  featureByNodeId?: Maybe<Feature>;
  /** Reads and enables pagination through a set of `FeatureGeometry`. */
  featureGeometries?: Maybe<FeatureGeometriesConnection>;
  featureGeometry?: Maybe<FeatureGeometry>;
  /** Reads a single `FeatureGeometry` using its globally unique `ID`. */
  featureGeometryByNodeId?: Maybe<FeatureGeometry>;
  /** Reads and enables pagination through a set of `Feature`. */
  features?: Maybe<FeaturesConnection>;
  geojsonDataset?: Maybe<GeojsonDataset>;
  /** Reads a single `GeojsonDataset` using its globally unique `ID`. */
  geojsonDatasetByNodeId?: Maybe<GeojsonDataset>;
  /** Reads and enables pagination through a set of `GeojsonDataset`. */
  geojsonDatasets?: Maybe<GeojsonDatasetsConnection>;
  geojsonFeature?: Maybe<GeojsonFeature>;
  /** Reads a single `GeojsonFeature` using its globally unique `ID`. */
  geojsonFeatureByNodeId?: Maybe<GeojsonFeature>;
  /** Reads and enables pagination through a set of `GeojsonFeature`. */
  geojsonFeatures?: Maybe<GeojsonFeaturesConnection>;
  /** Fetches an object given its globally unique `ID`. */
  node?: Maybe<Node>;
  /** The root query type must be a `Node` to work well with Relay 1 mutations. This just resolves to `query`. */
  nodeId: Scalars['ID']['output'];
  /** Reads and enables pagination through a set of `Property`. */
  properties?: Maybe<PropertiesConnection>;
  property?: Maybe<Property>;
  /** Reads a single `Property` using its globally unique `ID`. */
  propertyByNodeId?: Maybe<Property>;
  /**
   * Exposes the root query type nested one level down. This is helpful for Relay 1
   * which can only query top level fields if they are in a particular form.
   */
  query: Query;
};


/** The root query type which gives access points into the data universe. */
export type QueryDatasetArgs = {
  id: Scalars['UUID']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryDatasetByNodeIdArgs = {
  nodeId: Scalars['ID']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryDatasetsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<DatasetCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<DatasetsOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryFeatureArgs = {
  id: Scalars['UUID']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryFeatureByNodeIdArgs = {
  nodeId: Scalars['ID']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryFeatureGeometriesArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<FeatureGeometryCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<FeatureGeometriesOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryFeatureGeometryArgs = {
  id: Scalars['UUID']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryFeatureGeometryByNodeIdArgs = {
  nodeId: Scalars['ID']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryFeaturesArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<FeatureCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<FeaturesOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryGeojsonDatasetArgs = {
  id: Scalars['UUID']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryGeojsonDatasetByNodeIdArgs = {
  nodeId: Scalars['ID']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryGeojsonDatasetsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<GeojsonDatasetCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<GeojsonDatasetsOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryGeojsonFeatureArgs = {
  id: Scalars['UUID']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryGeojsonFeatureByNodeIdArgs = {
  nodeId: Scalars['ID']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryGeojsonFeaturesArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<GeojsonFeatureCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<GeojsonFeaturesOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryNodeArgs = {
  nodeId: Scalars['ID']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryPropertiesArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<PropertyCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<PropertiesOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryPropertyArgs = {
  id: Scalars['UUID']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryPropertyByNodeIdArgs = {
  nodeId: Scalars['ID']['input'];
};

/** All input for the `updateDatasetByNodeId` mutation. */
export type UpdateDatasetByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The globally unique `ID` which will identify a single `Dataset` to be updated. */
  nodeId: Scalars['ID']['input'];
  /** An object where the defined keys will be set on the `Dataset` being updated. */
  patch: DatasetPatch;
};

/** All input for the `updateDataset` mutation. */
export type UpdateDatasetInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['UUID']['input'];
  /** An object where the defined keys will be set on the `Dataset` being updated. */
  patch: DatasetPatch;
};

/** The output of our update `Dataset` mutation. */
export type UpdateDatasetPayload = {
  __typename?: 'UpdateDatasetPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** The `Dataset` that was updated by this mutation. */
  dataset?: Maybe<Dataset>;
  /** An edge for our `Dataset`. May be used by Relay 1. */
  datasetEdge?: Maybe<DatasetsEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our update `Dataset` mutation. */
export type UpdateDatasetPayloadDatasetEdgeArgs = {
  orderBy?: InputMaybe<Array<DatasetsOrderBy>>;
};

/** All input for the `updateFeatureByNodeId` mutation. */
export type UpdateFeatureByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The globally unique `ID` which will identify a single `Feature` to be updated. */
  nodeId: Scalars['ID']['input'];
  /** An object where the defined keys will be set on the `Feature` being updated. */
  patch: FeaturePatch;
};

/** All input for the `updateFeatureGeometryByNodeId` mutation. */
export type UpdateFeatureGeometryByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The globally unique `ID` which will identify a single `FeatureGeometry` to be updated. */
  nodeId: Scalars['ID']['input'];
  /** An object where the defined keys will be set on the `FeatureGeometry` being updated. */
  patch: FeatureGeometryPatch;
};

/** All input for the `updateFeatureGeometry` mutation. */
export type UpdateFeatureGeometryInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['UUID']['input'];
  /** An object where the defined keys will be set on the `FeatureGeometry` being updated. */
  patch: FeatureGeometryPatch;
};

/** The output of our update `FeatureGeometry` mutation. */
export type UpdateFeatureGeometryPayload = {
  __typename?: 'UpdateFeatureGeometryPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** Reads a single `Feature` that is related to this `FeatureGeometry`. */
  featureByFeatureId?: Maybe<Feature>;
  /** The `FeatureGeometry` that was updated by this mutation. */
  featureGeometry?: Maybe<FeatureGeometry>;
  /** An edge for our `FeatureGeometry`. May be used by Relay 1. */
  featureGeometryEdge?: Maybe<FeatureGeometriesEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our update `FeatureGeometry` mutation. */
export type UpdateFeatureGeometryPayloadFeatureGeometryEdgeArgs = {
  orderBy?: InputMaybe<Array<FeatureGeometriesOrderBy>>;
};

/** All input for the `updateFeature` mutation. */
export type UpdateFeatureInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['UUID']['input'];
  /** An object where the defined keys will be set on the `Feature` being updated. */
  patch: FeaturePatch;
};

/** The output of our update `Feature` mutation. */
export type UpdateFeaturePayload = {
  __typename?: 'UpdateFeaturePayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** Reads a single `Dataset` that is related to this `Feature`. */
  datasetByDatasetId?: Maybe<Dataset>;
  /** The `Feature` that was updated by this mutation. */
  feature?: Maybe<Feature>;
  /** An edge for our `Feature`. May be used by Relay 1. */
  featureEdge?: Maybe<FeaturesEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our update `Feature` mutation. */
export type UpdateFeaturePayloadFeatureEdgeArgs = {
  orderBy?: InputMaybe<Array<FeaturesOrderBy>>;
};

/** All input for the `updatePropertyByNodeId` mutation. */
export type UpdatePropertyByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The globally unique `ID` which will identify a single `Property` to be updated. */
  nodeId: Scalars['ID']['input'];
  /** An object where the defined keys will be set on the `Property` being updated. */
  patch: PropertyPatch;
};

/** All input for the `updateProperty` mutation. */
export type UpdatePropertyInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['UUID']['input'];
  /** An object where the defined keys will be set on the `Property` being updated. */
  patch: PropertyPatch;
};

/** The output of our update `Property` mutation. */
export type UpdatePropertyPayload = {
  __typename?: 'UpdatePropertyPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** Reads a single `Feature` that is related to this `Property`. */
  featureByFeatureId?: Maybe<Feature>;
  /** The `Property` that was updated by this mutation. */
  property?: Maybe<Property>;
  /** An edge for our `Property`. May be used by Relay 1. */
  propertyEdge?: Maybe<PropertiesEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our update `Property` mutation. */
export type UpdatePropertyPayloadPropertyEdgeArgs = {
  orderBy?: InputMaybe<Array<PropertiesOrderBy>>;
};

export type GeoJsonDatasetFragment = { __typename?: 'GeojsonDataset', id: any, name?: string | null, value?: { [key: string]: unknown } | null };

export type GetGeoJsonDatasetQueryVariables = Exact<{
  id: Scalars['UUID']['input'];
}>;


export type GetGeoJsonDatasetQuery = { __typename?: 'Query', geojsonDataset?: { __typename?: 'GeojsonDataset', id: any, name?: string | null, value?: { [key: string]: unknown } | null } | null };

export type GeoJsonDatasetDescriptionFragment = { __typename?: 'GeojsonDataset', id: any, name?: string | null };

export type GetGeoJsonDescriptionsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetGeoJsonDescriptionsQuery = { __typename?: 'Query', geojsonDatasets?: { __typename?: 'GeojsonDatasetsConnection', nodes: Array<{ __typename?: 'GeojsonDataset', id: any, name?: string | null } | null> } | null };

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
export function useGetGeoJsonDatasetQuery(baseOptions: Apollo.QueryHookOptions<GetGeoJsonDatasetQuery, GetGeoJsonDatasetQueryVariables> & ({ variables: GetGeoJsonDatasetQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetGeoJsonDatasetQuery, GetGeoJsonDatasetQueryVariables>(GetGeoJsonDatasetDocument, options);
      }
export function useGetGeoJsonDatasetLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetGeoJsonDatasetQuery, GetGeoJsonDatasetQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetGeoJsonDatasetQuery, GetGeoJsonDatasetQueryVariables>(GetGeoJsonDatasetDocument, options);
        }
// @ts-ignore
export function useGetGeoJsonDatasetSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetGeoJsonDatasetQuery, GetGeoJsonDatasetQueryVariables>): Apollo.UseSuspenseQueryResult<GetGeoJsonDatasetQuery, GetGeoJsonDatasetQueryVariables>;
export function useGetGeoJsonDatasetSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetGeoJsonDatasetQuery, GetGeoJsonDatasetQueryVariables>): Apollo.UseSuspenseQueryResult<GetGeoJsonDatasetQuery | undefined, GetGeoJsonDatasetQueryVariables>;
export function useGetGeoJsonDatasetSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetGeoJsonDatasetQuery, GetGeoJsonDatasetQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetGeoJsonDatasetQuery, GetGeoJsonDatasetQueryVariables>(GetGeoJsonDatasetDocument, options);
        }
export type GetGeoJsonDatasetQueryHookResult = ReturnType<typeof useGetGeoJsonDatasetQuery>;
export type GetGeoJsonDatasetLazyQueryHookResult = ReturnType<typeof useGetGeoJsonDatasetLazyQuery>;
export type GetGeoJsonDatasetSuspenseQueryHookResult = ReturnType<typeof useGetGeoJsonDatasetSuspenseQuery>;
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
// @ts-ignore
export function useGetGeoJsonDescriptionsSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetGeoJsonDescriptionsQuery, GetGeoJsonDescriptionsQueryVariables>): Apollo.UseSuspenseQueryResult<GetGeoJsonDescriptionsQuery, GetGeoJsonDescriptionsQueryVariables>;
export function useGetGeoJsonDescriptionsSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetGeoJsonDescriptionsQuery, GetGeoJsonDescriptionsQueryVariables>): Apollo.UseSuspenseQueryResult<GetGeoJsonDescriptionsQuery | undefined, GetGeoJsonDescriptionsQueryVariables>;
export function useGetGeoJsonDescriptionsSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetGeoJsonDescriptionsQuery, GetGeoJsonDescriptionsQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetGeoJsonDescriptionsQuery, GetGeoJsonDescriptionsQueryVariables>(GetGeoJsonDescriptionsDocument, options);
        }
export type GetGeoJsonDescriptionsQueryHookResult = ReturnType<typeof useGetGeoJsonDescriptionsQuery>;
export type GetGeoJsonDescriptionsLazyQueryHookResult = ReturnType<typeof useGetGeoJsonDescriptionsLazyQuery>;
export type GetGeoJsonDescriptionsSuspenseQueryHookResult = ReturnType<typeof useGetGeoJsonDescriptionsSuspenseQuery>;
export type GetGeoJsonDescriptionsQueryResult = Apollo.QueryResult<GetGeoJsonDescriptionsQuery, GetGeoJsonDescriptionsQueryVariables>;