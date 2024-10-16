import { router } from "expo-router";
import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View, TouchableOpacity } from "react-native";
import { Ionicons } from '@expo/vector-icons'; 

export default function Payments() {
    const [valor, setValor] = useState("0,00");

    return (
        <View style={styles.content}>
            <View style={styles.inputView}>
                <Ionicons name="wallet" size={24} color="black" />
                <TextInput
                    placeholder="Valor"
                    keyboardType="decimal-pad"
                    style={styles.inputValor}
                    value={valor}
                    onChangeText={setValor}
                />
            </View>
            <View style={styles.inputView}>
                <TextInput style={styles.input} placeholder="Usuário" />
            </View>
            <View style={styles.inputView}>
                <TextInput style={styles.input} placeholder="Data" />
            </View>
            <View style={styles.inputView}>
                <TextInput style={styles.input} placeholder="Observações" multiline />
            </View>
            <View style={styles.contentButtons}>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Salvar</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Continuar</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => router.back()}>
                    <Text style={styles.buttonText}>Cancelar</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    content: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 10,
        backgroundColor: "#f8f9fa", 
    },
    input: {
        height: 40,
        fontSize: 16,
        color: "#343a40",
    },
    contentButtons: {
        flexDirection: "row",
        justifyContent: "space-around",
        width: "100%",
        marginTop: 20,
    },
    button: {
        backgroundColor: "#6c757d", 
        padding: 10,
        borderRadius: 8,
        width: "30%",
        alignItems: "center",
    },
    buttonText: {
        color: "#ffffff", 
        fontWeight: "bold",
    },
    inputView: {
        borderColor: "#343a40", 
        borderWidth: 1,
        borderRadius: 8, 
        width: "100%",
        margin:10,
        justifyContent:"center",
        alignItems:"center",
        flexDirection:"row",
    },
    inputValor: {
        textAlign: "right", 
        padding: 10,
        flex: 1,
    },
});
