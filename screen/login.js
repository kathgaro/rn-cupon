import React, {useState} from "react";
import  { View, Text, StyleSheet, Button, TouchableWithoutFeedback, Keyboard} from "react-native";

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
        width: 300,
        maxWidth:' 80%',
        height: 300,
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
    const [cupon, setCupon] = useState('');

    const ondHandleChange=(text)=>{
        //VALIDACION para solo ingresar numeros -no letras- del 0 al 9
        setCupon(text.replace(/[^0-9]/g, ''));
    }
    return(
        //                            Linea 64 - Al hacer clic afuera desaparece el teclado
        <TouchableWithoutFeedback onPress={()=>Keyboard.dismiss()}>
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
                        onChangeText={(text)=> ondHandleChange(text)}
                        value={cupon}
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
        </TouchableWithoutFeedback>
    )
}

export default CuponMade;