import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Modal, ScrollView, Dimensions } from 'react-native';
import { Feather } from '@expo/vector-icons';

const { width } = Dimensions.get('window');
interface DatePickerProps {
  onChangeDate: (date: Date | null) => void;
}

export default function CustomDatePickerPTBR({ onChangeDate }: DatePickerProps) {
  const [date, setDate] = useState(new Date());
  const [showModal, setShowModal] = useState(false);
  const [selectedDay, setSelectedDay] = useState(date.getDate());
  const [selectedMonth, setSelectedMonth] = useState(date.getMonth());
  const [selectedYear, setSelectedYear] = useState(date.getFullYear());

  const months = [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro',
  ];

  const formatDateToPtBR = (date: Date) => {
    return date.toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    });
  };

  const getDaysInMonth = (month: number, year: number) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const openModal = () => {
    setSelectedDay(date.getDate());
    setSelectedMonth(date.getMonth());
    setSelectedYear(date.getFullYear());
    setShowModal(true);
  };

  const confirmDate = () => {
    const newDate = new Date(selectedYear, selectedMonth, selectedDay);
    setDate(newDate);
    setShowModal(false);
    onChangeDate(newDate); 
  };
  const cancelDate = () => {
    setShowModal(false);
  };

  const renderPicker = (
    items: any[],
    selectedValue: number,
    onValueChange: {
      (value: React.SetStateAction<number>): void;
      (value: React.SetStateAction<number>): void;
      (value: React.SetStateAction<number>): void;
      (arg0: any): void;
    },
    unit:
      | string
      | number
      | bigint
      | boolean
      | React.ReactElement<unknown, string | React.JSXElementConstructor<any>>
      | Iterable<React.ReactNode>
      | Promise<
          | string
          | number
          | bigint
          | boolean
          | React.ReactPortal
          | React.ReactElement<unknown, string | React.JSXElementConstructor<any>>
          | Iterable<React.ReactNode>
          | null
          | undefined
        >
      | null
      | undefined
  ) => {
    return (
      <View className="mx-1 flex-1">
        <Text className="mb-2 text-center text-sm font-semibold text-slate-600">{unit}</Text>
        <ScrollView className="flex-1 rounded-lg bg-slate-100" showsVerticalScrollIndicator={false}>
          {items.map((item, index) => {
            const isSelected = (typeof item === 'string' ? index : item) === selectedValue;
            return (
              <TouchableOpacity
                key={index}
                className={`items-center px-2 py-3 ${isSelected ? 'mx-1 rounded-md bg-blue-600' : ''}`}
                onPress={() => {
                  const value = typeof item === 'string' ? index : item;
                  onValueChange(value);
                }}>
                <Text
                  className={`text-base ${isSelected ? 'font-semibold text-white' : 'text-slate-800'}`}>
                  {item}
                </Text>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      </View>
    );
  };

  const today = new Date();

  const generateYears = () => {
    const currentYear = today.getFullYear();
    const years = [];
    for (let year = currentYear; year <= currentYear + 10; year++) {
      years.push(year);
    }
    return years;
  };

  const generateMonths = () => {
    if (selectedYear === today.getFullYear()) {
      return months.slice(today.getMonth());
    }
    return months;
  };

  const getMonthIndex = () => {
    if (selectedYear === today.getFullYear()) {
      return selectedMonth - today.getMonth();
    }
    return selectedMonth;
  };

  const generateDays = () => {
    const realMonth =
      selectedYear === today.getFullYear() ? today.getMonth() + getMonthIndex() : selectedMonth;
    const daysInMonth = getDaysInMonth(realMonth, selectedYear);
    const days = [];
    let startDay = 1;
    if (selectedYear === today.getFullYear() && realMonth === today.getMonth()) {
      startDay = today.getDate();
    }
    for (let day = startDay; day <= daysInMonth; day++) {
      days.push(day);
    }
    return days;
  };

  return (
    <View className="flex-1 justify-center">
      <TouchableOpacity
        onPress={openModal}
        activeOpacity={0.8}
        className="mb-5 flex-row items-center rounded-lg border border-slate-200 bg-white px-4 py-3 shadow">
        <Text className="ml-3 flex-1 text-lg text-slate-800">{formatDateToPtBR(date)}</Text>
        <Feather name="calendar" size={22} color="#1e293b" />
      </TouchableOpacity>
      <Modal visible={showModal} transparent animationType="slide">
        <View className="flex-1 items-center justify-center bg-black/50">
          <View style={{ width: width * 0.9 }} className="max-h-[80%] rounded-2xl bg-white p-5">
            <Text className="mb-5 text-center text-lg font-bold text-slate-800">
              Selecionar Data
            </Text>
            <View className="h-52 flex-row">
              {renderPicker(generateDays(), selectedDay, setSelectedDay, 'Dia')}
              {renderPicker(
                generateMonths(),
                getMonthIndex(),
                (idx) => {
                  if (selectedYear === today.getFullYear()) {
                    setSelectedMonth(today.getMonth() + idx);
                  } else {
                    setSelectedMonth(idx);
                  }
                },
                'Mês'
              )}
              {renderPicker(generateYears(), selectedYear, setSelectedYear, 'Ano')}
            </View>
            <View className="mt-5 flex-row justify-around">
              <TouchableOpacity
                onPress={cancelDate}
                className="mx-1 flex-1 items-center rounded-lg bg-slate-200 px-6 py-3">
                <Text className="text-base font-semibold text-slate-700">Cancelar</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={confirmDate}
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
