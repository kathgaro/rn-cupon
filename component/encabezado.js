import React from "react";
import  { View, Text, StyleSheet, StatusBar, Platform  } from "react-native";
import { colors } from "../constants/colors";

const styles = StyleSheet.create({
    header: {
        height: 180,
        justifyContent: 'center',
        alignItems: 'flex-start',
        //backgroundColor: 'red',
        marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    },
    title: {
        fontSize: 24,
        color: 'black',
        fontFamily:'u-bold',
        marginLeft: '5%',
    },
    subtitle:{
        fontSize: 18,
        color: colors.black,
        marginLeft: '5%',
        fontFamily:'u-light',
    }
});

const Encabezado = ({title, subtitle}) => {
    return (
        <View style={styles.header}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.subtitle}>{subtitle}</Text>
        </View>
    )
}

export default Encabezado;