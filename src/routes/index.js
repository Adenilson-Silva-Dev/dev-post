import { ActivityIndicator } from "react-native";
import AuthApp from "./app.routes"
import AuthRouter from "./auth.routes"
import { useContext } from "react";
import { AuthContext } from "../contexts";


export default function Routes(){
    const {signed} = useContext(AuthContext)
  console.log(signed)
    let loading = false;

    if(loading){
        return(
            <ActivityIndicator size={"large"} color={"#121212"}/>
        )
    }
   return signed ? <AuthApp/> : <AuthRouter/>
}