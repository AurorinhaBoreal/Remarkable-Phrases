import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from 'screens/HomeScreen/HomeScreen';
import AnimeScreen from 'screens/AnimeScreen/AnimeScreen';
import MovieScreen from 'screens/MovieScreen/MovieScreen';
import SerieScreen from 'screens/SerieScreen/SerieScreen';
import PhilosopherScreen from 'screens/PhilosopherScreen/PhilosoperScreen';

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
        <Stack.Screen
          name='MoviePhrase'
          component={MovieScreen}
          title="MoviePhrases"
        />
        <Stack.Screen
          name='SeriePhrase'
          component={SerieScreen}
          title="SeriePhrases"
        />
        <Stack.Screen
          name='PhilosopherPhrase'
          component={PhilosopherScreen}
          title="PhilosopherPhrases"
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
