import { CardServices } from '@/components/cardServices';
import { RootStackParamList } from '@/types/rootStackParamList';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { SafeAreaView, ScrollView, Text, View } from 'react-native';
import { useConsultation } from '@/context/ConsultationContext';
import CustomAlert from '@/components/customAlert';
import { useState } from 'react';

export default function HomeScreen() {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const { consultation, deleteConsultation } = useConsultation();

  const [alertVisible, setAlertVisible] = useState(false);
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const handleDeletePress = (id: number) => {
    if (id !== null) {
      setSelectedId(id);
    }
    setAlertVisible(true);
  };

  const handleCancel = () => {
    setAlertVisible(false);
  };

  const handleConfirm = () => {
    if (selectedId !== null) {
      deleteConsultation(selectedId);
      setSelectedId(null);
    }
    setAlertVisible(false);
  };

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
                    onPressDelete={() => handleDeletePress(data.id)}
                  />
                );
              })
            ) : (
              <View className="flex items-center justify-center">
                <Text className="text-slate-800 text-xl">Você ainda não possui consultas agendadas.</Text>
              </View>
            )}
          </View>
        </View>
      </ScrollView>
      <CustomAlert
        title="Confirmar Exclusão"
        message="Tem certeza que deseja excluir esta consulta? Esta ação não pode ser desfeita."
        titleButtonConfirm="Excluir Consulta"
        onCancel={handleCancel}
        onConfirm={handleConfirm}
        visible={alertVisible}
      />
    </SafeAreaView>
  );
}
