import React from 'react';
import { View, SafeAreaView, ScrollView} from 'react-native';
import SearchBar from '../components/SearchBar';
import PropertyItems, {localProperty} from '../components/PropertyItems';

export default function HomePage() {
    const [propertyData, setpropertyData] = React.useState(localProperty);

        return(
        <SafeAreaView style = {{ backgroundColor: "#eee", flex: 1 }}>
           <View style = {{ backgroundColor: "white", padding: 15}}>
                <SearchBar />
           </View>
           <ScrollView showsVerticalScrollIndicator = { false }>
               <PropertyItems  propertyData = {propertyData} />
           </ScrollView>
        </SafeAreaView>
    )
}