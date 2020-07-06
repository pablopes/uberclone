import React from 'react';
import MapViewDirections from 'react-native-maps-directions';
const Directions = ({destination, origin, onReady}) => (
    <MapViewDirections 
        destination={destination}
        origin={origin}
        onReady={onReady}
        apikey='AIzaSyDfVY7icRAuUMNihVSnuuwbo7Ba9KQP37c'
        strokeWidth={3}
        strokeColor='#222'
    />
);
export default Directions;