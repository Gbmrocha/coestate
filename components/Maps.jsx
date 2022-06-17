import React, { useState, useEffect, useRef } from 'react';
import MapView from 'react-native-maps';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';
import { StyleSheet } from 'react-native';

export default function Maps() {
    const [origin, setOrigin] = useState();

    useEffect(() => {
        (
            async function () {
                const { status, permissions } = await Permissions.askAsync(Permissions.LOCATION);
                if (status === 'granted') {
                    let location = await Location.getCurrentPositionAsync({ enableHighAccuracy: true });
                    setOrigin({
                        latitude: location.coords.latitude,
                        longitude: location.coords.longitude,
                        latitudeDelta: 0.000922,
                        longitudeDelta: 0.000421
                    })
                } else {
                    throw new Error('Location permission not granted');
                }
            })();
    }, []);

    return (
        <MapView
            style={css.map}
            initialRegion={origin}
            showsUserLocation={true}
            zoomEnabled={false}
            loadingEnabled={true}
        >
        </MapView>
    )
}

const css = StyleSheet.create({
    map: {
        height: '100%'
    },
});