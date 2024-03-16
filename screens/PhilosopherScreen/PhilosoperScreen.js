import React from 'react'
import { View, Pressable, Text, StyleSheet } from 'react-native'
import { useState } from "react";
import DayPhrase from '@components/DayPhrase';

export default function PhilosopherScreen() {

    const [index, setIndex] = useState(0)

    indexChange = () => {
        setIndex((Math.floor(Math.random() * 10)))
    }

  return (
    <View style={styles.container}>
        <DayPhrase index={index} category="philosopher"/>
        <Pressable style={styles.button} onPress={indexChange}>
            <Text style={styles.buttonText}>Nova Frase</Text>
        </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#faa059',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: "12px",
  },
  button: {
    backgroundColor: "#ffdbb7",
    margin: "4%",
    border: "3px solid #965400",
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