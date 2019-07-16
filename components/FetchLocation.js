import React from 'react';
import { Button } from 'react-native'

const FetchLocation = ({ locationData }) => {
	return (
		<Button title='Get location' onPress={locationData} />
	)
}

export default FetchLocation;
