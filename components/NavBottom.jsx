import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from "@expo/vector-icons";
import HomePage from '../pages/HomePage';
import AccountPage from '../pages/AccountPage';

const Tab = createBottomTabNavigator();

export default function NavBottom() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={HomePage}
                options={{
                    tabBarIcon: (tabInfo) => (
                        <Ionicons
                            name="md-home"
                            size={24}
                            color={tabInfo.focused ? "red" : "#8e8e93"}
                        />
                    ),
                }}
            />
            <Tab.Screen name="Account" component={AccountPage}
                options={{
                    tabBarIcon: (tabInfo) => (
                        <Ionicons
                            name="md-person-circle-outline"
                            size={24}
                            color={tabInfo.focused ? "red" : "#8e8e93"}
                        />
                    ),
                }}
            />
        </Tab.Navigator>
    );
}