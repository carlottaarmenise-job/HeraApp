import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import { theme } from '../assets/styles/styles';

const SignUpScreen = () => {
  const [form, setForm] = useState({
    nome: '',
    cognome: '',
    email: '',
    telefono: '',
    password: '',
    confermaPassword: '',
  });

  const handleChange = (field, value) => {
    setForm((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSignUp = () => {
    // Validazione semplice
    if (
      !form.nome ||
      !form.cognome ||
      !form.email ||
      !form.password ||
      form.password !== form.confermaPassword
    ) {
      alert('Per favore compila tutti i campi correttamente.');
      return;
    }

    alert('Registrazione completata!');
    // Qui puoi collegare Firebase o altro backend
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image source={require('../assets/logo.png')} style={{ width: 150, height: 130 }} />
      </View>
      <View style={{ backgroundColor: 'white', paddingTop: 20, paddingBottom: 20, padding: 16 }}>

        <Text style={styles.title}>CREA IL TUO ACCOUNT</Text>

        <TextInput
          style={styles.input}
          placeholder="Nome"
          placeholderTextColor="#ccc"
          value={form.nome}
          onChangeText={(text) => handleChange('nome', text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Cognome"
          placeholderTextColor="#ccc"
          value={form.cognome}
          onChangeText={(text) => handleChange('cognome', text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#ccc"
          value={form.email}
          onChangeText={(text) => handleChange('email', text)}
          keyboardType="email-address"
        />
        <TextInput
          style={styles.input}
          placeholder="Telefono"
          placeholderTextColor="#ccc"
          value={form.telefono}
          onChangeText={(text) => handleChange('telefono', text)}
          keyboardType="phone-pad"
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#ccc"
          secureTextEntry
          value={form.password}
          onChangeText={(text) => handleChange('password', text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Conferma Password"
          placeholderTextColor="#ccc"
          secureTextEntry
          value={form.confermaPassword}
          onChangeText={(text) => handleChange('confermaPassword', text)}
        />

        <TouchableOpacity style={styles.button} onPress={handleSignUp}>
          <Text style={styles.buttonText}>ISCRIVITI</Text>
        </TouchableOpacity>
      </View>

    </ScrollView>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.primary,
  },
  header: {
    paddingTop: 20,
    paddingBottom: 10,
    paddingHorizontal: 15,
    backgroundColor: theme.primary,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: theme.secondary,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: theme.secondary,
    marginBottom: 20,
  },

  input: {
    backgroundColor: 'white',
    borderRadius: 8,
    marginBottom: 15,
    padding: 10,
    fontSize: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  button: {
    backgroundColor: theme.primary,
    padding: 16,
    borderRadius: 8,
    marginTop: 30,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 14,
  },

});
