import { View } from "react-native";
import { useState } from "react";
import { ItemDaLista } from "./ItemDaLista";

export function Lista () {
    const [ itens, setaItens] = useState([{titulo: "tarefa1", estado: false}, {titulo: "tarefa2", estado: false}]);

    const mudaEstadoItem = (item) => {
        item.estado = !item.estado;
        setaItens([...itens])
    }
    return (
        <View>
            {itens.map((item) => (
                <ItemDaLista {...item} onPress={() => mudaEstadoItem(item)}/>
            ))}
        </View>
    )
}