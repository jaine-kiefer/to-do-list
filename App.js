import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { Lista } from './src/component/Lista';


export default function App() {
  let [texto, setaTexto] = useState("Jaine");
  const [ itens, setaItens] = useState([{titulo: "tarefa1", estado: false}, {titulo: "tarefa2", estado: false}]);
  return (
    <View>
      <StatusBar
        animated={true}
        showHideTransition={true}
        hidden={true} />

      <View> 
        <Text style={style.titulo}>Lista de Tarefas da {texto}</Text>
      </View>
      <View>
        <TextInput style={style.input} value={texto} onChangeText={setaTexto}/>
        <Button title='Adicionar tarefa'/>
      </View>

      <Lista itens={itens} setaItens={setaItens}/>

    </View>
  );
}

const style = StyleSheet.create({
  titulo: {
    fontSize: 24,
    textAlign: "center",
  },

  input: {
    borderWidth: 1,
    borderColor: "black",
    marginBottom: 10,
    padding: 8,
  }
})
