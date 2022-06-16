import React from 'react';
import { View, SafeAreaView, ScrollView, Text } from 'react-native';
import PropertyImage from '../components/PropertyImage';
import PropertyInfo from '../components/PropertyInfo';
import PropertyDescription from '../components/PropertyDescription';

export default function DetailPage({ route, navigation }) {
    const { name, image_url, location, description } = route.params;

    return (
        <SafeAreaView style={{ backgroundColor: "white", flex: 1, padding: 20 }}>
            <View>
                <Text style={{ fontSize: 40, fontWeight: "700", marginBottom: 10 }}>{name}</Text>
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <PropertyImage image={image_url} />
                <PropertyInfo name={name} rating={location} />

                <PropertyDescription description={description} />
            </ScrollView>
        </SafeAreaView>
    )
}