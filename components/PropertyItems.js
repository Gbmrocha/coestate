import React from 'react';
import { View, Text, Image, TouchableOpacity  } from 'react-native';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export const localProperty = [
    {
        name: "Property1",
        image_url:
          "https://static.onecms.io/wp-content/uploads/sites/9/2020/04/24/ppp-why-wont-anyone-rescue-restaurants-FT-BLOG0420.jpg",
        location: "" ,
      },
      {
        name: "Property2",
        image_url:
          "https://static.onecms.io/wp-content/uploads/sites/9/2020/04/24/ppp-why-wont-anyone-rescue-restaurants-FT-BLOG0420.jpg",
        location: "" ,
      },
      {
        name: "Property3",
        image_url:
          "https://static.onecms.io/wp-content/uploads/sites/9/2020/04/24/ppp-why-wont-anyone-rescue-restaurants-FT-BLOG0420.jpg",
        location: "" ,
      },
];


export default function PropertyItems() {
    return(
        <TouchableOpacity activeOpacity={1} style ={{ marginBottom: 30 }}>
            {localProperty.map((property, index) => (
                <View style = {{ marginTop: 10, padding: 15, backgroundColor: "white"}}>
                    <PropertyImage image = {property.image_url}/>
                    <PropertyInfo name = {property.name} rating = {property.location}/>
                </View>
            ))}
        </TouchableOpacity>
    )
}


const PropertyImage = (props) => (
    <>
        <Image
            source = { {
                uri: props.image,
            }}
            style = {{ width: "100%", height: 180}}
            Touchble
        />
        <TouchableOpacity style={{ position: "absolute", right: 20, top: 20 }}>
            <MaterialCommunityIcons name = "heart-outline" size = { 25 } color = "#fff" />
        </TouchableOpacity>
    </>
);

const PropertyInfo = (props) => (
    <View style ={{ 
        flexDirection: "row", 
        justifyContent: "space-between", 
        alignItems: "center", 
        marginTop: 10,
        }}
    >
        <View>
            <Text style = {{ fontSIze: 15, fontWeight: "700" }}>{props.name}</Text>
            <Text style = {{ fontSIze: 13, color: "gray" }}>35-45 • min</Text>
        </View>
   </View>
);