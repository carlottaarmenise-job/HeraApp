
import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Alert,
  Image
} from 'react-native';
import MenuSelector from '../components/MenuSelector';
import { theme } from '../assets/styles/styles';
import { useNavigation } from '@react-navigation/native';

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
  const [budget, setBudget] = useState('');
  const navigation = useNavigation()
  const [selectedDishes, setSelectedDishes] = useState({});
  const [selectedRange, setSelectedRange] = useState(null);

  const peopleRanges = [
    { label: '0-50', min: 0, max: 50, pricePerPerson: 20 },
    { label: '51-100', min: 51, max: 100, pricePerPerson: 30 },
    { label: '101-200', min: 101, max: 200, pricePerPerson: 40 },
    { label: '200+', min: 201, max: Infinity, pricePerPerson: 50 },
  ];

  const toggleDish = (dish) => {
    setSelectedDishes((prev) => ({
      ...prev,
      [dish]: !prev[dish],
    }));
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.back}>{'<'}</Text>
        </TouchableOpacity>
        <Image source={require('../assets/logo.png')} style={{ width: 80, height: 80 }} />
      </View>
      <View style={{ backgroundColor: 'white', paddingTop: 20, paddingBottom: 20 }}>
        <Text style={styles.villaTitle}>NOME VILLA</Text>

        <Text style={styles.label}>NUMERO PERSONE</Text>
        <View style={styles.radioGroup}>
          {peopleRanges.map((range) => (
            <TouchableOpacity
              key={range.label}
              style={[
                styles.radioButton,
                selectedRange?.label === range.label && styles.radioSelected,
              ]}
              onPress={() => setSelectedRange(range)}
            >
              <Text
                style={[
                  styles.radioText,
                  selectedRange?.label === range.label && styles.radioTextSelected,
                ]}
              >
                {range.label}
              </Text>
            </TouchableOpacity>
          ))}
        </View>


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

            if (!selectedRange || !budget) {
              Alert.alert('Risultato', '⚠️ Seleziona un range e inserisci il budget.');
              return;
            }

            const dishesCost = selected.reduce((sum, dish) => sum + (dishPrices[dish] || 0), 0);
            const budgetPerPerson = parseFloat(budget);
            const fixedCost = selectedRange.pricePerPerson;
            const maxAvailableForDishes = budgetPerPerson - fixedCost;

            if (maxAvailableForDishes <= 0) {
              Alert.alert(
                'Risultato',
                `❌ Il budget inserito è insufficiente.`
              );
               navigation.navigate('ConfirmBooking', {
                selectedDishes: selected,
                selectedRange,
                budget,
                villa: {
                  name: 'Villa Paradiso',
                  address: 'Via delle Rose 12, Firenze',
                  phone: '+39 328 556 2095',
                  email: 'info@designmyweddingevent.com',
                },
              });
              return;
            }

            if (dishesCost <= maxAvailableForDishes) {
              Alert.alert(
                'Risultato',
                `✅ Il menù è entro il budget.`
              );
              navigation.navigate('ConfirmBooking', {
                selectedDishes: selected,
                selectedRange,
                budget,
                villa: {
                  name: 'Villa Paradiso',
                  address: 'Via delle Rose 12, Firenze',
                  phone: '+39 328 556 2095',
                  email: 'info@designmyweddingevent.com',
                },
              });

            } else {
              Alert.alert(
                'Risultato',
                `❌ Il budget inserito è insufficiente.`
              );
              navigation.navigate('ConfirmBooking', {
                selectedDishes: selected,
                selectedRange,
                budget,
                villa: {
                  name: 'Villa Paradiso',
                  address: 'Via delle Rose 12, Firenze',
                  phone: '+39 328 556 2095',
                  email: 'info@designmyweddingevent.com',
                },
              });

            }
          }}

        >
          <Text style={styles.confirmText}>CONFERMA</Text>
        </TouchableOpacity>
      </View>
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
  },
  header: {
    flexDirection: 'row',
    padding: 16,
    paddingBottom: 0,
    backgroundColor: theme.primary,
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderColor: theme.secondary,
  },
  back: {
    color: 'white',
    fontWeight: 'bold',
    paddingVertical: 12,
    paddingHorizontal: 16,
    backgroundColor: theme.secondary,
    borderRadius: 100,
  },
  villaTitle: {
    padding: 16,
    fontSize: 22,
    fontWeight: 'bold',
    color: theme.secondary,
  },
  label: {
    paddingHorizontal: 16,
    color: theme.primary,
    fontSize: 16,
    marginTop: 10,
    marginBottom: 5,
  },
  radioGroup: {
    paddingHorizontal: 16,
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 15,
  },
  radioButton: {
    backgroundColor: theme.primary,
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 8,
    marginRight: 5,
  },
  radioSelected: {
    backgroundColor: theme.secondary,
    borderColor: theme.secondary,
    borderWidth: 2,
  },
  radioText: {
    color: 'white',
    fontWeight: 'bold',
  },
  radioTextSelected: {
    color: 'white',
  },
  input: {
    marginHorizontal: 16,
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 10,
    fontSize: 16,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  confirmButton: {
    backgroundColor: theme.primary,
    padding: 16,
    margin: 16,
    borderRadius: 8,
    marginTop: 30,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  confirmText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 14,
  },
  resultText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 10,
  },
  footer: {
    padding: 20,
    height: 100,
    borderTopWidth: 1,
    borderColor: theme.secondary,
    alignItems: 'center',
    backgroundColor: theme.primary
  },
  footerText: {
    color: theme.secondary,
    fontSize: 14,
    marginVertical: 2,
  },
});