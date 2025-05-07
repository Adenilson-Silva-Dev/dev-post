import { useContext } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { AuthContext } from "../../contexts";


export default function Profile(){
    const {logOut} = useContext(AuthContext)
    return(
        <View style={styles.Container}>
            <View style={styles.AreaItens}>
                <TouchableOpacity activeOpacity={.5} style={styles.AreaImage}>
                     <Image style={styles.Avatar} source={require("../../assets/avatar.png")}/>
                </TouchableOpacity>
                <Text numberOfLines={1} style={{width:150,fontSize:18, fontWeight:"800", color:'#fff'}}>Olá, <Text style={{fontWeight:'normal'}}>Adenilson Rosa</Text> </Text>

                <TouchableOpacity activeOpacity={.8} style={[styles.BotaoSair, {backgroundColor:"#428CFD", borderWidth:0}]} >
                    <Text style={[styles.TextBotao, {color:"#fff"}]}>Atualizar perfil</Text>
                </TouchableOpacity>

                <TouchableOpacity activeOpacity={.8} style={styles.BotaoSair} onPress={logOut}>
                    <Text style={styles.TextBotao}>Sair</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    Container:{
        flex:1,
        alignItems:'center',
        backgroundColor:'#353840'
    },
    AreaItens:{
        width:'80%',
        alignItems:'center',
        marginTop:80
    },

    AreaImage:{
        width:180,
        height:180,
        borderRadius:"100%",
        alignItems:'center',
        marginBottom:30,
        justifyContent:"center",
        backgroundColor:'rgba(255, 255, 255, 0.8)',
    },
    Avatar:{
  
        width:250,
        height:250,
       objectFit:"contain"
        
    },
    BotaoSair:{
        width:'100%',
        height:50,
        alignItems:'center',
        justifyContent:'center',
        borderWidth:1,
        borderRadius:8,
        marginTop:18,
        borderColor:'#fff',
    },
    TextBotao:{
        fontSize:18,
        color:"#E52246"
    }
})