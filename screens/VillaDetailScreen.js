import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { theme } from '../assets/styles/styles';
import GalleryScreen from '../components/Gallery';

const VillaDetailScreen = ({ navigation }) => {
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

        <GalleryScreen />
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
      </View>

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
    backgroundColor: theme.primary,
  },
  villaTitle: {
    padding: 16,
    fontSize: 22,
    fontWeight: 'bold',
    color: theme.secondary,
  },
  description: {
    paddingHorizontal: 16,
    color: theme.secondary,
    fontSize: 14,
    marginTop: 10,
    lineHeight: 20,
  },
  button: {
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
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 14,
  },
  footer: {
    padding: 20,
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
});
