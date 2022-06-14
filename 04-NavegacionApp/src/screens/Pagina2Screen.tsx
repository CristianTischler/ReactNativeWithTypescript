import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Button, Text, View} from 'react-native';

export const Pagina2Screen = () => {
  const navigator = useNavigation();

  return (
    <View>
      <Text>Pagina2Screen</Text>
      <Button
        title="Ir a pagina 3"
        onPress={() => navigator.navigate('Pagina3Screen')}
      />
    </View>
  );
};
