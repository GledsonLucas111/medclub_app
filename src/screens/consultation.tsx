import { useState } from 'react';
import { Alert, SafeAreaView, ScrollView, Text, View } from 'react-native';
import { AntDesign, FontAwesome5, FontAwesome6, Feather  } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '@/types/rootStackParamList';
import { Dropdown } from 'react-native-element-dropdown';

import DatePicker from '@/components/datePicker';
import TimePicker from '@/components/timePicker';

import { Button } from '@/components/button';
import { Input } from '@/components/input';

import { doctors, localizationData } from '@/constants/data';
import { Doctor } from '@/types/data';
import { useConsultation } from '@/context/ConsultationContext';

export default function ConsultationScreen() {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const [dateSelected, setDateSelected] = useState<Date | null>(null);
  const [timeSelected, setTimeSelected] = useState<{ hour: number } | null>(null);
  const [selected, setSelected] = useState<Doctor | null>(null);
  const specialty = selected ? selected?.specialty : 'Selecione um médico';
  const [localization, setLocalization] = useState<{id: string, address: string} | null>(null);
  const {addConsultation} = useConsultation();

  const submitForm = () => {
    addConsultation({
      id: Date.now(),
      doctor: selected?.name ?? '',
      specialty: specialty,
      date: dateSelected ?? '',
      hour: timeSelected?.hour ?? 0,
      localization: localization?.address ?? '',
    })
  }
  const handleSave = () => {
    if (dateSelected && timeSelected && selected && localization) {
      submitForm();
      navigation.goBack();
    } else {
      Alert.alert('Por favor, preencha todos os campos obrigatórios.');
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
              <DatePicker onChangeDate={setDateSelected} />
              <Text className="pb-2 text-lg text-slate-800">Horário *</Text>
              <TimePicker selectedDate={dateSelected ?? undefined} onChangeTime={setTimeSelected} />
            </View>

            <View className="">
              <View className="flex-row items-center gap-2">
                <FontAwesome6 name="user-doctor" size={18} color="#16a34a" />
                <Text className="text-2xl font-semibold text-slate-800">Médico</Text>
              </View>
              <Text className="py-2 text-lg text-slate-800">Nome do Médico *</Text>
              <View className="rounded-lg border border-slate-200 bg-white px-4 py-3 shadow">
                <Dropdown
                  data={doctors}
                  labelField="name"
                  valueField="id"
                  value={selected}
                  placeholder="Selecione um médico"
                  onChange={(item) => setSelected(item)}
                />
              </View>
              <Text className="py-2 text-lg text-slate-800">Especialidade:</Text>
              <Input value={specialty} editable={false} />
            </View>
            <View className="">
              <View className="flex-row items-center gap-2">
                <FontAwesome5 name="map-marker-alt" size={18} color="#ea580c" />
                <Text className="text-2xl font-semibold text-slate-800">Localização</Text>
              </View>
              <Text className="py-2 text-lg text-slate-800">Endereço da Consulta *</Text>
              <View className="rounded-lg border border-slate-200 bg-white px-4 py-3 shadow">
                <Dropdown
                  data={localizationData}
                  labelField="address"
                  valueField="id"
                  value={localization}
                  placeholder="Selecione uma localização"
                  onChange={(item) => setLocalization(item)}
                />
              </View>
            </View>
            <View className='flex gap-4'>
            <Text className="border-t-[1px] border-slate-300"></Text>
              <Button
                title="Cancelar"
                onPress={() => {navigation.goBack()}}
                buttonStyle="w-full rounded py-3 border border-slate-400"
              />
              <Button
                onPress={handleSave}
                icon={<Feather name="save" size={20} color="white" />}
                title="Agendar Consulta"
                buttonStyle="w-full rounded py-3 bg-blue-600"
                textStyle='text-white text-lg font-semibold ml-2'
              />
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
