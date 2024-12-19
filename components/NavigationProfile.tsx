import React from 'react'
import { Text, View, StyleSheet } from 'react-native'


function NavigationProfile(): any {
    return (
        <View style={styles.layouts}>
            <Text>Mejonliner</Text>
        </View>
    );
} 

const styles = StyleSheet.create({
    layouts: {
        maxWidth: 200,
        padding: 6,
        backgroundColor: '#aedabc'
    },
}) 

export default NavigationProfile;