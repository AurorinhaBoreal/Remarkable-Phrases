import React from 'react'
import { View, Image, Pressable, Text, StyleSheet } from 'react-native'
import { useState } from "react";
import DayPhrase from '@components/DayPhrase';

export default function AnimeScreen({navigation}) {

    const [index, setIndex] = useState(0)

    indexChange = () => {
        setIndex((Math.floor(Math.random() * 10)))
    }

  return (
    <View style={styles.container}>
        <DayPhrase index={index} />
        <Pressable style={styles.button} onPress={indexChange}>
            <Text style={styles.buttonText}>Nova Frase</Text>
        </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#477',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: "12px",
  },
  button: {
    backgroundColor: "#4DD",
    margin: "4%",
    border: "3px solid #044",
    borderRadius: 20,
    width: 150,
    height: 30,
  },
  buttonText: {
    fontSize: "18px",
    textAlign: "center",
    fontWeight: "bolder"
  }
});
