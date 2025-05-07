import { View,Text,StyleSheet, TextInput } from "react-native";


export default function NewPost(){
    return(
        <View  style={styles.Container}>
            <TextInput style={styles.Input}multiline={true} maxLength={150} placeholder="Digite seu post" placeholderTextColor="#ddd"/>
        </View>
    )
}

const styles = StyleSheet.create({
    Container:{
        flex:1,
        backgroundColor:"#404349",
       
    },
    Input:{
        backgroundColor:'transparent',
        margin:10,
        padding:10,
        fontSize:20,
        color:'#fff',
    }
})