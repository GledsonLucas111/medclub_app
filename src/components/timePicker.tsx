import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Modal, ScrollView } from 'react-native';
import { Feather } from '@expo/vector-icons';

type TimePickerProps = {
  selectedDate?: Date;
  onChangeTime?: (time: { hour: number } | null) => void;
};

export default function TimePicker({ selectedDate, onChangeTime }: TimePickerProps) {
  const now = new Date();
  const [hour, setHour] = useState<number | null>(null);
  const [showModal, setShowModal] = useState(false);

  const date = selectedDate || now;
  const isToday =
    date.getFullYear() === now.getFullYear() &&
    date.getMonth() === now.getMonth() &&
    date.getDate() === now.getDate();

  const formatTime = (h: number) => {
    return `${h.toString().padStart(2, '0')}`;
  };

  const openModal = () => {
    if (hour === null) {
      setHour(hours[0]);
    }
    setShowModal(true);
  };

  const confirmTime = () => {
    setShowModal(false);
    if (onChangeTime && hour !== null) {
      onChangeTime({ hour });
    }
  };

  const cancelTime = () => {
    setShowModal(false);
  };

  const hours = isToday
    ? Array.from({ length: 24 - now.getHours() }, (_, i) => i + now.getHours())
    : Array.from({ length: 24 }, (_, i) => i);

  const renderPicker = (
    items: number[],
    selectedValue: number,
    onValueChange: (value: number) => void,
    unit: string
  ) => {
    return (
      <View className="mx-1 flex-1">
        <Text className="mb-2 text-center text-sm font-semibold text-slate-600">{unit}</Text>
        <ScrollView className="flex-1 rounded-lg bg-slate-100" showsVerticalScrollIndicator={false}>
          {items.map((item) => {
            const isSelected = item === selectedValue;
            return (
              <TouchableOpacity
                key={item}
                className={`items-center px-2 py-3 ${isSelected ? 'mx-1 rounded-md bg-blue-600' : ''}`}
                onPress={() => onValueChange(item)}>
                <Text
                  className={`text-base ${isSelected ? 'font-semibold text-white' : 'text-slate-800'}`}>
                  {item.toString().padStart(2, '0')}:00
                </Text>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      </View>
    );
  };
  
  return (
    <View className="flex-1">
      <TouchableOpacity
        onPress={openModal}
        activeOpacity={0.8}
        className="mb-5 flex-row items-center rounded-lg border border-slate-200 bg-white px-4 py-3 shadow">
        <Text className="ml-3 flex-1 text-lg text-slate-800">
          {hour === null ? 'selecione uma hora' : `${formatTime(hour)}:00`}
        </Text>
        <Feather name="clock" size={22} color="#1e293b" />
      </TouchableOpacity>
      <Modal visible={showModal} transparent animationType="slide">
        <View className="flex-1 items-center justify-center bg-black/50">
          <View className="max-h-[80%] w-11/12 rounded-2xl bg-white p-5">
            <Text className="mb-5 text-center text-lg font-bold text-slate-800">
              Selecionar Horário
            </Text>
            <View className="h-52 flex-row">{renderPicker(hours, hour ?? hours[0], setHour, 'Hora')}</View>
            <View className="mt-5 flex-row justify-around">
              <TouchableOpacity
                onPress={cancelTime}
                className="mx-1 flex-1 items-center rounded-lg bg-slate-200 px-6 py-3">
                <Text className="text-base font-semibold text-slate-700">Cancelar</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={confirmTime}
                className="mx-1 flex-1 items-center rounded-lg bg-blue-600 px-6 py-3">
                <Text className="text-base font-semibold text-white">Confirmar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}
