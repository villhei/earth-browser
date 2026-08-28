import * as Types from '../graphql/types.generated';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type GeoJsonDatasetFragment = { __typename?: 'GeojsonDataset', id: any, name?: string | null, value?: { [key: string]: unknown } | null };

export type GetGeoJsonDatasetQueryVariables = Types.Exact<{
  id: Types.Scalars['UUID']['input'];
}>;


export type GetGeoJsonDatasetQuery = { __typename?: 'Query', geojsonDataset?: { __typename?: 'GeojsonDataset', id: any, name?: string | null, value?: { [key: string]: unknown } | null } | null };

export type GeoJsonDatasetDescriptionFragment = { __typename?: 'GeojsonDataset', id: any, name?: string | null };

export type GetGeoJsonDescriptionsQueryVariables = Types.Exact<{ [key: string]: never; }>;


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