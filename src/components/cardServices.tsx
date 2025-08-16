import { ConsultationType } from '@/types/data';
import { Text, View } from 'react-native';
import { FontAwesome5, Fontisto, EvilIcons, FontAwesome6, Feather } from '@expo/vector-icons';
import { format, parseISO } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { Button } from './button';

type Props = ConsultationType & {
  onPressDetail: () => void;
  onPressDelete: () => void;
};

export function CardServices({ doctor, date, localization, specialty, hour, onPressDetail, onPressDelete }: Props) {

  const formatDate = (date: string | Date) => {
    try {
      const parsedDate = typeof date === 'string' ? parseISO(date) : date;
      return format(parsedDate, "dd 'de' MMMM, yyyy", { locale: ptBR });
    } catch {
      return typeof date === 'string' ? date : date.toString();
    }
  };
 
  return (
    <View className="mt-2 flex w-full gap-4 rounded-lg border border-slate-200 bg-white px-4 py-8 shadow-sm">
      <View className="flex-row items-center justify-between">
        <View className="flex-row items-center gap-2">
          <FontAwesome5 name="calendar-alt" size={18} color="#2563eb" />
          <View className="flex">
            <Text className="text-xl font-bold leading-tight text-slate-800">
              {formatDate(date)}
            </Text>
            <View className="flex-row items-center">
              <EvilIcons name="clock" size={20} color="#475569" />
              <Text className="text-lg text-slate-600">{hour}:00</Text>
            </View>
          </View>
        </View>
        <Text className="rounded-full border border-blue-200 bg-blue-100 px-2 py-1 text-sm font-semibold text-blue-500">
          Agendada
        </Text>
      </View>
      <View className="flex items-start gap-2">
        <View className="flex-row items-center gap-2">
          <FontAwesome6 name="user-doctor" size={16} color="#475569" />
          <Text className="text-xl font-semibold text-slate-800">{doctor}</Text>
        </View>
        <View className="flex-row items-center gap-2">
          <Fontisto name="stethoscope" size={16} color="#475569" />
          <Text className="text-md text-slate-600">{specialty}</Text>
        </View>
        <View className="flex-row items-center gap-2">
          <FontAwesome5 name="map-marker-alt" size={16} color="#475569" />
          <Text className="text-md text-slate-600">{localization}</Text>
        </View>
      </View>
      <View className="flex-row justify-between">
        <Button
          title="Ver Detalhes"
          textStyle="text-white text-lg font-semibold ml-2"
          icon={<FontAwesome6 name="eye" size={16} color="white" />}
          buttonStyle="rounded bg-blue-600 px-4 w-10/12"
          onPress={onPressDetail}
        />
        <Button
          icon={<Feather name="trash-2" size={20} color="red" />}
          buttonStyle="flex justify-center items-center rounded border border-red-200 bg-red-100 p-2"
          onPress={onPressDelete}
        />
      </View>
    </View>
  );
}
