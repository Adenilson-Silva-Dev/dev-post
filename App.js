import { NavigationContainer } from "@react-navigation/native";
import Routes from "./src/routes";
import { StatusBar } from "react-native";
import AuthProvider from "./src/contexts";


export default function App(){
  return(
    <NavigationContainer>
      <AuthProvider>
        <StatusBar backgroundColor={"#353840"} barStyle={"light-content"}/>
        <Routes/>
      </AuthProvider>
    </NavigationContainer>
  )
}