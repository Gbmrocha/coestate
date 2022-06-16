import React from 'react';
import { Image, TouchableOpacity } from 'react-native';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export default function PropertyImage(props) {
    return (
        <>
            <Image
                source={{
                    uri: props.image,
                }}
                style={{ width: "100%", height: 180, borderTopRightRadius: 10, borderTopLeftRadius: 10 }}
                Touchble
            />
            <TouchableOpacity style={{ position: "absolute", right: 20, top: 20 }}>
                <MaterialCommunityIcons name="heart-outline" size={25} color="#fff" />
            </TouchableOpacity>
        </>
    )
}
