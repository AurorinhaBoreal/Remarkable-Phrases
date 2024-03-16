import { View, Text, Image, StyleSheet } from "react-native-web";
import { useEffect } from "react/cjs/react.production.min";
import info from "data/infoPhrases";
  
export default function DayPhrase(props) {
    let abreBarra = "("
    let fechaBarra = ")"
    let anime;
    let movie;
    let serie;
    let philosopher;

    switch (props.category) {
        case "anime":
            console.log("SASKEEEEEEEEEEEEEEEEE")
            anime = {
                photo: info.anime[props.index].photo, 
                phrase: info.anime[props.index].phrase,
                name: info.anime[props.index].name,
                other: info.anime[props.index].anime}
            break;
        case "movie":
            console.log("Teu nome!")
            break;
        case "serie":
            console.log("A CORUJA TEM CASA :0")
            break;
        case "philosopher":
            console.log("Não sei React Native")
            break;
        default:
            console.log("Saiuuuu")
            break;
    }

    return(
        <View style={styles.userContainer}>
            <Image style={styles.userPhoto} source={anime.photo}/>
            <View style={styles.userInfoContainer}>
                <Text style={styles.userPhrase}>{anime.phrase}</Text>
                <Text style={styles.userInfo}>- {anime.name} {abreBarra}{anime.other}{fechaBarra}</Text>
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