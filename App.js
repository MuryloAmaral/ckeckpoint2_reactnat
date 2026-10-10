import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  const [item, setItem] = useState('');
  const [lista, setLista] = useState([]);

  function adicionarItem() {
    if (item.trim() !== '') {
      const novoItem = {
        id: (lista.length + 1).toString(),
        nome: item.trim()
      };

      setLista([...lista, novoItem]);
      setItem('');
    }
  }

  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <Text style={styles.titulo}>Lista de Compras</Text>

      <TextInput
        style={styles.input}
        placeholder="Digite um item"
        value={item}
        onChangeText={setItem}
      />

      <Button title="Adicionar" onPress={adicionarItem} />

      <FlatList
        style={styles.lista}
        data={lista}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.texto}>{item.nome}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 20,
    paddingTop: 65
  },
  titulo: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 25,
    textAlign: 'center'
  },
  input: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 12,
    fontSize: 16,
    marginBottom: 15
  },
  lista: {
    marginTop: 25
  },
  item: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 5,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#ddd'
  },
  texto: {
    fontSize: 17
  }
});
