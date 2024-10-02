import { router } from "expo-router";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function Payments() {
    return (
        <View style={styles.content}>
            <View styles={styles.inputView}>
                <TextInput placeholder="valor" />
            </View>
            <View styles={styles.inputView}>
                <TextInput placeholder="Usuario" />
            </View>
            <View styles={styles.inputView}>
                <TextInput placeholder="Data" />
            </View>
            <View styles={styles.inputView}>
                <TextInput placeholder="Observaçoes" />
            </View>
            <View styles={styles.inputView}>
                <Button title="Salvar" />
                <Button title="Continuar" />
                <Button title="Cancelar" onPress={()=> router.back()} />
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    content: {
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        padding: 10,
    },
    inputView: {
        borderColor: "black",
        borderWidth: 1,
        width: "100%",
        margin: 10.
    },
    contentButtons:{
        flex:1,
        flexDirection: "row",
        gap:10,
        justifyContent: "space-around",
    }
});