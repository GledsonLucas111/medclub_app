import { Text, View, TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { ReactNode } from 'react';

type Props = TouchableOpacityProps & {
  title?: string;
  textStyle?: string;
  buttonStyle?: string;
  icon?: ReactNode;
  disabledButton?: boolean;
};

export function Button({ title, textStyle, buttonStyle, icon, disabledButton, ...rest }: Props) {
  return (
    <TouchableOpacity activeOpacity={0.8} {...rest} disabled={disabledButton} className={`${buttonStyle} flex-row items-center justify-center`}>
      {icon && <View>{icon}</View>}
      {title && <Text className={`${textStyle}`}>{title}</Text>}
    </TouchableOpacity>
  );
}
