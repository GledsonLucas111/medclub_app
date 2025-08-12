import { CardServices } from '@/components/cardServices';
import { RootStackParamList } from '@/types/rootStackParamList';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useLayoutEffect, useState } from 'react';
import { SafeAreaView, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { FontAwesome5, AntDesign, Entypo  } from '@expo/vector-icons';
import { Input } from '@/components/input';
import { consultationData } from '@/constants/data';

export default function HomeScreen() {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const [consultation, setConsultation] = useState(consultationData);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: () => (
        <View className='flex-row'>
          <FontAwesome5 name="calendar-alt" size={24} color="#1d4ed8" />
          <Text className="text-3xl font-bold text-blue-700 ml-2">med</Text>
          <Text className="text-3xl font-bold text-red-600">club</Text>
          <Text className="font-bold">®</Text>
        </View>
      ),
      headerTitleAlign: 'left',
      headerRight: () => (
        <TouchableOpacity className='bg-blue-700 h-10 flex-row justify-center items-center p-2 rounded'> 
        <Entypo name="plus" size={18} color="white" />
        <Text className="text-xl font-bold text-white">Agendar  Consulta</Text>
        </TouchableOpacity>
      )
    });
  }, [navigation]);

  console.log(consultation)
  return (
    <SafeAreaView>
      <ScrollView>
        <View className="m-4 flex-1">
          <View className="">
            <Input
              placeholder="Digite o nome, especialidade ou clínica"
              icon={<AntDesign name="search1" size={18} color="black" />}
            />
          </View>
          <View className="flex-row flex-wrap justify-around">
            {consultation.length > 0 ? (
              consultation.map((data) => {
                return <CardServices doctor={data.doctor} key={data.id} />;
              })
            ) : (
              <View className='flex justify-center items-center'>
                <Text className='text-black'>Sem consultas agendadas</Text>
              </View>
            )}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
