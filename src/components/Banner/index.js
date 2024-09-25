import { useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import PagerView from "react-native-pager-view";


export function Banner() {
    const [page, setPage] = useState(0);

    const onPageSelected = (e) => {
        setPage(e.nativeEvent.position);
    };


    return (
        <View style={styles.container}>
            <PagerView
                initialPage={0}
                style={styles.content} onPageSelected={onPageSelected}
            >
                <View key="1" style={styles.page}>
                   <Image source={require('../../../src/assets/banner1.png')} style={{width: "100%", height:"100%"}} /> 
                </View>
                <View key="2" style={styles.page}>
                   <Image source={require('../../../src/assets/banner2.jpg')} style={{width: "90%", height:"100%"}} /> 
                </View>
                <View key="3" style={styles.page}>
                   <Image source={require('../../../src/assets/banner3.jpg')} style={{width: "90%", height:"100%"}} /> 
                </View>
            </PagerView>
            <View style={styles.bulletContent}>
                <View style={[styles.bullet, page === 0 && styles.activeBullet]}></View>
                <View style={[styles.bullet, page === 1 && styles.activeBullet]}></View>
                <View style={[styles.bullet, page === 2 && styles.activeBullet]}></View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#0b090a"
    },
    content: {
        marginTop: 10,
        height: 190,
        alignItems: "center",
        justifyContent: "center",
        width: "100%"
    },
    page: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#0b090a",
        padding: 10,
    },
    bulletContent: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    bullet: {
        width: 10,
        height: 10,
        borderRadius: 9,
        margin: 10,
        backgroundColor: "#ba181b",
    },
    activeBullet: {
        width: 10,
        height: 10,
        backgroundColor: "#0b090a",
    },
    text: {
        fontSize: 20,
        fontFamily: "Bold",
    }
});