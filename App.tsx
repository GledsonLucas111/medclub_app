import './global.css';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './src/screens/home';
import ConsultationScreen from './src/screens/consultation';
import DetailScreen from './src/screens/detail';

import { View, Text } from 'react-native';
import { FontAwesome5, Entypo } from '@expo/vector-icons';
import { useNavigation, NavigationContainer } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RootStackParamList } from './src/types/rootStackParamList';
import { useFonts } from 'expo-font';
import { Button } from '@/components/button';
import { ConsultationProvider } from '@/context/ConsultationContext';


const Stack = createNativeStackNavigator();


function HeaderRightButton() {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  return (
    <Button
      onPress={() => navigation.navigate('Consultation')}
      title="Agendar Consulta"
      textStyle="text-white text-lg font-semibold ml-2"
      icon={<Entypo name="plus" size={18} color="white" />}
      buttonStyle="bg-blue-600 px-4 py-2 rounded"
    />
  );
}

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
      <ConsultationProvider>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerTitle: () => (
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <FontAwesome5 name="calendar-alt" size={24} color="#2563eb" />
                  <Text
                    style={{ marginLeft: 8, fontSize: 24, fontWeight: 'bold', color: '#2563eb' }}>
                    med
                  </Text>
                  <Text style={{ fontSize: 24, fontWeight: 'bold', color: '#dc2626' }}>club</Text>
                  <Text style={{ fontWeight: 'bold' }}>®</Text>
                </View>
              ),
              headerTitleAlign: 'left',
              headerRight: () => <HeaderRightButton />,
            }}>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen
              name="Consultation"
              component={ConsultationScreen}
              options={{ headerBackVisible: false }}
            />
            <Stack.Screen
              name="Detail"
              component={DetailScreen}
              options={{ headerBackVisible: false }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </ConsultationProvider>
    </SafeAreaProvider>
  );
}
