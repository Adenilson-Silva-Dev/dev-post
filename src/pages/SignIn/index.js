import { useContext, useState } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, TouchableWithoutFeedback, Keyboard, ActivityIndicator } from "react-native";
import { AuthContext } from "../../contexts";




export default function SigIn (){

    const {siginUp,signIn,loadAuth} = useContext(AuthContext);
    const[nome, setNome]= useState("");
    const[email, setEmail] = useState("");
    const[password,setPassword]= useState("")
    const [login, setLogin] = useState(true);
    

    function toogleButton(){
        setLogin(!login)
        setNome("")
        setEmail("")
        setPassword("")
    }
 
    async function handleSignIn(){

        if(email === "" || password === ""){
            console.log("Preencha todos os campos!")
          
            return;
        }

       
        await signIn(email, password)
       
    }

    async function handleSinUp(){
        if(nome === ""|| password === "" || email === ""){
            console.log( console.log("Preencha todos os campos!"))
            return;
        }

        await siginUp(email,password,nome)
       
    }

    if (login){

        return(
            <TouchableWithoutFeedback onPress={()=> Keyboard.dismiss()}>
                <View style={styles.Container}>
                <Text style={styles.Title}>Dev<Text style={[styles.Title, {color:'#E52246'}]}>Post</Text></Text>

                <TextInput 
                    value={email} 
                    onChangeText={(value)=> setEmail(value)}
                    style={styles.Input}
                    placeholder="Seu email..."
                />

                <TextInput
                    value={password} 
                    onChangeText={(value)=> setPassword(value)}
                    secureTextEntry
                    style={styles.Input}
                    placeholder="Sua senha..."
                 />
                <TouchableOpacity activeOpacity={.8} style={styles.BotaoAcessar} onPress={handleSignIn}>
                    {loadAuth ? (
                        <ActivityIndicator size={24} color={"#fff"}/>
                    ):(
                        <Text style={{fontSize:18, fontWeight:'800', color:'#fff'}}>Acessar</Text>
                    )}
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

                <TextInput
                    value={nome} 
                    onChangeText={(value)=>setNome(value)}
                    style={styles.Input}
                    placeholder="Seu nome..."
                />

                <TextInput
                    value={email} 
                    onChangeText={(value)=> setEmail(value)}
                    style={styles.Input}
                    placeholder="Seu email..."
                />
                <TextInput
                    value={password} 
                    onChangeText={(value)=> setPassword(value)}
                    secureTextEntry
                    style={styles.Input}
                    placeholder="Sua senha..."
                />
                <TouchableOpacity activeOpacity={.8} style={styles.BotaoAcessar} onPress={handleSinUp}>
                {loadAuth ? (
                        <ActivityIndicator size={24} color={"#fff"}/>
                    ):(
                        <Text style={{fontSize:18, fontWeight:'800', color:'#fff'}}>Criar uma conta</Text>
                    )}
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