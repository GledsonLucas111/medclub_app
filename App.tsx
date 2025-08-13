import './global.css';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/home';
import { NavigationContainer } from '@react-navigation/native';
import { useFonts } from 'expo-font';
const Stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    OpenSans400: require('./assets/fonts/OpenSans-Regular.ttf'),
    OpenSans500: require('./assets/fonts/OpenSans-Medium.ttf'),
    OpenSans600: require('./assets/fonts/OpenSans-SemiBold.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }
  
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
