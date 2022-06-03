import React from 'react';
import { View, Text, StyleSheet, useWindowDimensions} from 'react-native';

//const {width, height} = Dimensions.get('window');

export const DimensionesScreen = () => {
    const {width, height} = useWindowDimensions();
  return (
      <View>
        <View style={styles.container}>
            <View style={{...styles.cajaMorada, width:width * 0.20}} />
            <View style={styles.cajaNaranja} />
        </View>
        <Text style={styles.title}> W:{width.toPrecision(4)}, H: {height.toPrecision(4)}</Text>
      </View>
  );
};

const styles = StyleSheet.create({
    container:{
        width: '100%',
        height: 200,
        backgroundColor: 'red',
    },
    cajaMorada: {
        backgroundColor:'#5856D6',
        //width: '50%',
        height:'50%',
    },
    cajaNaranja: {
        backgroundColor:'#F0A23B',
    },
    title:{
        textAlign: 'center',
        fontSize: 30,
    },
});
