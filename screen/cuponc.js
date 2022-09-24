import React, { useState, useRef, useEffect } from "react";
import { View, StyleSheet, Text, Button, Dimensions, Alert } from "react-native";
import Card from "../component/card";
import CuponNumberContainer from "../component/cuponNumber";
import { colors } from "../constants/colors";
import {generateRandomNumberBetween} from "../utils/function";

//Dimension
const  {height, width} = Dimensions.get('window')

const styles = StyleSheet.create({
    container:{
        flex: 1,
        padding: 10,
        alignItems: 'center'
    },
    card :{
        marginTop:20,
        marginHorizontal: 20,
        width: width/1.10,
        alignItems: 'center',
        justifyContent: 'center',
        height: 150,
    },
    title :{
        marginTop:20,
        fontFamily:'u-light',
    },
    containerButton :{
        width: '75%',
       // marginHorizontal:20,
        flexDirection: 'row',
        justifyContent: 'space-around',
       marginBottom: 20,
    },
})


const CuponNumberGenerator = ({selectNumber, onGameOver})=> {
     //Estado que genera el orden aleatorio
     const[currentGuess, setCurrentGuess] = useState(generateRandomNumberBetween (1, 100, selectNumber))
    // Rondas
    const[round, setRound] = useState(0)
    // Referencias del 1 al 100
    const numLow = useRef(1);
    const numHigh = useRef(100);

    //Generamos numeros aleatorios
    const onHandleNextGuess = (direction) => {
        if(
            (direction == 'menos' && currentGuess < selectNumber) || 
            (direction == 'mas' && currentGuess > selectNumber)
        ){
            Alert.alert('mmm... Huele a trampa!', 'Intentalo de nuevo!!', [{text: 'Intentar de nuevo!', style: 'cancel'}], undefined);
            return
            }
        if(direction == 'menos'){
            numHigh.current = currentGuess;
        }else{
            numLow.current = currentGuess
        }

        const nextNumber = generateRandomNumberBetween(numLow.current,  numHigh.current, currentGuess)
        setCurrentGuess(nextNumber)
        setRound( rounds => rounds + 1);
    };
    //
    useEffect(()=>{
        if(currentGuess == selectNumber){
            onGameOver(round);
        }
    },[currentGuess, selectNumber, onGameOver])

    return (
        <View style={styles.container}>
            <Card style={styles.card}>
                <Text style={styles.title}>Tu numero de juego ahora es: </Text>
                <CuponNumberContainer>{currentGuess}</CuponNumberContainer>
                <View style={styles.containerButton}>
                    <Button 
                        title='Menor' 
                        onPress={() =>onHandleNextGuess('menos')}
                        color={colors.primary}
                        />
                    <Button 
                        title='Mayor' 
                        onPress={() =>onHandleNextGuess('mas')}
                        color={colors.inactive}
                        />
                </View>
            </Card>
        </View>
    )
}

export default CuponNumberGenerator;   