import React, {useState} from "react";
import  { View, Text, StyleSheet, Button, TouchableWithoutFeedback, Keyboard, ScrollView, Dimensions, KeyboardAvoidingView, Platform} from "react-native";

import Input from "../component/input";
import Card from "../component/card";
import CuponNumberContainer from "../component/cuponNumber";
import { colors } from "../constants/colors";

//Dimension
const  {height, width} = Dimensions.get('window')

// Estilos
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        marginVertical: 10,
    },
    containerScroll: {
        flex: 1,
    },
    titlelog:{
        fontSize: 20,
        color: colors.black,
        fontFamily:'u-regular',
        textAlign: 'center',
        paddingVertical: '5%',
    },
    inputContainer:{
        width: '100%',
        maxWidth:'90%',
        //height: 260,
        justifyContent: 'center',
        marginTop: '5%',
        //marginHorizontal: 25,
        alignItems: 'center',
       
    },
    inputText:{
        width: '100%',
        borderBottomColor: colors.primary,
        borderBottomWidth: 1,
        maxWidth: 50,
        fontSize: 25,
        paddingVertical: 10,
        textAlign: 'center',
        fontFamily:'u-bold',
        
    },
    label:{
        fontSize: 14,
        color: colors.inactive,
        fontFamily:'u-light',
        textAlign: 'center',
        paddingVertical: 5,
    },
    buttonContainer:{
        width: width/1.5,
        marginHorizontal: 20,
        //flexDirection: 'row',
        //justifyContent: 'space-between',
        margin: 20,
    },
    summaryContainer:{
        marginHorizontal: 20,
        alignItems: 'center',
        paddingVertical: 10,
        marginVertical: 20,
        width:300,
        height:130,
        justifyContent:'center'
    },
    summaryText:{
        fontSize: 12,
    },
   
    summaryContainerButton: {
        width: '80%',
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
})



const CuponMade = ({titlelog, label, onStart}) => {
    const [cupon, setCupon] = useState('');
    const [validationCupon, setValidationCupon] = useState(false);
    const [selectNumber, setSelectNumber] = useState(0);

    const ondHandleChange=(text)=>{
        //VALIDACION para solo ingresar numeros -no letras- del 0 al 9
        setCupon(text.replace(/[^0-9]/g, ''));
    }
    const onReset=()=>{
        //Vacia el campo del input y desvanece el teclado
        setCupon('');
        setSelectNumber(0)
        setValidationCupon(false)
        Keyboard.dismiss()
    }

    //VALIDAR
    const validar=()=>{
        //convierto en numero
        const ramdoNumber = parseInt(cupon, 10);
        if(isNaN(ramdoNumber) || ramdoNumber<=0 || ramdoNumber >99) return;
        //en caso sea verdadero
        setValidationCupon(true);
        setSelectNumber(ramdoNumber);
        setCupon('');
    }

    //
    const ondHandlerStart=()=>{
        onStart(selectNumber)
    }
    //CONFIRMAR VALIDACION
    const confirmedOuput = () => validationCupon && (
        <Card style={styles.summaryContainer}>
            <Text style={styles.summaryText}> Elegiste el numero</Text>
            <CuponNumberContainer>{selectNumber}</CuponNumberContainer>

            <View style={styles.summaryContainerButton}>
                <Button
                title='Jugar'
                onPress={ondHandlerStart}
                color={colors.primary} 
                />
                <Button 
                title='Borrar'
                color={colors.inactive}
                onPress={onReset}
                /> 
            </View>
            
        </Card>
    )

    return(
        <KeyboardAvoidingView style={styles.containerScroll} behavior={Platform.OS == 'android' ? 'padding' : 'position'} keyboardVerticalOffset={30}>
            <TouchableWithoutFeedback onPress={()=>Keyboard.dismiss()}>
                <ScrollView style={styles.containerScroll}>
                    <View style={styles.container}>
                        <Card style={styles.inputContainer}>
                            <Text style={styles.titlelog}>{titlelog}</Text>
                            <Text style={styles.label}>{label}</Text>
                            <Input 
                                style={styles.inputText} 
                                cursorColor='#C69B64' 
                                keyboardType='numeric'
                                maxLength={2}
                                blurOnSubmit
                                autoCapitalize='none'
                                autoCorrect={false}
                                onChangeText={(text)=> ondHandleChange(text)}
                                value={cupon}
                            />
                        
                            <View style={styles.buttonContainer}>
                                <Button 
                                    title='Agregar'
                                    color={colors.primary} 
                                    onPress={validar}
                                />
                                
                            </View>
                        </Card>
                        {confirmedOuput()}
                    </View>
                </ScrollView>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    )
}

export default CuponMade;