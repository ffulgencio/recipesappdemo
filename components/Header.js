import React from 'react';
import { View, TextInput, Text, StyleSheet } from 'react-native';
import { reportLogBoxError } from 'react-native/Libraries/LogBox/Data/LogBoxData';

const Header = () => {
    return ( 
        <View style={styles.container}>
            <Text style={styles.title}>Recipes</Text>
            <TextInput style={styles.input} placeholder='Search' />
        </View>
     );
}
 
const styles = StyleSheet.create({
    container:{
        width:'100%',
        height:'15%',
        backgroundColor:"#9100E6",
        justifyContent:"center",
        alignItems:"center"
        
    },
    title:{
        fontSize:18,
        fontWeight:"bold",
        color:"white"
    },
    input:{
        width:'80%',
        height:40,
        borderRadius:20,
        padding:5,
        backgroundColor:"rgba(255,255,255,0.3)",
        elevation:1
    }
})
export default Header;