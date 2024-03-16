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
            media = {
                photo: info.anime[props.index].photo, 
                phrase: info.anime[props.index].phrase,
                name: info.anime[props.index].name,
                other: info.anime[props.index].anime}
            break;
        case "movie":
            media = {
                photo: info.movie[props.index].photo, 
                phrase: info.movie[props.index].phrase,
                name: info.movie[props.index].name,
                other: info.movie[props.index].year}
            break;
        case "serie":
            media = {
                photo: info.serie[props.index].photo, 
                phrase: info.serie[props.index].phrase,
                name: info.serie[props.index].name,
                other: info.serie[props.index].seasons}
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
            <Image style={styles.userPhoto} source={media.photo}/>
            <View style={styles.userInfoContainer}>
                <Text style={styles.userPhrase}>{media.phrase}</Text>
                <Text style={styles.userInfo}>- {media.name} {abreBarra}{media.other}{fechaBarra}</Text>
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
        width: "250px",
        height: "200px",
        borderRadius: 20,
        border: "3px solid #222"
    },
    userInfoContainer: {
        display: "flex",
        width: 250,
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