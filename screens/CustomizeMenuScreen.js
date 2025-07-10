
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
    {
      id: 'antipasto_1',
      title: 'Carpaccio di Manzo Balsamico',
      description: 'Sottili fette di manzo con rucola e riduzione al balsamico.',
      image: require('../assets/menu/carpaccio.png'),
    },
    {
      id: 'antipasto_2',
      title: 'Tartare di Salmone e Avocado',
      description: 'Salmone fresco con avocado, lime e pepe rosa.',
      image: require('../assets/menu/tartare.png'),
    },
    {
      id: 'antipasto_3',
      title: 'Crudo con Pere e Avocado',
      description: 'Prosciutto crudo con pere mature e crema di avocado.',
      image: require('../assets/menu/crudo_pere.png'),
    },
    {
      id: 'antipasto_4',
      title: 'Insalata di Mare Lime e Menta',
      description: 'Frutti di mare marinati con lime fresco e foglie di menta.',
      image: require('../assets/menu/insalata_mare.png'),
    },
    {
      id: 'antipasto_5',
      title: 'Involtini di Melanzane Ricotta',
      description: 'Melanzane grigliate farcite con ricotta ed erbe aromatiche.',
      image: require('../assets/menu/involtini_melanzane.png'),
    },
  ],
  PRIMI: [
    {
      id: 'primo_1',
      title: 'Risotto Nero ai Frutti di Mare',
      description: 'Risotto al nero di seppia con calamari, cozze e vongole.',
      image: require('../assets/menu/risotto_nero.png'),
    },
    {
      id: 'primo_2',
      title: 'Tagliolini Tartufo e Panna',
      description: 'Tagliolini freschi con panna e scaglie di tartufo nero.',
      image: require('../assets/menu/tagliolini_tartufo.png'),
    },
    {
      id: 'primo_3',
      title: 'Gnocchi Spinaci e Ricotta Noci',
      description: 'Gnocchi verdi con ricotta, spinaci e granella di noci.',
      image: require('../assets/menu/gnocchi_spinaci.png'),
    },
    {
      id: 'primo_4',
      title: 'Ravioli Zucca e Amaretti in Salvia',
      description: 'Ravioli di zucca con burro, salvia e briciole di amaretto.',
      image: require('../assets/menu/ravioli_zucca.png'),
    },
    {
      id: 'primo_5',
      title: 'Linguine Vongole e Zafferano',
      description: 'Linguine con vongole veraci e un tocco di zafferano.',
      image: require('../assets/menu/linguine_vongole.png'),
    },
  ],
  SECONDI: [
    {
      id: 'secondo_1',
      title: 'Filetto di Manzo al Barolo',
      description: 'Filetto di manzo cotto al vino Barolo, tenero e succoso.',
      image: require('../assets/menu/filetto_barolo.png'),
    },
    {
      id: 'secondo_2',
      title: 'Branzino al Limone e Rosmarino',
      description: 'Filetto di branzino al forno con limone e rosmarino fresco.',
      image: require('../assets/menu/branzino.png'),
    },
    {
      id: 'secondo_3',
      title: 'Petto di Pollo al Marsala',
      description: 'Pollo rosolato in padella con salsa cremosa al Marsala.',
      image: require('../assets/menu/pollo_marsala.png'),
    },
    {
      id: 'secondo_4',
      title: 'Salmone Grigliato alle Erbe',
      description: 'Filetto di salmone grigliato con erbe mediterranee.',
      image: require('../assets/menu/salmone.png'),
    },
  ],
  DOLCI: [
    {
      id: 'dolce_1',
      title: 'Tiramisù di Cioccolato Fondente',
      description: 'Il classico tiramisù arricchito con scaglie di fondente.',
      image: require('../assets/menu/tiramisu.png'),
    },
    {
      id: 'dolce_2',
      title: 'Panna Cotta al Pistacchio',
      description: 'Panna cotta cremosa con crema e granella di pistacchio.',
      image: require('../assets/menu/panna_cotta.png'),
    },
    {
      id: 'dolce_3',
      title: 'Cannolo Siciliano al Pistacchio',
      description: 'Cannolo croccante con ricotta dolce e pistacchi.',
      image: require('../assets/menu/cannolo.png'),
    },
    {
      id: 'dolce_4',
      title: 'Torta Caprese all’Arancia',
      description: 'Torta al cioccolato e mandorle con scorza d’arancia.',
      image: require('../assets/menu/caprese_arancia.png'),
    },
    {
      id: 'dolce_5',
      title: 'Semifreddo al Torrone',
      description: 'Dessert semifreddo con croccante di torrone e miele.',
      image: require('../assets/menu/semifreddo.png'),
    },
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

        <View style={styles.section}>
          {Object.entries(menuItems).map(([category, items]) => (
            <MenuSelector
              key={category}
              category={category}
              items={items}
              selected={selectedDishes}
              toggle={toggleDish}
            />
          ))}
        </View>
        <TouchableOpacity
          style={styles.confirmButton}
          onPress={() => {
            const selectedArray = Object.keys(selectedDishes).filter(dish => selectedDishes[dish]);

            const selected = selectedArray.map(id => {
              for (const category in menuItems) {
                const found = menuItems[category].find(item => item.id === id);
                if (found) return found.title;
              }
              return undefined;
            }).filter(Boolean);

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
  section: {
    marginHorizontal: 16,
    padding: 12,
    backgroundColor: 'white', borderRadius: 12, shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
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

});