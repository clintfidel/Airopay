import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import FetchLocation from './components/FetchLocation';


const handleGetLocation = () =>  {
  navigator.geolocation.getCurrentPosition(position => {
    console.log(position)
  }, error => {
    throw error
  });
}
export default function App() {
  return (
    <View style={styles.container}>
      <FetchLocation 
        locationData = {handleGetLocation} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
