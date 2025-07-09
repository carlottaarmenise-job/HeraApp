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
  {
    id: '5',
    nome: 'NOME VILLA',
    location: 'Contrada S. Giovanni, Siracusa',
    rating: 3,
    image: require('../assets/wedding1.jpg'),
  },
  {
    id: '6',
    nome: 'NOME VILLA',
    location: 'Contrada S. Giovanni, Siracusa',
    rating: 3,
    image: require('../assets/wedding2.jpg'),
  },
  {
    id: '7',
    nome: 'NOME VILLA',
    location: 'Contrada S. Giovanni, Siracusa',
    rating: 3,
    image: require('../assets/wedding3.jpg'),
  },
  {
    id: '8',
    nome: 'NOME VILLA',
    location: 'Contrada S. Giovanni, Siracusa',
    rating: 3,
    image: require('../assets/wedding4.jpg'),
  },
  {
    id: '9',
    nome: 'NOME VILLA',
    location: 'Contrada S. Giovanni, Siracusa',
    rating: 3,
    image: require('../assets/villa1.jpg'),
  },
  {
    id: '10',
    nome: 'NOME VILLA',
    location: 'Contrada S. Giovanni, Siracusa',
    rating: 3,
    image: require('../assets/villa2.jpg'),
  },
];

const VilleListScreen = ({ navigation }) => {
  const renderVilla = ({ item, index }) => (
    <VillaCard
      image={require('../assets/villa1.jpg')}
      name="Villa Panarea"
      item={item}
      index={index}
      onPress={() => navigation.navigate('VillaDetail')}
    />

  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={()=>navigation.goBack()}>
        <Text style={styles.back}>{'<'}</Text>
        </TouchableOpacity>
        <Image source={require('../assets/logo.png')} style={{ width: 80, height: 80 }} />
      </View>
      <FlatList
        data={ville}
        renderItem={renderVilla}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingBottom: 20, marginTop: 20 }}
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
    backgroundColor: 'white'
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
  footer: {
    padding: 20,
    height:100,
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
