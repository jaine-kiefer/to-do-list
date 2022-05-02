import { View } from "react-native";
import { useState } from "react";
import { ItemDaLista } from "./ItemDaLista";

export function Lista ({itens, setaItens}) {

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