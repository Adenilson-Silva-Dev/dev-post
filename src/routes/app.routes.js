import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from 'react-native-vector-icons/Feather';
import Home from "../pages/home";
import SigIn from "../pages/SignIn";
import Search from "../pages/Search";
import Profile from "../pages/Profile";

const Tab = createBottomTabNavigator()

export default function AuthApp(){
    return(
        <Tab.Navigator screenOptions=
        {
           {
           
            headerShown:false,
            tabBarActiveTintColor: '#fff',    // Cor do ícone/texto quando ativo
           tabBarInactiveTintColor: 'rgba(204, 204, 204, 0.3)',
            tabBarShowLabel: false, 
            
            tabBarStyle:{

                borderTopWidth:0,
                backgroundColor:'#222227'
            }
           }
            
            }>
        <Tab.Screen 
          name="Home" 
          component={Home}
            options={{
                tabBarIcon:({color, size})=>(
                <Icon name="home" color={color} size={size} />
                )
            }}
        />
        <Tab.Screen 
          name="Search" 
          component={Search}
            options={{
                tabBarIcon:({color, size})=>(
                <Icon name="search" color={color} size={size} />
                )
            }}
        />
        <Tab.Screen 
          name="Profile" 
          component={Profile}
            options={{
                tabBarIcon:({color, size})=>(
                <Icon name="user" color={color} size={size} />
                )
            }}
        />
      </Tab.Navigator>
    )
}