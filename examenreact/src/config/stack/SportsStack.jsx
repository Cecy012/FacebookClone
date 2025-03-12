import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Sports from '../../modules/sports/adapters/screens/Sports'

const Stack = createStackNavigator();

export default function HomeStack() {
    return (
        <Stack.Navigator>

            <Stack.Screen
                name='Sports'
                component={Sports}
                options={{ title: 'Reels' }}
            />

        </Stack.Navigator>
    )
}

const styles = StyleSheet.create({})