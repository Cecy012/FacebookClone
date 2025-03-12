import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import News from '../../modules/news/adapters/screens/News'

const Stack = createStackNavigator();

export default function NewsStack() {
    return (
        <Stack.Navigator>

            <Stack.Screen
                name='News'
                component={News}
                options={{ title: 'Notis' }}
            />

        </Stack.Navigator>
    )
}

const styles = StyleSheet.create({})