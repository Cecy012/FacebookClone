import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const News = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Esta es la pantalla de noticias</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
    },
});

export default News;