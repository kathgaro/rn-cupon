import React from "react";
import { View, StyleSheet, Text } from "react-native";

const styles = StyleSheet.create({
    container:{
        flex: 1,
        //borderWidth:1,
        //padding:5,
        //borderRadius:5,
    },
    number:{
        fontSize: 20,
        fontFamily:'u-bold',
        paddingVertical:10,
    },
})

const CuponNumberContainer = ({children})=>{
    return(
        <View style={styles.container}>
            <Text style={styles.number}>{children}</Text>
        </View>
    );
}

export default CuponNumberContainer;