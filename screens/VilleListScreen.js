import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import VillaCard from '../components/VillaCard';
import { theme } from '../assets/styles/styles';

const ville = [
  {
    id: '1',
    nome: 'NOME VILLA',
    location: 'Contrada S. Giovanni, Siracusa',
    rating: 5,
    image: require('../assets/villa1.jpg'),
  },
  {
    id: '2',
    nome: 'NOME VILLA',
    location: 'Contrada S. Giovanni, Siracusa',
    rating: 4,
    image: require('../assets/villa2.jpg'),
  },
  {
    id: '3',
    nome: 'NOME VILLA',
    location: 'Contrada S. Giovanni, Siracusa',
    rating: 4,
    image: require('../assets/villa3.jpg'),
  },
  {
    id: '4',
    nome: 'NOME VILLA',
    location: 'Contrada S. Giovanni, Siracusa',
    rating: 3,
    image: require('../assets/villa4.jpg'),
  },
];

const VilleListScreen = ({ navigation }) => {
  const renderVilla = ({ item }) => (
    <VillaCard
      image={require('../assets/villa1.jpg')}
      name="Villa Panarea"
      item={item}
      onPress={() => navigation.navigate('VillaDetail')}
    />

  );

  return (
    <View style={styles.container}>
      <FlatList
        data={ville}
        renderItem={renderVilla}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
      <View style={styles.footer}>
        <Text style={styles.footerText}>TALK TO US</Text>
        <Text style={styles.footerText}>(+39) 328 556 2095</Text>
        <Text style={styles.footerText}>info@designmyweddingevent.com</Text>
        <Text style={styles.footerText}>📷  🟦</Text>
      </View>
    </View>
  );
};

export default VilleListScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.primary,
    paddingTop: 20,
  },

  footer: {
    marginTop: 10,
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
