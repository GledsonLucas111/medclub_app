import { Modal, View, Text } from "react-native";
import { Button } from "./button";

type CustomAlertProps = {
    title: string;
    titleButtonConfirm: string;
    message: string;
    onCancel: () => void;
    onConfirm: () => void;
    visible: boolean;
}

export default function CustomAlert({ title, titleButtonConfirm, message, onCancel, onConfirm, visible }: CustomAlertProps) {
  return (
    <Modal transparent visible={visible} animationType="fade">
      <View className="flex-1 justify-center items-center bg-black/50">
        <View className="w-10/11 py-10 px-4 rounded-lg bg-white shadow-lg  gap-8">
          <Text className="text-2xl font-bold mb-2 text-slate-800 text-center">{title}</Text>
          <Text className=" text-slate-600 text-xl text-center">{message}</Text>
          <View className="flex justify-between gap-2">
            <Button title={titleButtonConfirm} onPress={onConfirm} buttonStyle="bg-red-600 p-2 rounded-lg" textStyle="text-white"/>
            <Button title="Cancelar" onPress={onCancel} buttonStyle="border border-slate-400 p-2 rounded-lg" textStyle=""/>
          </View>
        </View>
      </View>
    </Modal>
  );
}


