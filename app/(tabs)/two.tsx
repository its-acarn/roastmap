import { StyleSheet } from 'react-native';
import { View } from '../../components/Themed';
import MapView, { Geojson } from 'react-native-maps';
import { countries } from '../../constants/countriesGeojson'
import Colors from '../../constants/Colors';
import { customMapStyle } from '../../constants/customMapStyle'
import { getColorizedGeojson } from '../../helpers/getCountryColor';
import { useRouter } from 'expo-router';

export default function TabTwoScreen() {
  const router = useRouter()
  return (
    <View style={styles.container}>
      <MapView style={styles.map} provider='google' customMapStyle={customMapStyle} >
        <Geojson geojson={getColorizedGeojson(countries)} strokeColor={Colors.primary[900]} strokeWidth={1} tappable={true} onPress={({ feature, coordinates }) => router.push({ pathname: "/modal", params: { name: feature.properties?.name } })} />
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: '100%',
    height: '100%',
  },
});
