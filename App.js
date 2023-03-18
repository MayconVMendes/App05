import * as React from 'react';
import { useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Pressable,
  TextInput,
  Image,
} from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default function App() {
  const [isAltura, setIsAltura] = useState(0);
  const [isPeso, setIsPeso] = useState(0);
  const [isIMC, setIsIMC] = useState(0);
  const [isForm, setIsForm] = useState();

  function calcular() {
    if (isAltura === 0 || isPeso === 0) {
      alert('É obrigatório digitar os dois números');
      return;
    } else {
      if (isPeso > 1 && isAltura > 1) {
        let valor = (isPeso / (isAltura * isAltura)).toFixed(2);

        if (valor < 18.5) {
          setIsForm('Abaixo do Peso');
        } else if (valor > 18.5 && valor < 24.9) {
          setIsForm('Peso Normal');
        } else if (valor > 25 && valor < 29.9) {
          setIsForm('Sobrepeso');
        } else if (valor > 30 && valor < 34.9) {
          setIsForm('Obesidade Grau 1');
        } else if (valor > 35 && valor < 39.9) {
          setIsForm('Obesidade Grau 2');
        } else {
          setIsForm('Obesidade Grau 3 ou Mórbida');
        }

        setIsIMC(valor);
      }
    }
  }

  return (
    <View style={styles.container}>
      <Text style={{ marginTop: '25%', fontSize: 30 }}>Calculo de IMC</Text>

      <View style={styles.boxView}>
        <Image
        source={{
          uri: 'https://www.dorcronica.blog.br/web/wp-content/uploads/2022/09/o-indice-de-massa-corporal-imc-e-impreciso-e-enganoso.png',
        }}
        style={{ width: 180, height: 180 }}
      />
      </View>

      <TextInput
        style={styles.input}
        placeholder="Peso"
        placeholderTextColor="black"
        keyboardType="numeric"
        onChangeText={(peso) =>
          setIsPeso(peso.toString().replace(',', '.'))
        }></TextInput>
      <TextInput
        style={styles.input}
        placeholder="Altura"
        placeholderTextColor="black"
        keyboardType="numeric"
        onChangeText={(altura) =>
          setIsAltura(altura.toString().replace(',', '.'))
        }></TextInput>

      <Pressable style={styles.btn} onPress={calcular}>
        <Text>Calcular</Text>
      </Pressable>

      <Text style={{ marginTop: '5%', fontSize: 20 }}>
        Sua Classificação: {isForm}
      </Text>
      <Text style={{ marginTop: '5%', fontSize: 20 }}>IMC: {isIMC}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  boxView: {
    width: 190,
    height: 190,
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 25,
    justifyContent: 'center',
  },
  input: {
    width: 200,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: 'black',
    textAlign: 'center',
  },
  btn: {
    width: 200,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    marginTop: 20,
    backgroundColor: 'green',
  },
});
