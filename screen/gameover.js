import React, {useEffect, useState} from "react";
import { View, StyleSheet, Text, Button, Dimensions, Alert, Image, ScrollView } from "react-native";
import Card from "../component/card";
import { colors } from "../constants/colors";

const styles= StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: "center",
    },
    containerLandscape:{
        flex:1,
        flexDirection: "row",
        padding: 10,
        justifyContent: 'space-around',
        alignItems: "center",
        width: '80%'
    },
    image:{
        height: 200,
        width: 200,
        
    },
    resultContainer:{
        marginLeft: '5%',
        width: '90%',
        margin:15,
        paddingVertical: 20,
        justifyContent: 'center',
        alignItems: "center",
    },
    textCard:{
        fontSize: 14,
        fontFamily:'u-light',
        margin:5,
        textAlign:'center'
    }
})
const GameOverScreen = ({roundNumber, userNumber, onRestartGame}) => {
    //Para identificar el landscape -por default esta en portrait-
    const[portrait, setPortrait] = useState(true);

    //Funcion para saber si estoy modo retrato o no
    const onPortrait = () => {
        const dim = Dimensions.get('screen');
        return dim.height >= dim.width;
    }
    const statePortrait = () => {
            setPortrait(onPortrait)
        }
    useEffect(() => {
        Dimensions.addEventListener('change', statePortrait())
       
        return() => {
            Dimensions.removeEventListener('change', statePortrait());
        }
    });

    console.warn('isPortrait', portrait)

    return(
        <ScrollView style={styles.containerScroll}>
            <View style={styles.container}>

                <Card style={portrait ? styles.resultContainer : styles.containerLandscape}>
                    <Image source={require('../assets/img/gameover.jpg')} style={styles.image} />

                    <View>
                        <Text style={styles.textCard}>Intentos: {roundNumber} </Text>
                        <Text style={styles.textCard}>Jugaste con el numero: {userNumber} </Text>

                        <Button 
                        title='Reiniciar' 
                        onPress={onRestartGame}
                        color={colors.primary}
                        />
                    </View>
                </Card>
            
            </View>
        </ScrollView>
    )
}

export default GameOverScreen;