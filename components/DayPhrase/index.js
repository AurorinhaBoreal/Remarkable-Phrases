import { View, Text, Image, StyleSheet, Button } from "react-native-web";
import Sagara from "@assets/Sagara.webp"

export default function DayPhrase(props) {
    let userPhoto = [{Sagara},];
    let userPhrase = ['a', 'b', 'c','"É melhor não subestimar os fracos de hoje, pois eles serão os fortes de amanhã."'];
    let userName = ["Sagara Sanosuke"];
    let userAnime = ["Samurai X"]

    return(
        <View style={styles.userContainer}>
            <Image style={styles.userPhoto} source={Sagara}/>
            <Text style={styles.userPhrase}>{userPhrase[props.index]}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    userContainer: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "rgba(0, 0, 0, 0.4)"
    },
    userPhoto: {
        width: "200px",
        height: "200px",
        borderRadius: 20,
    },
    userPhrase: {
        marginTop: 10,
        marginRight: 40,
        marginLeft: 40,
        fontSize: "16px",
        fontWeight: "bolder",
        color: "white",
    },
    button: {
        backgroundColor: "blue"
    }
});