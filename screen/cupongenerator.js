import React, {useState} from "react";
import  { View, Text, StyleSheet, Button, TouchableWithoutFeedback, Keyboard} from "react-native";

import Input from "../component/input";
import Card from "../component/card";
import CuponNumberContainer from "../component/cuponNumber";
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
        fontFamily:'u-regular',
        textAlign: 'center',
        //paddingVertical: 20,
    },
    inputContainer:{
        width: 300,
        maxWidth:' 80%',
        height: 280,
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
        width: '80%',
        marginHorizontal: 20,
        //flexDirection: 'row',
        //justifyContent: 'space-between',
        marginTop: 20,
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
        //                            Linea 64 - Al hacer clic afuera desaparece el teclado
        <TouchableWithoutFeedback onPress={()=>Keyboard.dismiss()}>
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
        </TouchableWithoutFeedback>
    )
}

export default CuponMade;