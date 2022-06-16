import React from 'react';
import { View, Text } from 'react-native';

export default function PropertyInfo(props) {
    return (
        <View style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: 10,
        }}
        >
            <View>
                <Text style={{ fontSize: 15, fontWeight: "700" }}>{props.name}</Text>
                <Text style={{ fontSize: 13, color: "gray" }}>1it00km</Text>
            </View>
        </View>
    )
}
