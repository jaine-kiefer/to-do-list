import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, SafeAreaView } from 'react-native';
import { Lista } from './src/component/Lista';


export default function App() {
  const [texto, setaTexto] = useState("");
  const [ itens, setaItens] = useState([{titulo: "Tarefa falta fazer", estado: false}, {titulo: "Tarefa concluída", estado: false}]);
  const adicionaItem = (e) => {
    if(texto != "") {
      setaItens([
        ...itens, 
        {titulo: texto, estado: false}
      ])
      setaTexto("")
    }
  }
  return (
    <SafeAreaView style={style.containerRaiz}>
      <StatusBar
        animated={true}
        showHideTransition={true}
        hidden={true} />

      <View> 
        <Text style={style.titulo}>Lista de Tarefas</Text>
      </View>
      <View>
        <TextInput style={style.input} value={texto} onChangeText={setaTexto}/>
        <Button onPress={adicionaItem} title='Adicionar tarefa'/>
      </View>

      <Lista itens={itens} setaItens={setaItens}/>

    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  containerRaiz: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: "#e3f8ff",
  },

  titulo: {
    fontSize: 30,
    textAlign: "center",
    paddingTop: 20,
    paddingBottom: 15,
    color: "#555",
  },

  input: {
    borderWidth: 1,
    borderColor: "#bbb",
    marginBottom: 10,
    padding: 6,
    backgroundColor: "white",
  }
})
