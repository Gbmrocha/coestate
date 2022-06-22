import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DetailPage from "../pages/DetailPage";
import NavBottom from "./NavBottom";
import Maps from "./Maps";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";

const Stack = createNativeStackNavigator();

export default function StackNav() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login">
                <Stack.Screen
                    name="Login"
                    component={LoginPage}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="Register"
                    component={RegisterPage}
                />
                <Stack.Screen
                    name="Home"
                    component={NavBottom}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="Details"
                    component={DetailPage}
                />
                <Stack.Screen
                    name="Maps"
                    component={Maps}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};
