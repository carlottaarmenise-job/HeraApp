import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    TextInput,
    TouchableOpacity,
    Image,
} from 'react-native';
import { theme } from '../assets/styles/styles';
import { useNavigation } from '@react-navigation/native';

const ProfileScreen = () => {
    const navigation = useNavigation()
    const [form, setForm] = useState({
        nome: 'Emilio',
        cognome: 'Rossi',
        email: 'emilio@example.com',
        telefono: '+39 328 000 0000',
        password: '',
    });

    const [richieste, setRichieste] = useState([
        { id: 1, titolo: 'Richiesta DJ per matrimonio', stato: 'In attesa' },
        { id: 2, titolo: 'Preventivo fiorista', stato: 'Approvato' },
    ]);

    const [prenotazioni, setPrenotazioni] = useState([
        { id: 1, location: 'Villa Paradiso', data: '12 Settembre 2025' },
        { id: 2, location: 'Dimora Storica', data: '5 Ottobre 2025' },
    ]);

    const handleChange = (field, value) => {
        setForm({ ...form, [field]: value });
    };

    return (
        <ScrollView style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity
                    onPress={() =>
                        navigation.reset({
                            index: 0,
                            routes: [{ name: 'Home' }],
                        })
                    }
                >
                    <Text style={styles.back}>{'<'}</Text>
                </TouchableOpacity>
                <Image source={require('../assets/logo.png')} style={{ width: 80, height: 80 }} />
            </View>
            <View style={{ backgroundColor: 'white', paddingTop: 20, paddingBottom: 20 }}>
                <Text style={styles.title}>Il mio profilo</Text>

                <View style={styles.card}>
                    {['nome', 'cognome', 'email', 'telefono'].map((field) => (
                        <TextInput
                            key={field}
                            style={styles.input}
                            placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                            value={form[field]}
                            onChangeText={(text) => handleChange(field, text)}
                        />
                    ))}
                    <TextInput
                        style={styles.input}
                        placeholder="Nuova password"
                        secureTextEntry
                        value={form.password}
                        onChangeText={(text) => handleChange('password', text)}
                    />
                    <TouchableOpacity style={styles.saveButton}>
                        <Text style={styles.saveButtonText}>Salva modifiche</Text>
                    </TouchableOpacity>
                </View>

                <Text style={styles.sectionTitle}>Le mie richieste</Text>
                {richieste.map((r) => (
                    <View key={r.id} style={styles.itemBox}>
                        <Text style={styles.itemTitle}>{r.titolo}</Text>
                        <Text style={styles.itemStatus}>{r.stato}</Text>
                    </View>
                ))}

                <Text style={styles.sectionTitle}>Le mie prenotazioni</Text>
                {prenotazioni.map((p) => (
                    <View key={p.id} style={styles.itemBox}>
                        <Text style={styles.itemTitle}>{p.location}</Text>
                        <Text style={styles.itemStatus}>Data: {p.data}</Text>
                    </View>
                ))}
            </View>
        </ScrollView>
    );
};

export default ProfileScreen;

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
    title: {
        fontSize: 25,
        fontWeight: 'bold',
        color: theme.secondary,
        textAlign: 'center',
        marginVertical: 20,
    },
    card: {
        backgroundColor: 'white',
        marginHorizontal: 16,
        borderRadius: 10,
        padding: 16,
        marginBottom: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
    },
    input: {
        borderBottomWidth: 1,
        borderColor: '#ccc',
        paddingVertical: 8,
        marginBottom: 12,
        fontSize: 16,
    },
    saveButton: {
        backgroundColor: theme.secondary,
        padding: 12,
        borderRadius: 30,
        alignItems: 'center',
        marginTop: 10,
    },
    saveButtonText: {
        color: 'white',
        fontWeight: 'bold',
        letterSpacing: 1,
    },
    sectionTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 16,
        marginBottom: 8,
        textAlign: 'center',
        color: theme.secondary,
        marginTop: 16,
    },
    itemBox: {
        backgroundColor: 'white',
        marginHorizontal: 16,
        marginBottom: 10,
        padding: 12,
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
    },
    itemTitle: {
        fontWeight: 'bold',
        fontSize: 16,
        color: theme.secondary,
    },
    itemStatus: {
        fontSize: 14,
        color: '#555',
        marginTop: 4,
    },
});
