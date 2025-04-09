import { View, Text, StyleSheet } from "react-native";


export default function Profile(){
    return(
        <View style={styles.Container}>
            <Text>Pagina perfil</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    Container:{
        flex:1,
        backgroundColor:'#353840'
    }
})