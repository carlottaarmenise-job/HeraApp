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
          Una splendida oasi di verde alle falde del Vesuvio circonda Complesso Zeno- Villa Tony, esclusiva location con vista mozzafiato sul Golfo di Napoli che farà da cornice al giorno più bello della vostra vita, offrendovi ambienti eleganti e un servizio impeccabile in ogni fase dell'evento.
        </Text>

        <Text style={styles.sectionTitle}>Spazi e capienza</Text>
        <Text style={styles.description}>
          La Villa dispone di spazi ampi e lussuosi che si adattano perfettamente a eventi di ogni tipo. La sala centrale è il cuore della struttura, con i suoi arredi raffinati e la possibilità di ospitare un elevato numero di invitati.
          Gli esterni di Complesso Zeno- Villa Tony sono caratterizzati dalla presenza di ampie terrazze panoramiche e di una splendida piscina, scelta ideale per allestire il vostro ricevimento all'aria aperta.
        </Text>

        <Text style={styles.sectionTitle}>Servizi offerti</Text>
        <Text style={styles.description}>
          Lo staff vi offrirà i migliori servizi e un'attenzione personalizzata, capace di esaudire ogni vostra richiesta. La cura per i dettagli e la cortesia che troverete al Complesso Zeno- Villa Tony contribuiranno a rendere indimenticabile il vostro matrimonio.
        </Text>

        <Text style={styles.sectionTitle}>Ristorazione</Text>
        <Text style={styles.description}>
          I loro chef si occuperanno del vostro banchetto con proposte culinarie prelibate che saranno elegantemente presentate in tavola, per stupire gli occhi e conquistare il palato.
        </Text>

        <Text style={styles.sectionTitle}>Ubicazione</Text>
        <Text style={styles.description}>
          Complesso Zeno - Villa Tony si trova a Ercolano, a poca distanza da Napoli e dalle più suggestive località della regione, immersa in un contesto paesaggistico di straordinaria bellezza, per incorniciare in modo esclusivo i momenti più romantici della vostra vita insieme.
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
  sectionTitle: {
    paddingHorizontal: 16,
    marginTop: 24,
    fontSize: 16,
    fontWeight: 'bold',
    color: theme.secondary,
  },
});
