import {useNavigation} from '@react-navigation/native';
//import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {Button, Text, View} from 'react-native';
import { styles } from '../theme/appTheme';

//interface Props extends StackScreenProps<any, any> {}
export const Pagina1Screen = () => {
  const navigator = useNavigation();

  return (
    <View style ={ styles.globalMargin} >
      <Text style=  {styles.title}>Pagina1Screen</Text>
      <Button
        title="Ir a pagina 2"
        onPress={() => navigator.navigate('Pagina2Screen')}
      />
      <Button
        title="Ir persona"
        onPress={() => navigator.navigate('PersonaScreen')}
      />
    </View>
  );
};
