import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

const VillaDetailScreen = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.villaTitle}>NOME VILLA</Text>

      {/* Immagini della villa */}
      <View style={styles.imageRow}>
        <Image source={require('../assets/villa1.jpg')} style={styles.image} />
        <Image source={require('../assets/villa2.jpg')} style={styles.image} />
      </View>
      <View style={styles.imageRow}>
        <Image source={require('../assets/villa3.jpg')} style={styles.image} />
        <Image source={require('../assets/villa4.jpg')} style={styles.image} />
      </View>

      {/* Descrizione */}
      <Text style={styles.description}>
        La nostra selezione di strutture include le più belle ville regionali del mondo,
        con location affascinanti per ogni tipo di evento: matrimoni, cerimonie e feste private.
      </Text>

      <Text style={styles.description}>
        Tutte le location sono state selezionate con cura per garantire il massimo della qualità
        in termini di ambientazione, logistica e servizi.
      </Text>

      <Text style={styles.description}>
        Le ville sono dislocate nel cuore delle migliori destinazioni siciliane e sono state
        ottimizzate per offrire un’esperienza completa, unica e memorabile.
      </Text>

      {/* Pulsante */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('CustomizeMenu')}
      >
        <Text style={styles.buttonText}>PERSONALIZZA IL TUO MENU</Text>
      </TouchableOpacity>

      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>TALK TO US</Text>
        <Text style={styles.footerText}>(+39) 328 556 2095</Text>
        <Text style={styles.footerText}>info@designmyweddingevent.com</Text>
        <Text style={styles.footerText}>📷 🟦</Text>
      </View>
    </ScrollView>
  );
};

export default VillaDetailScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D1AC3C',
    padding: 15,
  },
  villaTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 15,
  },
  imageRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  image: {
    width: '48%',
    height: 100,
    borderRadius: 8,
  },
  description: {
    color: 'white',
    fontSize: 14,
    marginTop: 10,
    lineHeight: 20,
  },
  button: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 8,
    marginTop: 30,
    alignItems: 'center',
  },
  buttonText: {
    color: '#D1AC3C',
    fontWeight: 'bold',
    fontSize: 14,
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
