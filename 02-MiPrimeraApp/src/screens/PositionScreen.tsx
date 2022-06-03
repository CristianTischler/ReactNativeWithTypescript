import React from 'react';
import { View, StyleSheet} from 'react-native';

export const PositionScreen = () => {
  return (
    <View style={styles.container}>
        <View style={styles.cajaMorada} />
        <View style={styles.cajaNaranja} />
        <View style={styles.cajaVerde} />
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#28C4D9',
        flex:1,
        // justifyContent: 'center',
        // alignItems: 'center',
    },
    cajaMorada: {
        backgroundColor:'#5856D6',
        width: 100,
        height:100,
        borderWidth: 10,
        borderColor: 'white',
        position: 'absolute',
        top: 0,
        right: 0,

    },
    cajaNaranja: {
        backgroundColor:'#F0A23B',
        width: 100,
        height:100,
        borderWidth: 10,
        borderColor: 'white',
        position: 'absolute',
        bottom: 0,
        right: 0,
    },

    cajaVerde: {
        backgroundColor:'green',
        width: 100,
        height:100,
        borderWidth: 10,
        borderColor: 'white',
        position: 'absolute',
        bottom: 0,
        left: 0,
        top: 0,
        right: 0,
        //...StyleSheet.absoluteFillObject,
    },
});
