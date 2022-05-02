import { View, Text, TouchableOpacity } from "react-native";

export function ItemDaLista({ titulo, estado, onPress }) {
    return (
        <TouchableOpacity onPress={onPress}>
            <Text
                style={{ textDecorationLine: estado ? 'line-through' : 'none', textDecorationStyle: 'solid' }}
            >
                {titulo}
            </Text>
        </TouchableOpacity>
    )
}