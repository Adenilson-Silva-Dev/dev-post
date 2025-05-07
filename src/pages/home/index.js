import {  useContext } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { AuthContext } from "../../contexts";
import Icon from "react-native-vector-icons/Feather"
import { useNavigation } from "@react-navigation/native";
export default function Home(){

 const {user} = useContext(AuthContext)
  const navigation = useNavigation()
    return(
        <View style={styles.Container}>
            <Text>{user.nome}</Text>

            <TouchableOpacity style={styles.BotaoPost} activeOpacity={.8} onPress={() => navigation.navigate('New Post')}>
               <Icon name ="edit-2" color="#fff" size={20}/>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    Container:{
        flex:1,
        zIndex:1,
        backgroundColor:'#353840'
    },
    BotaoPost:{
        width:60,
        height:60,
        position:'absolute',
        bottom:14,
        right:8,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:'100%',
        elevation:8,
        zIndex:99,
        backgroundColor:'#222227'
    }
})