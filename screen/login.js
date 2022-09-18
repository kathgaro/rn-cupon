import React from "react";
import  { View, Text, StyleSheet, Button} from "react-native";

import Input from "../component/input";
import Card from "../component/card";
import { colors } from "../constants/colors";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        marginVertical: 10,
    },
    titlelog:{
        fontSize: 20,
        color: colors.black,
        textAlign: 'center',
        paddingVertical: 20,
    },
    inputContainer:{
        width: 320,
        maxWidth:' 80%',
        height: 200,
        justifyContent: 'center',
        marginHorizontal: 20,
        alignItems: 'center',
    },
    inputText:{
        width: '100%',
        borderBottomColor: colors.primary,
        borderBottomWidth: 1,
        maxWidth: 70,
        fontSize: 25,
        paddingVertical: 10,
        textAlign: 'center',
        
    },
    label:{
        fontSize: 12,
        color: colors.inactive,
        textAlign: 'center',
        paddingVertical: 5,
    },
    buttonContainer:{
        width: '70%',
        marginHorizontal: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 50,
    },

})

const CuponMade = ({titlelog, label}) => {
    return(
        <View style={styles.container}>

            <Text style={styles.titlelog}>{titlelog}</Text>

            <Card style={styles.inputContainer}>
                <Text style={styles.label}>{label}</Text>
                <Input 
                    style={styles.inputText} 
                    cursorColor='#C69B64' 
                    keyboardType='numeric'
                    maxLength={5}
                    blurOnSubmit
                    autoCapitalize='none'
                    autoCorrect={false}
                />
            
                <View style={styles.buttonContainer}>
                    <Button 
                        title='Agregar'
                        color='#C69B64' 
                        onPress={()=> null}
                    />
                    <Button 
                        title='Borrar'
                        color='#C2C2C2'
                        onPress={()=> null}
                    /> 
                </View>
            </Card>
        </View>
    )
}

export default CuponMade;