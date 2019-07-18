import react from 'react';
import { View, StyleSheet} from 'react-native';
import MapView from 'react-native-maps'

const UsersMap = ({}) => {
  return (
		<View style = {styles.mapContainer}>
			<MapView style = {styles.map} />
		</View>
	)
}

const styles = StyleSheet.create({
	mapContainer : {
		width: '100%',
		height: 200,
		marginTop: 20
	},
	map: {
		width: '100%',
		height: '100%',
		flex: 1,
    ...StyleSheet.absoluteFillObject
	}
})

export default UsersMap;