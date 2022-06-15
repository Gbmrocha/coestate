import React from 'react';
import { View, SafeAreaView} from 'react-native';

export default function HomePage() {
        return(
        <SafeAreaView style = {{ backgroundColor: "#eee", flex: 1 }}>
           <View style = {{ backgroundColor: "white", padding: 15}}>
                <SearchBar />
           </View>
        </SafeAreaView>
    )
}