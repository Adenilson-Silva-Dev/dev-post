import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from 'react-native-vector-icons/Feather';
import Home from "../pages/home";
import Search from "../pages/Search";
import Profile from "../pages/Profile";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import NewPost from "../pages/NewPost";
import PostUser from "../pages/PostUser";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

 function StackRoutes(){
  return(
    <Stack.Navigator>
      <Stack.Screen options={{headerShown:false}} name="Home" component={Home}/>
      <Stack.Screen
      options={{
        headerStyle:{
          backgroundColor:"#353840"
        },
        headerTintColor:"#fff"
      }}
      name="New Post" component={NewPost}/>
      <Stack.Screen name="Post user" component={PostUser}/>
    </Stack.Navigator>
  )
}

export default function AuthApp(){
    return(
        <Tab.Navigator screenOptions=
        {
           {
           tabBarHideOnKeyboard:true, // quando o teclado forr= ativado a tab bar some
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
          name="Home stack" 
          component={StackRoutes}
            options={{
                tabBarIcon:({color, size})=>{
                 return <Icon name="home" color={color} size={size} />
                }
                  
                
            }}
        />
        <Tab.Screen 
          name="Search" 
          component={Search}
            options={{
                tabBarIcon:({color, size})=>{
                  return <Icon name="search" color={color} size={size} />
                }
                
                
            }}
        />
        <Tab.Screen 
          name="Profile" 
          component={Profile}
            options={{
                tabBarIcon:({color, size})=>{
                  return   <Icon name="user" color={color} size={size} />
                }
              
                
            }}
        />
      </Tab.Navigator>
    )
}