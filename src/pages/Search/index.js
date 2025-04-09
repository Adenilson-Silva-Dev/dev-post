import { View, Text, StyleSheet } from "react-native";


export default function Search(){
    return(
        <View style={styles.Container}>
            <Text>Pagina search</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    Container:{
        flex:1,
        backgroundColor:'#353840'
    }
})