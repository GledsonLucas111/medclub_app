import { Button } from '@/components/button';
import { SafeAreaView, ScrollView, Text, View } from 'react-native';
import {
  AntDesign,
  Feather,
  FontAwesome5,
  EvilIcons,
  FontAwesome6,
  FontAwesome,
} from '@expo/vector-icons';
import { format, parseISO } from 'date-fns';
import { ptBR } from 'date-fns/locale';

export default function DetailScreen({ route, navigation }: any) {
  const { data } = route.params;

  const formatDate = (date: string | Date) => {
    try {
      const parsedDate = typeof date === 'string' ? parseISO(date) : date;
      return format(parsedDate, "dd 'de' MMMM, yyyy", { locale: ptBR });
    } catch {
      return typeof date === 'string' ? date : date.toString();
    }
  };

  return (
    <SafeAreaView className="flex-1">
      <ScrollView className="flex-1 bg-slate-50">
        <View className="mx-4 my-10  flex-1 gap-6">
          <View className="flex items-start">
            <Button
              onPress={() => navigation.goBack()}
              title="Voltar"
              icon={<AntDesign name="arrowleft" size={20} color="#475569" />}
              textStyle="text-xl text-slate-600 ml-2"
            />
          </View>
          <View className="flex gap-5 rounded-lg border border-slate-200 bg-white px-4 py-8 shadow-sm">
            <View>
              <Text className="text-3xl font-black text-slate-800">Detalhes da Consulta</Text>
              <Text className="mt-1 text-lg text-slate-600">
                Informações completas sobre sua consulta médica.
              </Text>
            </View>
            <View className="flex gap-6">
              <View className="flex-row items-center gap-4">
                <View className="rounded-lg bg-blue-200 p-3">
                  <FontAwesome5 name="calendar-alt" size={20} color="#2563eb" />
                </View>
                <View>
                  <Text className="text-lg text-slate-600">DATA</Text>
                  <Text className="text-xl font-black tracking-wide text-slate-800">
                    {formatDate(data.date)}
                  </Text>
                </View>
              </View>
              <View className="flex-row items-center gap-4">
                <View className="rounded-lg bg-blue-200 p-3">
                  <EvilIcons name="clock" size={20} color="#2563eb" />
                </View>
                <View>
                  <Text className="text-lg text-slate-600">HORÁRIO</Text>
                  <Text className="text-xl font-black tracking-wide text-slate-800">
                    {data.hour}:00
                  </Text>
                </View>
              </View>
              <Text className="border-t-[1px] border-slate-200"></Text>
            </View>
            <View className="flex gap-6">
              <View className="flex-row items-center gap-4">
                <View className="rounded-lg bg-green-200 p-3">
                  <FontAwesome6 name="user-doctor" size={20} color="#16a34a" />
                </View>
                <View>
                  <Text className="text-lg text-slate-600">MÉDICO</Text>
                  <Text className="text-xl font-black tracking-wide text-slate-800">
                    {data.doctor}
                  </Text>
                </View>
              </View>
              <View className="flex-row items-center gap-4">
                <View className="rounded-lg bg-indigo-200 p-3">
                  <FontAwesome name="stethoscope" size={20} color="#4338ca" />
                </View>
                <View>
                  <Text className="text-lg text-slate-600 ">ESPECIALIDADE</Text>
                  <Text className="text-xl font-black tracking-wide text-slate-800">
                    {data.specialty}
                  </Text>
                </View>
              </View>
              <Text className="border-t-[1px] border-slate-200"></Text>
            </View>
            <View className="flex gap-6">
              <View className="flex-row items-center gap-4">
                <View className="rounded-lg bg-orange-100 p-3">
                  <FontAwesome5 name="map-marker-alt" size={20} color="#ea580c" />
                </View>
                <View>
                  <Text className="text-lg text-slate-600">LOCALIZAÇÃO</Text>
                  <Text className="text-xl font-black tracking-wide text-slate-800">
                    {data.localization}
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <View className="flex">
            <Text className="border-t-[1px] border-slate-200"></Text>
            <Button
              onPress={() => console.log('Delete consultation')}
              icon={<Feather name="trash-2" size={18} color="red" />}
              title="Excluir consulta"
              buttonStyle="w-full rounded py-3 border border-red-400"
              textStyle="text-red-600 text-lg ml-2"
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
