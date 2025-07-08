import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
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

      <View style={styles.footer}>
        <Text style={styles.footerText}>TALK TO US</Text>
        <Text style={styles.footerText}>(+39) 328 556 2095</Text>
        <Text style={styles.footerText}>info@designmyweddingevent.com</Text>
        <Text style={styles.footerText}>📷 🟦</Text>
      </View>
    </ScrollView>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.primary,
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 20,
  },
  input: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    marginBottom: 15,
  },
  button: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: theme.primary,
    fontWeight: 'bold',
  },
  footer: {
    marginTop: 40,
    padding: 20,
    borderTopWidth: 1,
    borderColor: '#fff',
    alignItems: 'center',
  },
  footerText: {
    color: 'white',
    fontSize: 14,
    marginVertical: 2,
  },
});
