import { View, Text } from "react-native";

export function ItemDaLista({ titulo, estado }) {
    return (
        <View>
            <Text
                style={{ textDecorationLine: estado ? 'line-through' : 'none', textDecorationStyle: 'solid' }}
            >
                {titulo}
            </Text>
        </View>
    )
}