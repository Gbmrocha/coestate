import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import PropertyImage from './PropertyImage';
import PropertyInfo from './PropertyInfo';

const localProperty = [
    {
        name: "Property1",
        image_url:
            "https://static.onecms.io/wp-content/uploads/sites/9/2020/04/24/ppp-why-wont-anyone-rescue-restaurants-FT-BLOG0420.jpg",
        location: "",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quis malesuada quam, eget feugiat sapien. Cras scelerisque convallis mi pretium facilisis. Nam eget dui nunc. Vestibulum nec arcu non tellus porttitor venenatis eget sit amet dui. Ut euismod nunc faucibus malesuada vehicula. Sed maximus, nulla egestas dapibus porta, sem tortor tincidunt est, id ornare tellus dolor eu diam. Quisque in lorem ultricies odio laoreet rhoncus et ac sapien. Mauris blandit nunc est. Cras sit amet sem rutrum, mollis ligula eu, placerat magna. Maecenas velit justo, pellentesque eu pretium rutrum, hendrerit vitae risus."
    },
    {
        name: "Property2",
        image_url:
            "https://static.onecms.io/wp-content/uploads/sites/9/2020/04/24/ppp-why-wont-anyone-rescue-restaurants-FT-BLOG0420.jpg",
        location: "",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quis malesuada quam, eget feugiat sapien. Cras scelerisque convallis mi pretium facilisis. Nam eget dui nunc. Vestibulum nec arcu non tellus porttitor venenatis eget sit amet dui. Ut euismod nunc faucibus malesuada vehicula. Sed maximus, nulla egestas dapibus porta, sem tortor tincidunt est, id ornare tellus dolor eu diam. Quisque in lorem ultricies odio laoreet rhoncus et ac sapien. Mauris blandit nunc est. Cras sit amet sem rutrum, mollis ligula eu, placerat magna. Maecenas velit justo, pellentesque eu pretium rutrum, hendrerit vitae risus."
    },
    {
        name: "Property3",
        image_url:
            "https://static.onecms.io/wp-content/uploads/sites/9/2020/04/24/ppp-why-wont-anyone-rescue-restaurants-FT-BLOG0420.jpg",
        location: "",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quis malesuada quam, eget feugiat sapien. Cras scelerisque convallis mi pretium facilisis. Nam eget dui nunc. Vestibulum nec arcu non tellus porttitor venenatis eget sit amet dui. Ut euismod nunc faucibus malesuada vehicula. Sed maximus, nulla egestas dapibus porta, sem tortor tincidunt est, id ornare tellus dolor eu diam. Quisque in lorem ultricies odio laoreet rhoncus et ac sapien. Mauris blandit nunc est. Cras sit amet sem rutrum, mollis ligula eu, placerat magna. Maecenas velit justo, pellentesque eu pretium rutrum, hendrerit vitae risus."
    },
];


export default function PropertyItems() {
    const navigation = useNavigation();

    return (
        <>
            {localProperty.map((property, index) => (
                <TouchableOpacity onPress={(e) => navigation.navigate('Details', { name: property.name, image_url: property.image_url, location: property.location, description: property.description })}>
                    <View style={{ marginTop: 10, padding: 15, backgroundColor: "white" }}>
                        <PropertyImage image={property.image_url} />
                        <PropertyInfo name={property.name} rating={property.location} />
                    </View>
                </TouchableOpacity>
            ))}
        </>
    )
}
