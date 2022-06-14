import React from 'react';
import {Button, Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

export const Pagina3Screen = () => {
  const navigator = useNavigation();
  return (
    <View>
      <Text>Pagina3Screen</Text>
      <Button title="Regresar" onPress={() => navigator.pop()} />
    </View>
  );
};
