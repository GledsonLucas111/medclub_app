import { Pressable, Text, } from "react-native";

type Props = {
    icon: any;
    name: string;

}

export function CardServices({ icon, name }: Props) {

    return(
        <Pressable className="w-32 h-40 bg-white shadow shadow-black flex justify-center items-center gap-4 rounded-md mt-2">
            {icon}
            <Text>{name}</Text>
        </Pressable>
    )
}