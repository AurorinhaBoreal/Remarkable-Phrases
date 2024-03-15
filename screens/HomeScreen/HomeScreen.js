import React from 'react'
import { StyleSheet, View, Text, Pressable, Image } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import dayPhrase from "@assets/dayPhrase.jpeg"

export default function HomeScreen({navigation}) {
  return (
    <View>
        <Image style={styles.header} source={dayPhrase}/>
        <Pressable onPress={() => navigation.navigate('AnimePhrase')} > 
            <Text>Anime Phrases</Text>
        </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
    header: {
        width: 300,
        height: 70,
        marginBottom: 30,
        border: "3px solid #044",
        borderRadius: 20,
        borderEndEndRadius: 10,
        borderEndStartRadius: 10,
      },
});
  