import { router } from "expo-router";
import { Button, Text, View, StyleSheet, Image } from "react-native";

export default function About() {
    return (
        <View style={styles.container}>
            <View style={styles.box}>
                <Image
                    source={{ uri: 'https://i.pinimg.com/564x/dc/b7/fe/dcb7fed33df65da31072a028bd7993ea.jpg' }}
                    style={styles.image}
                />
                <Text style={styles.title}>Sobre</Text>
                <Text style={styles.description}>
                Olá! Meu nome é Brenda, tenho 16 anos e sou a criadora deste app e tenho aulas na escola ETEC Prof. Milton Gazzetti. Este app está sendo desenvolvido como trabalho avaliativo.
                </Text>
            </View>

            <View style={styles.box}>
                <Text style={styles.subTitle}>Finalidade</Text>
                <Text style={styles.description}>
                Um lugar acessível para manter a ordem dos episódios que você já assistiu, colocar sua opinião e dar notas! Assim como para ver todas as temporadas e quantos episódios elas têm.
                </Text>
                <Button tittle="voltar" onPress={() => router.back()} color="green" />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#000",
        padding: 20,
    },
    box: {
        width: "90%",
        padding: 20,
        backgroundColor: "#a4161a",
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
        elevation: 5,
        alignItems: "center",
        marginBottom: 20,
    },
    image: {
        width: 150,
        height: 150,
        borderRadius: 75,
        marginBottom: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 10,
        color: "#161a1d",
    },
    subTitle: {
        fontSize: 20,
        fontWeight: "600",
        marginBottom: 10,
        color: "#161a1d",
    },
    description: {
        fontSize: 16,
        color: "#161a1d",
        textAlign: "center",
        marginBottom: 20,
    },
});
