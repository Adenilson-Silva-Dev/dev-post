import { useState } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, TouchableWithoutFeedback, Keyboard } from "react-native";




export default function SigIn (){

    const [signIn, setSignIn] = useState(true)
    function toogleButton(){
        setSignIn(!signIn)
    }
 
    if (!signIn){

        return(
            <TouchableWithoutFeedback onPress={()=> Keyboard.dismiss()}>
                <View style={styles.Container}>
                <Text style={styles.Title}>Dev<Text style={[styles.Title, {color:'#E52246'}]}>Post</Text></Text>
                <TextInput style={styles.Input} placeholder="Seu email..."/>
                <TextInput secureTextEntry style={styles.Input} placeholder="Sua senha..."/>
                <TouchableOpacity activeOpacity={.8} style={styles.BotaoAcessar}>
                    <Text style={{fontSize:18, fontWeight:'800', color:'#fff'}}>Acessar</Text>
                </TouchableOpacity>
    
                <TouchableOpacity style={styles.BotaoLink} onPress={toogleButton}>
                    <Text style={{color:'#fff'}}>Criar uma conta</Text>
                </TouchableOpacity>
            </View>
            </TouchableWithoutFeedback>
        )
    }

    return(
       <TouchableWithoutFeedback onPress={()=> Keyboard.dismiss()} >
         <View style={styles.Container}>
                <Text style={styles.Title}>Dev<Text style={[styles.Title, {color:'#E52246'}]}>Post</Text></Text>
                <TextInput style={styles.Input} placeholder="Seu nome..."/>
                <TextInput style={styles.Input} placeholder="Seu email..."/>
                <TextInput secureTextEntry style={styles.Input} placeholder="Sua senha..."/>
                <TouchableOpacity activeOpacity={.8} style={styles.BotaoAcessar}>
                    <Text style={{fontSize:18, fontWeight:'800', color:'#fff'}}>Criar conta</Text>
                </TouchableOpacity>
    
                <TouchableOpacity style={styles.BotaoLink}  onPress={toogleButton}>
                    <Text style={{color:'#fff'}}>Acessar conta</Text>
                </TouchableOpacity>
            </View>
       </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    Container:
    {
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:"#353840"
    },

    Title:{
        fontSize:40,
        marginBottom:40,
        color:"#fff",
        fontWeight:'900'
    },

    Input:{
        width:'80%',
        height:50,
        margin:8,
        padding:10,
        fontSize:18,
        borderRadius:4,
        backgroundColor:'#fff'
    },
    BotaoAcessar:{
        width:"80%",
        height:50,
        alignItems:'center',
        borderRadius:4,
        justifyContent:'center',
        marginTop:14,
        marginBottom:14,
        backgroundColor:'#428CFD',
    },
    BotaoLink:{
        width:"80%",
        height:50,
        alignItems:'center',
    }
})