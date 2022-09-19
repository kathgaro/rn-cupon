import React, { useState } from "react";
import { View, StyleSheet, Text, Button } from "react-native";
import Card from "../component/card";
import CuponNumberContainer from "../component/cuponNumber";
import { colors } from "../constants/colors";
import {generateRandomNumberBetween} from "../utils/function";

const styles = StyleSheet.create({
    container:{
        flex: 1,
        padding: 10,
        alignItems: 'center'
    },
    card :{
        marginTop:20,
        marginHorizontal: 20,
        width: '80%',
        alignItems: 'center',
        justifyContent: 'center',
        height: 150,
    },
    title :{
        marginTop:20,
    },
    containerButton :{
        width: '75%',
       // marginHorizontal:20,
        flexDirection: 'row',
        justifyContent: 'space-around',
       marginBottom: 20,
    },
})



const CuponNumberGenerator = ({selectNumber})=> {
     //Estado que genera el orden aleatorio
     const[currentGuess, setCurrentGuess] = useState(generateRandomNumberBetween (1, 100, selectNumber))

    return (
        <View style={styles.container}>
            <Card style={styles.card}>
                <Text style={styles.title}>Tu numero de juego es: </Text>
                <CuponNumberContainer>{currentGuess}</CuponNumberContainer>
                <View style={styles.containerButton}>
                    <Button 
                        title='Menor' 
                        onPress={() =>null}
                        color={colors.primary}
                        />
                    <Button 
                        title='Mayor' 
                        onPress={() =>null}
                        color={colors.inactive}
                        />
                </View>
            </Card>
        </View>
    )
}

export default CuponNumberGenerator;   