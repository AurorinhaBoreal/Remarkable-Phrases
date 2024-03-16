import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import HomeButton from '../../components/HomeButton'
export default function HomeScreen() {

    return (
        <View style={styles.home}>
            <Text style={styles.title}>Frases Marcantes</Text>
            <Text style={styles.desc}>Bem-Vindo! Este aplicativo tem o simples intuito de entreterimento. Nele você poderà visualizar frases marcantes de séries, filmes, animes ou filósofos.</Text>
            <Text style={styles.select}>Selecione a categoria desejada:</Text>
            <View style={styles.buttonContainer}>
                <HomeButton 
                    page="AnimePhrase"
                    category="Animes"
                />
                <HomeButton 
                    page="MoviePhrase"
                    category="Filmes"
                />
                <HomeButton 
                    page="SeriePhrase"
                    category="Series"
                />
                <HomeButton 
                    page="PhilosopherPhrase"
                    category="Filósofos"
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    home: {
        height: "100%",
        alignItems: "center",
        textAlign: "center",
        backgroundColor: "#444",
        color: "#444",
    },
    title: {
        marginTop: 50,
        fontSize: 30,
        fontFamily: "MontSerrat_Regular",
        color: "white",
        textDecorationLine: "underline"
    },
    desc: {
        textAlign: "center",
        margin: 20,
        fontFamily: "Montserrat-Regular",
        fontWeight: "bold", 
        color: "white",
    },
    select: {
        margin: 40,
        marginBottom: 5,
        fontFamily: "Montserrat-Regular",
        fontWeight: "700",
        color: "white",
    },
    buttonContainer: {
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center",
        width: 300,
        gap: 5,        
    }
});
  