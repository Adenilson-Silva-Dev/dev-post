import {  useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import { AuthContext } from "../../contexts";

export default function Home(){

 const {user} = useContext(AuthContext)
  
    return(
        <View style={styles.Container}>
            <Text>{user.nome} idade: {user.idade}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    Container:{
        flex:1,
        backgroundColor:'#353840'
    }
})