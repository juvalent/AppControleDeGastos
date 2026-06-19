import React, { useEffect, useState } from 'react';
import {View,Text,TextInput,Button,FlatList,StyleSheet} from 'react-native';

import axios from 'axios';

export default function App() {

  const [gastos, setGastos] = useState([]);
  const [descricao, setDescricao] = useState('');
  const [valor, setValor] = useState('');
  const [loading, setLoading] = useState(false);

  const api = axios.create({
    baseURL: 'https://controledegastosbackend-p1d6.onrender.com'
  });

  async function carregarGastos() {
    try {
      setLoading(true);

      const response = await api.get('/gastos');
      setGastos(response.data);

    } catch (error) {
      console.log('ERRO AO CARREGAR GASTOS:', error);

      if (error.response) {
        console.log('STATUS:', error.response.status);
        console.log('DADOS:', error.response.data);
      }
    } finally {
      setLoading(false);
    }
  }

  async function cadastrarGasto() {
    if (!descricao || !valor) {
      alert('Preencha todos os campos');
      return;
    }

    try {
      await api.post('/gastos', {
        descricao,
        valor: Number(valor),
        data_gasto: new Date().toISOString().split('T')[0],
        usuario_id: 1,
        categoria_id: 2
      });

      setDescricao('');
      setValor('');

      await carregarGastos();

      alert('Gasto cadastrado com sucesso!');

    } catch (error) {
      console.log('ERRO COMPLETO:', error);

      if (error.response) {
        console.log('STATUS:', error.response.status);
        console.log('DADOS:', error.response.data);
      }

      alert(
        JSON.stringify(error.response?.data || error.message)
      );
    }
  }

  useEffect(() => {
    carregarGastos();
  }, []);

  return (
    <View style={styles.container}>

      <Text style={styles.titulo}>
        Controle de Gastos
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Descrição"
        value={descricao}
        onChangeText={setDescricao}
      />

      <TextInput
        style={styles.input}
        placeholder="Valor"
        keyboardType="numeric"
        value={valor}
        onChangeText={setValor}
      />

      <Button
        title="Cadastrar Gasto"
        onPress={cadastrarGasto}
      />

      {loading && (
        <Text style={{ marginTop: 10 }}>
          Carregando...
        </Text>
      )}

      <FlatList
        data={gastos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text>{item.descricao}</Text>
            <Text>R$ {item.valor}</Text>
          </View>
        )}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    marginTop: 40
  },

  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20
  },

  input: {
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
    borderRadius: 5
  },

  card: {
    borderWidth: 1,
    padding: 15,
    marginTop: 10,
    borderRadius: 5
  }
});