import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from 'screens/HomeScreen/HomeScreen';
import AnimeScreen from 'screens/AnimeScreen/AnimeScreen';

const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='Home'
          component={HomeScreen}
          options={{title: "Home"}}
        />
        <Stack.Screen
          name='AnimePhrase'
          component={AnimeScreen}
          title="AnimePhrases"
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}