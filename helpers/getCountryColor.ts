import Colors from "../constants/Colors";
import { FeatureCollection } from "geojson";

export function getCountryColor(countryName: string) {
  if (countryName === 'Germany') {
    return Colors.tertiary[800]
  } else return Colors.secondary[500]
}

export function getColorizedGeojson(geojson: FeatureCollection) {
  return {
    ...geojson,
    features: geojson.features.map(feature => ({
      ...feature,
      properties: {
        ...feature.properties,
        fill: getCountryColor(feature.properties?.name)
      }
    })),
  }
}