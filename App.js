import React, {useState} from "react";
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import {useFonts} from 'expo-font'
import { colors } from "./constants/colors";

import Encabezado from './component/encabezado';
import CuponMade from './screen/cupongenerator';
import CuponNumberGenerator from './screen/cuponc';
import onStart from './screen/cupongenerator';
import GameOverScreen from "./screen/gameover";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  containerLoader:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  }
})


export default function App() {

  const [userNumber, setUserNumber] = useState(0);
  //Estado de numero de rondas
  const [roundtime, setRoundtime] = useState(0);

  const [loaded] = useFonts({
    'u-bold': require('./assets/fonts/Ubuntu-Bold.ttf'),
    'u-italic': require('./assets/fonts/Ubuntu-Italic.ttf'),
    'u-light': require('./assets/fonts/Ubuntu-Light.ttf'),
    'u-regular': require('./assets/fonts/Ubuntu-Regular.ttf'),
  });

  const title = !userNumber ? '¡Jugá y ganá!' : '¡Empezamos!'

  //Recibe numero y setea
  const onStart = (selectNumber) =>{
    setUserNumber(selectNumber)
  }

  //
    const onGameOver = (roundNumber) =>{
      setRoundtime(roundNumber);
    }
  
  //
  const onRestartGame = () =>{
    setUserNumber(0)
    setRoundtime(0)
  }

  //si las fuentes no cargan, no se muestra la app --spinner
  if(!loaded){
    return(
      <View style={styles.containerLoader}>
        <ActivityIndicator size='large' color={colors.primary}/>
      </View>
    )
  }
  
  let content = <CuponMade 
  titlelog='¡Generá tu cupón!'
  label='Ingresa hasta 2 numeros'
  onStart={onStart}
  />

  if (userNumber && roundtime <=0){
    content = <CuponNumberGenerator selectNumber={userNumber} onGameOver={onGameOver}/>
  }else if(roundtime > 0){
    content = <GameOverScreen roundNumber={roundtime} userNumber={userNumber} onRestartGame={onRestartGame}/>
  }
  return (
    <View style={styles.container}>
      <Encabezado 
        title={title}
        subtitle='Creá tu propio descuento jugando'
      />
      {content}

    </View>
  );
}

