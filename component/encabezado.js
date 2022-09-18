import React from "react";
import  { View, Text, StyleSheet  } from "react-native";
import { colors } from "../constants/colors";

const styles = StyleSheet.create({
    header: {
        height: 200,
        justifyContent: 'center',
        alignItems: 'flex-start',
        backgroundColor: 'white'
    },
    title: {
        fontSize: 24,
        color: 'black',
        fontWeight: 'bold',
        marginLeft: 20,
    },
    subtitle:{
        fontSize: 18,
        color: colors.black,
        marginLeft: 20,
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