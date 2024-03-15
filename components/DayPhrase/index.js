import { View, Text, Image, StyleSheet, Button } from "react-native-web";
import * as info from "data/animeInfo.json"

export default function DayPhrase(props) {
    let abreBarra = "("
    let fechaBarra = ")"
    
    return(
        <View style={styles.userContainer}>
            <Image style={styles.userPhoto} source={info.anime[props.index].photo}/>
            <View style={styles.userInfoContainer}>
                <Text style={styles.userPhrase}>{info.anime[props.index].phrase}</Text>
                <Text style={styles.userInfo}>- {info.anime[props.index].name} {abreBarra}{info.anime[props.index].anime}{fechaBarra}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    userContainer: {
        display: "flex",
        width: "300px",
        borderRadius: 20,
        padding: "5%",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "rgba(0, 0, 0, 0.4)"
    },
    userPhoto: {
        width: "200px",
        height: "200px",
        borderRadius: 20,
    },
    userInfoContainer: {
        display: "flex",
        width: 200,
    },
    userPhrase: {
        marginTop: 10,
        textAlign: "center",
        fontSize: "16px",
        fontWeight: "bolder",
        color: "white",
    },
    userInfo: {
        marginTop: 6,
        textAlign: "right",
        fontSize: "12px",
        fontWeight: "bolder",
        color: "white",
    }
});