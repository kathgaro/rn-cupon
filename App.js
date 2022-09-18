import { StyleSheet, Text, View } from 'react-native';

import Encabezado from './component/encabezado';
import CuponMade from './screen/login';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
   
  },
});


export default function App() {
  return (
    <View style={styles.container}>
      <Encabezado 
        title='¡Jugá y ganá!' 
        subtitle='Creá tu propio descuento jugando'
      />
      <CuponMade 
      titlelog='¡Generá tu cupón!'
      label='Ingresa hasta 5 numeros'
      />
    </View>
  );
}

