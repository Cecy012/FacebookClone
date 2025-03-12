import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import HomeStack from '../stack/HomeStack'
import SportsStack from '../stack/SportsStack'
import NewsStack from '../stack/NewsStack'
import ProfileStack from '../stack/ProfileStack'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Icon } from '@rneui/base'

const Tab = createBottomTabNavigator();

export default function Navigation() {
    return (

        <NavigationContainer>

            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        const { iconName, iconType } = getIconName(route.name, focused);
                        
                        return <Icon name={iconName} type={iconType} size={size} color={color} />;
                    },
                    tabBarActiveTintColor: '#0D2341',
                    tabBarInactiveTintColor: '#345177',
                    headerShown: false
                })}
            >

                <Tab.Screen
                    name='HomeStack'
                    component={HomeStack}
                    options={{ title: "" }}
                />

                <Tab.Screen
                    name='SportsStack'
                    component={SportsStack}
                    options={{ title: "" }}
                />

                <Tab.Screen
                    name='NewsStack'
                    component={NewsStack}
                    options={{ title: "" }}
                />

                <Tab.Screen
                    name='ProfileStack'
                    component={ProfileStack}
                    options={{ title: "" }}
                />

            </Tab.Navigator>

        </NavigationContainer>


    )
}

const getIconName = (routeName, focused) => {
    let iconName = '';
    let iconType = 'material-community';

    switch (routeName) {
        case 'HomeStack':
            iconName = focused ? 'home' : 'home-outline';
            break;
        case 'SportsStack':
            iconName = focused ? 'heart' : 'heart-outline';
            break;
        case 'NewsStack':
            iconName = focused ? 'newspaper' : 'newspaper';
            break;
        case 'ProfileStack':
            iconName = focused ? 'account' : 'account-outline';
            break;
    }

    return { iconName, iconType };
};