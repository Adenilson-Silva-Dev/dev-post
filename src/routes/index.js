import { ActivityIndicator, View } from "react-native";
import AuthApp from "./app.routes"
import AuthRouter from "./auth.routes"
import { useContext } from "react";
import { AuthContext } from "../contexts";


export default function Routes(){
    const {signed,loading} = useContext(AuthContext)
 


    if(loading){
        return(
           <View style={{flex:1, alignItems:'center',justifyContent:"center" ,backgroundColor:"#353840"}}>
             <ActivityIndicator size={"large"} color={"#E52246"}/>
           </View>
        )
    }
   return signed ? <AuthApp/> : <AuthRouter/>
}