import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, ScrollView, TouchableOpacity } from 'react-native';

export default () => {

  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');

  function handleSubmit() {
    const alt = altura / 100;
    const imc = peso / (alt * alt);

    if (imc < 18.6) {
      alert("Você está abaixo do peso!\nIMC: " + imc.toFixed(2));
    } else if (imc >= 18.6 && imc < 24.9) {
      alert("Você está com o peso ideal!\nIMC: " + imc.toFixed(2));
    } else if (imc >= 24.9 && imc <= 34.9) {
      alert("Você está levemente acima do peso!\nIMC: " + imc.toFixed(2));
    }
  }

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Calcular IMC</Text>

      <TextInput
        style={styles.input}
        value={peso}
        onChangeText={(peso) => setPeso(peso)}
        placeholder="Peso (kg)"
        keyboardType="numeric"
      />

      <TextInput
        style={styles.input}
        value={altura}
        onChangeText={(altura) => setAltura(altura)}
        placeholder="Altura (cm)"
        keyboardType="numeric"
      />

      <TouchableOpacity
        style={styles.button}
        onPress={handleSubmit}
      >
        <Text style={styles.buttonText}>Calcular</Text>
      </TouchableOpacity>


    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#435"
  },

  title: {
    textAlign: "center",
    marginTop: 25,
    fontSize: 25,
    color: "#fff"
  },
  input: {
    borderRadius: 10,
    margin: 15,
    padding: 10,
    fontSize: 18,
    color: "#000",
    textAlign: "center",
    backgroundColor: "#fff"
  },

  button: {
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    backgroundColor: "#449",
    width: "25%",
    borderRadius: 8,
    padding: 5,
    marginTop: 15
  },

  buttonText: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#fff"
  }
});