
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SigIn from "../pages/SignIn";

 const Stack = createNativeStackNavigator()

 export default function AuthRouter(){
    return(
        <Stack.Navigator>
            <Stack.Screen options={{headerShown:false}} name="SigIn" component={SigIn}/>
        </Stack.Navigator>
    )
 }