// serie  \\  || 

import React from 'react'
import { View, Pressable, Text, StyleSheet } from 'react-native'
import { useState } from "react";
import DayPhrase from '@components/DayPhrase';

export default function SerieScreen() {

    const [index, setIndex] = useState(0)

    indexChange = () => {
        setIndex((Math.floor(Math.random() * 10)))
    }

  return (
    <View style={styles.container}>
        <DayPhrase index={index} category="serie"/>
        <Pressable style={styles.button} onPress={indexChange}>
            <Text style={styles.buttonText}>Nova Frase</Text>
        </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#faf359',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: "12px",
  },
  button: {
    backgroundColor: "#fffcb7",
    margin: "4%",
    border: "3px solid #968f00",
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