import react from 'react';
import { View, StyleSheet} from 'react-native';
import MapView, { Marker } from 'react-native-maps'

const UsersMap = ({ usersLocation, usersPlaces }) => {
	let usersLocationMarker = null;
	if(usersLocation) {
		usersLocationMarker = (<Marker coordinate = {usersLocation}/>)
	}
	const usersPlacesMaker = usersPlaces.map(userPlaces => 
		<MapView.Marker 
			coordinate = {userPlaces} 
			key={userPlaces.id}/>)
  return (
		<View style = {styles.mapContainer}>
			<MapView 
				 initialRegion={{
					latitude: parseFloat(37.78825),
					longitude: parseFloat(-122.4324),
					latitudeDelta: 0.0922,
					longitudeDelta: 0.0421,
    		}}
				region={usersLocation}
				style = {styles.map} 
				showsUserLocation = {true}
				>
				{usersLocationMarker}
				{usersPlacesMaker}

				</MapView>
		</View>
	)
}

const styles = StyleSheet.create({
	mapContainer : {
		width: '100%',
		height: 400,
		marginTop: 20,
	
		
	},
	map: {
		width: '100%',
		height: '100%',
		flex: 1,
    ...StyleSheet.absoluteFillObject
	}
})

export default UsersMap;