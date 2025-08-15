import { ReactNode } from "react";
import { TextInput, TextInputProps, View } from "react-native";

type Props = TextInputProps & {
    textStyle?: string;
    icon?: ReactNode;
}

export function Input({  textStyle, icon, ...rest }: Props) {

    return(
        <View className="flex gap-2 flex-row items-center rounded-lg border border-slate-200 bg-white shadow">
            {icon && <View className="ml-4">{icon}</View>}
            <TextInput {...rest} className={`px-4 text-lg bg-white ${textStyle}`}/>
        </View>
    )
}