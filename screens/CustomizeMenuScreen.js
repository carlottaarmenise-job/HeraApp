
import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Alert,
} from 'react-native';
import MenuSelector from '../components/MenuSelector';
import { theme } from '../assets/styles/styles';

const menuItems = {
  ANTIPASTI: [
    'Carpaccio di Manzo Balsamico',
    'Tartare di Salmone e Avocado',
    'Crudo con Pere e Avocado',
    'Insalata di Mare Lime e Menta',
    'Involtini di Melanzane Ricotta',
  ],
  PRIMI: [
    'Risotto Nero ai Frutti di Mare',
    'Tagliolini Tartufo e Panna',
    'Gnocchi Spinaci e Ricotta Noci',
    'Ravioli Zucca e Amaretti in Salvia',
    'Linguine Vongole e Zafferano',
  ],
  SECONDI: [
    'Filetto di Manzo al Barolo',
    'Branzino al Limone e Rosmarino',
    'Petto di Pollo al Marsala',
    'Salmone Grigliato alle Erbe',
  ],
  DOLCI: [
    'Tiramisù di Cioccolato Fondente',
    'Panna Cotta al Pistacchio',
    'Cannolo Siciliano al Pistacchio',
    'Torta Caprese all’Arancia',
    'Semifreddo al Torrone',
  ],
};

const dishPrices = {
  'Carpaccio di Manzo Balsamico': 4,
  'Tartare di Salmone e Avocado': 5,
  'Crudo con Pere e Avocado': 4,
  'Insalata di Mare Lime e Menta': 6,
  'Involtini di Melanzane Ricotta': 3,
  'Risotto Nero ai Frutti di Mare': 7,
  'Tagliolini Tartufo e Panna': 8,
  'Gnocchi Spinaci e Ricotta Noci': 6,
  'Ravioli Zucca e Amaretti in Salvia': 5,
  'Linguine Vongole e Zafferano': 7,
  'Filetto di Manzo al Barolo': 10,
  'Branzino al Limone e Rosmarino': 9,
  'Petto di Pollo al Marsala': 8,
  'Salmone Grigliato alle Erbe': 9,
  'Tiramisù di Cioccolato Fondente': 4,
  'Panna Cotta al Pistacchio': 4,
  'Cannolo Siciliano al Pistacchio': 3,
  'Torta Caprese all’Arancia': 4,
  'Semifreddo al Torrone': 4,
};

const CustomizeMenuScreen = () => {
  const [peopleCount, setPeopleCount] = useState('');
  const [budget, setBudget] = useState('');
  const [selectedDishes, setSelectedDishes] = useState({});

  const predefinedPeople = [50, 100, 200, 300];

  const toggleDish = (dish) => {
    setSelectedDishes((prev) => ({
      ...prev,
      [dish]: !prev[dish],
    }));
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>NOME VILLA</Text>

      <Text style={styles.label}>NUMERO PERSONE</Text>
      <View style={styles.radioGroup}>
        {predefinedPeople.map((number) => (
          <TouchableOpacity
            key={number}
            style={[
              styles.radioButton,
              parseInt(peopleCount) === number && styles.radioSelected,
            ]}
            onPress={() => setPeopleCount(number.toString())}
          >
            <Text
              style={[
                styles.radioText,
                parseInt(peopleCount) === number && styles.radioTextSelected,
              ]}
            >
              {number}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      <TextInput
        style={styles.input}
        value={peopleCount}
        onChangeText={setPeopleCount}
        keyboardType="numeric"
        placeholder="Oppure inserisci il numero"
        placeholderTextColor="#ccc"
      />

      <Text style={styles.label}>BUDGET</Text>
      <TextInput
        style={styles.input}
        value={budget}
        onChangeText={setBudget}
        keyboardType="numeric"
        placeholder="Inserisci il budget"
        placeholderTextColor="#ccc"
      />

      {Object.entries(menuItems).map(([category, items]) => (
        <MenuSelector
          key={category}
          category={category}
          items={items}
          selected={selectedDishes}
          toggle={toggleDish}
        />
      ))}

      <TouchableOpacity
        style={styles.confirmButton}
        onPress={() => {
          const selected = Object.keys(selectedDishes).filter((dish) => selectedDishes[dish]);
          const people = parseInt(peopleCount) || 0;

          const totalPerPerson = selected.reduce((sum, dish) => sum + (dishPrices[dish] || 0), 0);

          if (budget && totalPerPerson > 0 && people > 0) {
            const budgetPerPerson = parseFloat(budget);
            if (totalPerPerson <= budgetPerPerson) {
              Alert.alert('Risultato', '✅ Il menù è entro il budget.');
            } else {
              Alert.alert('Risultato', '❌ Il menù supera il budget.');

            }
          } else {
              Alert.alert('Risultato', '⚠️ Inserisci tutti i dati correttamente.');

          }
        }}
      >
        <Text style={styles.confirmText}>CONFERMA</Text>
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

export default CustomizeMenuScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.primary,
    padding: 20,
  },
  title: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  label: {
    color: 'white',
    fontSize: 16,
    marginTop: 10,
    marginBottom: 5,
  },
  radioGroup: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 15,
  },
  radioButton: {
    backgroundColor: 'white',
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 8,
    margin: 5,
  },
  radioSelected: {
    backgroundColor: '#fff',
    borderColor: '#333',
    borderWidth: 2,
  },
  radioText: {
    color: theme.primary,
    fontWeight: 'bold',
  },
  radioTextSelected: {
    color: '#000',
  },
  input: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 10,
    fontSize: 16,
    marginBottom: 20,
  },
  confirmButton: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
  },
  confirmText: {
    color: theme.primary,
    fontWeight: 'bold',
  },
  resultText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 10,
  },
  footer: {
    marginTop: 30,
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