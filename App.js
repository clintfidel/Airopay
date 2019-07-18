import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import FetchLocation from './components/FetchLocation';
import UsersMap from './components/UsersMap';



export default function App() {
  const [userLocation, setUserLocation] = useState(null);
  const [usersPlaces, setUsersPlace] = useState([]);
  const handleGetLocation = () =>  {
    navigator.geolocation.getCurrentPosition(position => {
      setUserLocation({
        ...userLocation, 
        latitude: parseFloat(position.coords.latitude),
        longitude: parseFloat(position.coords.longitude),
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,     
      });
      fetch('https://airopay-1.firebaseio.com/places.json', {
        method: 'POST',
        body: JSON.stringify({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        })
      })
      .then(res => console.log(res))
      .catch(err => console.log(err))
    }, (error) => alert(JSON.stringify(error))),
    {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
  }

  const handleGetPlaces = () => {
    fetch('https://airopay-1.firebaseio.com/places.json', {
        method: 'GET',
      })
      .then(res => res.json())
      .then(response => {
        const placesArray = [];
        for(const key in response) {
          placesArray.push({
            latitude: response[key].latitude,
            longitude: response[key].longitude,
            id: key
          })
        }
        setUsersPlace(placesArray)
      })
      .catch(err => console.log(err))
  }
  return (
    <View style={styles.container}>
      <View style = {styles.placesButton}>
        <Button title = 'Get User places' onPress={handleGetPlaces}/>
      </View>
      <FetchLocation 
        locationData = {handleGetLocation} />
      <UsersMap 
        usersLocation = {userLocation} 
        usersPlaces = {usersPlaces}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  placesButton: {
    marginBottom: 20
  }
});
