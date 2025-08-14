import { CardServices } from '@/components/cardServices';
import { RootStackParamList } from '@/types/rootStackParamList';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useState } from 'react';
import { SafeAreaView, ScrollView, Text, View } from 'react-native';
import { consultationData } from '@/constants/data';

export default function HomeScreen() {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const [consultation, setConsultation] = useState(consultationData);

  return (
    <SafeAreaView className="flex-1">
      <ScrollView className="flex-1 bg-slate-50">
        <View className="m-4 flex-1 mb-10">
          <View className="">
            <Text className="text-3xl font-black text-slate-800">
              Suas Consultas
            </Text>
            <Text className="text-slate-600 mt-1">
              Clique em uma consulta para ver detalhes ou fazer alterações
            </Text>
          </View>
          <View className="mt-5 flex-row flex-wrap justify-around gap-2">
            {consultation.length > 0 ? (
              consultation.map((data) => {
                return <CardServices id={data.id} doctor={data.doctor} key={data.id} date={data.date} localization={data.localization} specialty={data.specialty}/>;
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
