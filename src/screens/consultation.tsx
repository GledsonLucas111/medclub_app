import { Button } from '@/components/button';
import { SafeAreaView, ScrollView, Text, View } from 'react-native';
import { AntDesign, FontAwesome5, FontAwesome6 } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '@/types/rootStackParamList';
import DatePicker from '@/components/datePicker';
import { Input } from '@/components/input';

export default function ConsultationScreen() {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <SafeAreaView className="flex-1">
      <ScrollView className="flex-1 bg-slate-50">
        <View className="mx-4 my-10  flex-1 gap-4">
          <View className="flex items-start">
            <Button
              onPress={() => navigation.goBack()}
              title="Voltar"
              icon={<AntDesign name="arrowleft" size={20} color="#475569" />}
              textStyle="text-xl text-slate-600"
            />
          </View>
          <View className="flex gap-10 rounded-lg border border-slate-200 bg-white px-4 py-8 shadow-sm">
            <View>
              <Text className="text-3xl font-black text-slate-800">Agendar Nova Consulta</Text>
              <Text className="mt-1 text-lg text-slate-600">
                Preencha os detalhes da consulta para agendar sua consulta médica.
              </Text>
            </View>

            <View className="">
              <View className="flex-row items-center gap-2">
                <FontAwesome5 name="calendar-alt" size={18} color="#2563eb" />
                <Text className="text-2xl font-semibold text-slate-800">Data e Horário</Text>
              </View>
              <Text className="py-2 text-lg text-slate-800">Data da Consulta *</Text>
              <DatePicker />
            </View>

            <View className="">
              <View className="flex-row items-center gap-2">
                <FontAwesome6 name="user-doctor" size={18} color="#16a34a" />

                <Text className="text-2xl font-semibold text-slate-800">Médico</Text>
              </View>
              <Text className="py-2 text-lg text-slate-800">Nome do Médico *</Text>
            </View>
          </View>
          <Text className="text-center text-lg text-slate-600">
            * Campos obrigatórios. Certifique-se de preencher todas as informações necessárias.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
