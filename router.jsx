import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomePage from "./pages/HomePage";

const Stack = createStackNavigator();

const Router = (props) => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Home"
                    component={HomePage}
                    options={{
                        headerShown: false,
                    }}
                />

                <Stack.Screen
                    name="Account"
                    component={AccountPage}
                    options={{
                        title: "Search your destination"
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Router;