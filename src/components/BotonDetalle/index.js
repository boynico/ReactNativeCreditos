import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';

const BotonDetalle = (props) => {
    return (
        <TouchableOpacity
            onPress={props.onPress}
            style={styles.buttonBody}>
            <Text
                style={styles.buttonText}>
                {props.children}
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    buttonBody: {
        backgroundColor: '#21466a',
        width: '90%',
        padding: 20,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 2,
        alignSelf: 'center',
    },
    buttonText: {
        color: 'white',
        fontFamily: 'Montserrat-Light',
        fontSize: 18,
    }
});

export { BotonDetalle };