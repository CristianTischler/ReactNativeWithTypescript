import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

interface Props {
  text: string;
  color?: string;
  ancho?: boolean;
  accion: ( numeroTexto: string ) => void;
}

export const BotonCalc = ({text, color = '#2D2D2D', ancho = false, accion}: Props) => {
  return (
    <TouchableOpacity
      onPress={() => accion( text )}
    >
      <View style={{
        ...styles.boton,
        backgroundColor: color,
        width: ( ancho ) ? 180 : 80,
        }}>
        <Text style={{...styles.botonTexto, color: (color === '#9B9B9B') ? 'black' : 'white'}}>
          {text}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  boton: {
    height: 80,
    width: 80,
    backgroundColor: '#2D2D2D',
    borderRadius: 100,
    justifyContent: 'center',
    marginHorizontal: 10,
  },
  botonTexto: {
    textAlign: 'center',
    padding: 10,
    fontSize: 30,
    color: 'white',
    fontWeight: '300',
  },
});
