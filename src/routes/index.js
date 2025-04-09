import { ActivityIndicator } from "react-native";
import AuthApp from "./app.routes"
import AuthRouter from "./auth.routes"


export default function Routes(){
    let signed = false;
    let loading = false;

    if(loading){
        return(
            <ActivityIndicator size={"large"} color={"#121212"}/>
        )
    }
   return signed ? <AuthApp/> : <AuthRouter/>
}