import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../pages/home";

const Tab = createBottomTabNavigator()

export default function AuthApp(){
    return(
        <Tab.Navigator>
            <Tab.Screen name="Home" component={Home}/>
        </Tab.Navigator>
    )
}