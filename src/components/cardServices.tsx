import { ReactNode } from "react";
import { Pressable, Text, } from "react-native";

type Props = {
    doctor: string;

}

export function CardServices({ doctor }: Props) {

    return(
        <Pressable className="w-32 h-40 bg-white shadow shadow-black flex justify-center items-center gap-4 rounded-md mt-2">
            <Text>{doctor}</Text>
        </Pressable>
    )
}