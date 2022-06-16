import React from 'react';
import { View, Text } from 'react-native';

export default function PropertyDescription(props) {
    return (
        <View style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: 30,
            backgroundColor: "#eee",
            borderRadius: 10
        }}
        >
            <View style={{ padding: 10 }}>
                <Text style={{ fontSize: 30, fontWeight: "700" }}>Description</Text>
                <Text style={{ fontSize: 13, color: "gray" }}>{props.description}</Text>
            </View>
        </View>
    )
}
