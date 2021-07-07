import * as Types from '../types.generated';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions =  {}
export type GeoJsonDatasetFragment = (
  { __typename?: 'GeojsonDataset' }
  & Pick<Types.GeojsonDataset, 'id' | 'name' | 'value'>
);

export type GetGeoJsonDatasetQueryVariables = Types.Exact<{
  id: Types.Scalars['UUID'];
}>;


export type GetGeoJsonDatasetQuery = (
  { __typename?: 'Query' }
  & { geojsonDataset?: Types.Maybe<(
    { __typename?: 'GeojsonDataset' }
    & GeoJsonDatasetFragment
  )> }
);

export type GeoJsonDatasetDescriptionFragment = (
  { __typename?: 'GeojsonDataset' }
  & Pick<Types.GeojsonDataset, 'id' | 'name'>
);

export type GetGeoJsonDescriptionsQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type GetGeoJsonDescriptionsQuery = (
  { __typename?: 'Query' }
  & { geojsonDatasets?: Types.Maybe<(
    { __typename?: 'GeojsonDatasetsConnection' }
    & { nodes: Array<Types.Maybe<(
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