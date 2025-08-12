import { ReactNode } from "react";
import { TextInput, TextInputProps, View } from "react-native";

type Props = TextInputProps & {
    textStyle?: string;
    icon?: ReactNode;
}

export function Input({  textStyle, icon, ...rest }: Props) {

    return(
        <View className="flex gap-2 flex-row items-center bg-white rounded-lg shadow-lg shadow-[#4d4d4d]">
            {icon && <View className="ml-4">{icon}</View>}
            <TextInput {...rest} className={`py-5 text-lg bg-white ${textStyle}`}/>
        </View>
    )
}