import { CardServices } from '@/components/cardServices';
import { RootStackParamList } from '@/types/rootStackParamList';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useLayoutEffect } from 'react';
import { SafeAreaView, ScrollView, Text, View } from 'react-native';
import { FontAwesome6 } from '@expo/vector-icons';

export default function HomeScreen() {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: () => (
        <View style={{ flexDirection: 'row' }}>
          <Text className="text-3xl font-bold text-blue-700">med</Text>
          <Text className="text-3xl font-bold text-red-600">club</Text>
          <Text className="font-bold">®</Text>
        </View>
      ),
      headerTitleAlign: 'center',
    });
  }, [navigation]);

  return (
    <SafeAreaView>
      <ScrollView>
        <View className="flex-1">
          <View className='m-4 flex-row flex-wrap justify-around'>
            <CardServices
              name="Consultas"
              icon={<FontAwesome6 name="stethoscope" size={40} color="red" />}
            />
            <CardServices
              name="Consultas"
              icon={<FontAwesome6 name="stethoscope" size={40} color="red" />}
            />
            <CardServices
              name="Consultas"
              icon={<FontAwesome6 name="stethoscope" size={40} color="red" />}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
