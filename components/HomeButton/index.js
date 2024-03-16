import { Text, View, Pressable, StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import React from 'react'

export default function HomeButton(props) {
    const navigation = useNavigation();

    let Page = props.page;

    return (
        <View>
            <Pressable style={[styles.button, {backgroundColor: "#ffc183"}]} onPress={() => navigation.navigate(Page)} > 
                <Text style={styles.buttonText}>{props.category}</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    button: {
        alignSelf: "center",
        paddingHorizontal: 10,
        paddingVertical: 4,
        borderRadius: 10,
        width: 82,
    },
    buttonText: {
        textAlign: "center",
        fontWeight: "bold",
        fontSize: 16,
    }
})



