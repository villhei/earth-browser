declare module "d3-geo" {
  export function geoArea(featureOrGeometry: any): number;
  export function geoBounds(featureOrGeometry: any): [[number, number], [number, number]];
  export function geoCentroid(featureOrGeometry: any): [number, number];
  export function geoDistance(a: [number, number], b: [number, number]): number;
  export function geoInterpolate(a: [number, number], b: [number, number]): (t: number) => [number, number];
  export function geoContains(featureOrGeometry: any, point: [number, number]): boolean;
}
