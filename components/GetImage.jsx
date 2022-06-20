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
        }).then((result) => 
            setImage(result.uri)
        );

    };

    return(
        <View style={{flex: 1, justifyContent: "center" }}>
            {!image && <Button title="Escolha sua foto" onPress={pickImage} />}
            {image && <Image source = {{uri: image}} style={{ width: 150, height: 150, borderRadius: 100, }}/>}
        </View>
    )
}

 