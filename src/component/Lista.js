import { View } from "react-native";
import { ItemDaLista } from "./ItemDaLista";

export function Lista () {
    const itens = [{titulo: "tarefa1", estado: true}, {titulo: "tarefa2", estado: true}]
    return (
        <View>
            {itens.map((item) => (
                <ItemDaLista {...item}/>
            ))}
        </View>
    )
}