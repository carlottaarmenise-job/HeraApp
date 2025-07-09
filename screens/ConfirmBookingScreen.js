import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    TouchableOpacity,
    Alert,
    Image
} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { theme } from '../assets/styles/styles';

const ConfirmBookingScreen = () => {
    const navigation = useNavigation();
    const route = useRoute();

    const {
        selectedDishes = [],
        selectedRange = {},
        budget = '',
        villa = {
            name: 'Villa Paradiso',
            address: 'Via delle Rose 12, Firenze',
            phone: '+39 328 556 2095',
            email: 'info@designmyweddingevent.com',
        },
    } = route.params || {};

    const handleConfirm = () => {
        Alert.alert('Prenotazione Confermata', '✅ Grazie! Ti ricontatteremo a breve.');
        navigation.popToTop();
    };

    return (
        <ScrollView style={styles.container}>

            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Text style={styles.back}>{'<'}</Text>
                </TouchableOpacity>
                <Image source={require('../assets/logo.png')} style={{ width: 80, height: 80 }} />
            </View>
            <View style={{ backgroundColor: 'white', paddingTop: 20, paddingBottom: 20, paddingHorizontal: 16 }}>
                <Text style={styles.title}>Riepilogo Prenotazione</Text>

                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>🏛️ Villa</Text>
                    <Text style={styles.textBold}>{villa.name}</Text>
                    <Text>{villa.address}</Text>
                    <Text>{villa.phone}</Text>
                    <Text>{villa.email}</Text>
                </View>

                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>👥 Persone</Text>
                    <Text>{selectedRange.label}</Text>
                </View>

                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>💰 Budget per Persona</Text>
                    <Text>{budget} €</Text>
                </View>

                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>🍽️ Piatti Selezionati</Text>
                    {selectedDishes.length > 0 ? (
                        selectedDishes.map((dish, idx) => (
                            <Text key={idx}>• {dish}</Text>
                        ))
                    ) : (
                        <Text>Nessun piatto selezionato.</Text>
                    )}
                </View>

                <TouchableOpacity style={styles.confirmButton} onPress={handleConfirm}>
                    <Text style={styles.confirmText}>CONFERMA PRENOTAZIONE</Text>
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

export default ConfirmBookingScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.primary,
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        color: theme.secondary,
        marginBottom: 20,
    },
    section: {
        backgroundColor: 'white',
        borderRadius: 8,
        padding: 16,
        marginBottom: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
    },
    sectionTitle: {
        fontWeight: 'bold',
        marginBottom: 8,
        color: theme.secondary,
    },
    textBold: {
        fontWeight: 'bold',
    },
    confirmButton: {
        backgroundColor: theme.secondary,
        padding: 16,
        borderRadius: 8,
        alignItems: 'center',
    },
    confirmText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,
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
