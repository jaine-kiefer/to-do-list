import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';


export default function App() {
  let [texto, setaTexto] = useState("Jaine");
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
