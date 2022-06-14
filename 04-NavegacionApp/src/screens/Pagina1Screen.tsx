import {useNavigation} from '@react-navigation/native';
//import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {Button, Text, View} from 'react-native';

//interface Props extends StackScreenProps<any, any> {}
export const Pagina1Screen = () => {
  const navigator = useNavigation();

  return (
    <View>
      <Text>Pagina1Screen</Text>
      <Button
        title="Ir a pagina 2"
        onPress={() => navigator.navigate('Pagina2Screen')}
      />
    </View>
  );
};
