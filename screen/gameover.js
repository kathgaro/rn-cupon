import React from "react";
import { View, StyleSheet, Text, Button, Dimensions, Alert, Image } from "react-native";
import Card from "../component/card";
import { colors } from "../constants/colors";

const styles= StyleSheet.create({
    container:{
        flex: 1,
    },
    image:{
        height: 300,
        width: 400,
        alignItems: "center",
    },
    resultContainer:{
        marginLeft: '5%',
        width: '90%',
        margin:15,
    },
    textCard:{
        fontSize: 14,
        fontFamily:'u-light',
        margin:5,
        textAlign:'center'
    }
})
const GameOverScreen = ({roundNumber, userNumber, onRestartGame}) => {
    return(
        <View style={styles.container}>
            <Image source={require('../assets/img/gameover.jpg')} style={styles.image} />

            <Card style={styles.resultContainer}>
                <Text style={styles.textCard}>Intentos: {roundNumber} </Text>
                <Text style={styles.textCard}>Jugaste con el numero: {userNumber} </Text>

                <Button 
                title='Reiniciar' 
                onPress={onRestartGame}
                color={colors.primary}
            />
            </Card>
            
        </View>
        
    )
}

export default GameOverScreen;