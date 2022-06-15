import {useNavigation} from '@react-navigation/native';
import React, { useEffect } from 'react';
import {Button, Text, View} from 'react-native';
import { styles } from '../theme/appTheme';

export const Pagina2Screen = () => {
  const navigator = useNavigation();
  useEffect(() => {
    navigator.setOptions({
      title: 'Hola mundo',
      headerBackTitle: 'Atras', //Para darle un texto en ios al boton de atras por defecto
    });
  });

  return (
    <View style ={ styles.globalMargin} >
      <Text style=  {styles.title}>Pagina2Screen</Text>
      <Button
        title="Ir a pagina 3"
        onPress={() => navigator.navigate('Pagina3Screen')}
      />
    </View>
  );
};
