import { Text, Pressable, PressableProps, View } from 'react-native';
import { ReactNode } from 'react';

type Props = PressableProps & {
  title: string;
  textStyle?: string;
  buttonStyle?: string;
  icon?: ReactNode;
  disabledButton?: boolean;
};

export function Button({ title, textStyle, buttonStyle, icon, disabledButton, ...rest }: Props) {
  return (
    <Pressable {...rest} disabled={disabledButton} className={`${buttonStyle} flex-row items-center justify-center`}>
      {icon && <View className="mr-2">{icon}</View>}
      <Text className={`${textStyle}`}>{title}</Text>
    </Pressable>
  );
}
