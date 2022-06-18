import React, {useState, useEffect} from "react";
import {Text, View, Button, Image} from "react-native";
import * as ImagePicker from "expo-image-picker"

export default function GetImage (){
    const [ image, setImage ] = useState(null);

    const pickImage = async () => {
        let result = ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4,3],
            quality: 1,
        });
    
        console.log(result);

        if(!result.cancelled){
            setImage(result.uri);
        }   
    };

    return(
        <View style={{flex: 1, justifyContent: "center" }}>
            <Button title="Escolha uma foto" onPress={() => pickImage()} />
            {image && <Image source = {{uri: image}}/>}
        </View>
    )
}

 