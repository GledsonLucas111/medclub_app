import { CardServices } from '@/components/cardServices';
import { RootStackParamList } from '@/types/rootStackParamList';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { SafeAreaView, ScrollView, Text, View } from 'react-native';
import { useConsultation } from '@/context/ConsultationContext';

export default function HomeScreen() {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const { consultation } = useConsultation();
  
  return (
    <SafeAreaView className="flex-1">
      <ScrollView className="flex-1 bg-slate-50">
        <View className="m-4 mb-10 flex-1">
          <View className="">
            <Text className="text-3xl font-black text-slate-800">Suas Consultas</Text>
            <Text className="mt-1 text-slate-600">
              Clique em uma consulta para ver detalhes ou fazer alterações
            </Text>
          </View>
          <View className="mt-5 flex-row flex-wrap justify-around gap-2">
            {consultation.length > 0 ? (
              consultation.map((data) => {
                return (
                  <CardServices
                    id={data.id}
                    key={data.id}
                    doctor={data.doctor}
                    date={data.date}
                    localization={data.localization}
                    specialty={data.specialty}
                    hour={data.hour}
                    onPressDetail={() => {
                      const serializableData = {
                        ...data,
                        date: typeof data.date === 'string' ? data.date : data.date.toISOString(),
                      };
                      navigation.navigate('Detail', { data: serializableData });
                    }}
                    onPressDelete={() => console.log('Delete consultation', data.id)}
                  />
                );
              })
            ) : (
              <View className="flex items-center justify-center">
                <Text className="text-black">Sem consultas agendadas</Text>
              </View>
            )}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
