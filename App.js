import { StyleSheet, Text, View, Pressable } from 'react-native';
import { useState } from "react";
import DayPhrase from './components/DayPhrase';

export default function App() {
  const [indexChange, setIndexChange] = useState(0)
  return (
    <View style={styles.container}>
      <Text>BATATA</Text>
      <DayPhrase index={0} />
      <Pressable style={styles.button} />
    </View>
  );
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
    backgroundColor: "red",
    width: 200,
    height: 20,
  }
});
