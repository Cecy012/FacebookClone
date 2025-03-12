import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Profile from '../../modules/auth/profile/adapters/screens/Profile'

const Stack = createStackNavigator();

export default function ProfileStack() {
    return (
        <Stack.Navigator>

            <Stack.Screen
                name='Profile'
                component={Profile}
                options={{ title: 'Perfil' }}
            />

        </Stack.Navigator>
    )
}

const styles = StyleSheet.create({})