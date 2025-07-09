import React, { useState } from 'react';
import {
    View,
    Text,
    ScrollView,
    StyleSheet,
    Image,
    TouchableOpacity,
    FlatList,
} from 'react-native';
import Carousel from '../components/Carousel';
import { theme } from '../assets/styles/styles';
import { TextInput } from 'react-native-gesture-handler';
import AutoCompleteInput from '../components/AutoCompleteInput';

const categories = ['MUSICA', 'AUTO', 'FIORI', 'ANIMAZIONE', 'FOTOGRAFI', 'TRUCCO', 'VIAGGI'];
const topLocations = [
    { id: '1', name: 'Sale ricevimenti' },
    { id: '2', name: 'Ville' },
    { id: '3', name: 'Dimore nobiliari' },
    { id: '4', name: 'Catering' },
];
const faqs = [
    {
        question: 'Quanto tempo prima del matrimonio devo iniziare a pianificare?',
        answer: 'L’ideale è iniziare almeno 12 mesi prima per avere la massima scelta di location e fornitori.'
    },
    {
        question: 'Cosa include il servizio di wedding planning?',
        answer: 'Include consulenza, progettazione, gestione fornitori, coordinamento e supporto nel giorno dell’evento.'
    },
    {
        question: 'È possibile organizzare matrimoni civili e religiosi?',
        answer: 'Sì, offriamo supporto sia per matrimoni civili che religiosi, anche simbolici.'
    },
    {
        question: 'Avete collaborazioni con location o fornitori specifici?',
        answer: 'Collaboriamo con una selezione esclusiva di location e fornitori affidabili.'
    },
    {
        question: 'Posso personalizzare ogni dettaglio del matrimonio?',
        answer: 'Assolutamente sì! Il nostro servizio è completamente su misura.'
    },
    {
        question: 'Come funziona il pagamento dei fornitori?',
        answer: 'Ogni fornitore ha il proprio sistema di pagamento, ma ti assistiamo nel coordinamento di tutto.'
    },
    {
        question: 'Offrite anche il coordinamento nel giorno del matrimonio?',
        answer: 'Sì, un nostro team sarà presente per assicurarsi che tutto fili liscio.'
    },
    {
        question: 'Cosa succede se piove il giorno del matrimonio?',
        answer: 'Valutiamo sempre un piano B insieme, con soluzioni al coperto o coperture eleganti.'
    },
];


const provinces = [
    "Agrigento",
    "Caltanissetta",
    "Catania",
    "Enna",
    "Messina",
    "Palermo",
    "Ragusa",
    "Siracusa",
    "Trapani",
];


const HomeScreen = ({ navigation }) => {
    const [expandedFAQ, setExpandedFAQ] = useState(null);
    return (
        <View style={{ flex: 1 }}>
            <ScrollView style={styles.container}>
                <View style={styles.header}>
                    <Image source={require('../assets/logo.png')} style={{ width: 150, height: 130 }} />
                </View>
                <View style={{ backgroundColor: 'white', paddingTop: 20, paddingBottom: 20 }}>

                    <Carousel images={[
                        require('../assets/wedding1.jpg'),
                        require('../assets/wedding2.jpg'),
                        require('../assets/wedding3.jpg')
                    ]} />

                    <Text style={styles.titleSearch}>Le nostre locations</Text>
                    <View style={{ flex: 1 }}>
                        <AutoCompleteInput
                            data={provinces}
                            placeholder="Cerca provincia..."
                        />
                    </View>
                    <FlatList
                        horizontal
                        data={topLocations}
                        renderItem={({ item, index }) => (
                            <TouchableOpacity
                                onPress={() => navigation.navigate('VilleList')} style={styles.locationContainer}>
                                <Text style={styles.locationText}>{item.name}</Text>
                            </TouchableOpacity>
                        )}
                        keyExtractor={(item) => item.id}
                        showsHorizontalScrollIndicator={false}
                    />

                    {/* Hero Image */}
                    <Image
                        source={require('../assets/villa4.jpg')}
                        style={styles.heroImage}
                        resizeMode="cover"
                    />
                    <View style={styles.categoryContainer}>
                        <FlatList
                            horizontal
                            data={categories}
                            renderItem={({ item, index }) => (
                                <View
                                    style={styles.categoryButton} >
                                    <Text style={styles.categoryText}>{item}</Text>
                                </View>
                            )}
                            keyExtractor={(item, index) => index.toString()}
                            showsHorizontalScrollIndicator={false}
                            contentContainerStyle={{ paddingHorizontal: 16 }}
                        />
                    </View>

                    {/* FAQ */}
                    <Text style={styles.titleSearch}>Q & A</Text>
                    {faqs.map((item, i) => (
                        <TouchableOpacity
                            key={i}
                            style={styles.faqItem}
                            onPress={() =>
                                setExpandedFAQ((prev) => (prev === i ? null : i))
                            }
                        >
                            <Text style={styles.faqQuestion}>{item.question}</Text>
                            {expandedFAQ === i && (
                                <Text style={styles.faqAnswer}>{item.answer}</Text>
                            )}
                        </TouchableOpacity>
                    ))}

                </View>

                {/* Footer */}
                <View style={styles.footer}>
                    <Text style={styles.footerText}>TALK TO US</Text>
                    <Text style={styles.footerText}>(+39) 328 556 2095</Text>
                    <Text style={styles.footerText}>info@designmyweddingevent.com</Text>
                    <Text style={styles.footerText}>📷  🟦</Text>
                </View>

            </ScrollView>
            <TouchableOpacity style={styles.fixedSignupButton} onPress={() => navigation.navigate('SignUp')}>
                <Text style={styles.signupButtonText}>SIGN UP</Text>
            </TouchableOpacity>
        </View>
    );
};

export default HomeScreen;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.primary,
    },
    titleSearch: {
        borderRadius: 10,
        fontSize: 25,
        fontWeight: 'bold',
        paddingHorizontal: 8,
        textAlign: 'center',
        marginHorizontal: 8,
        marginBottom: 4,
        marginTop: 8,
        color: theme.secondary,
    },
    sectionTitle: {
        borderWidth: 2,
        borderColor: 'white',
        backgroundColor: 'white',
        borderRadius: 10,
        fontSize: 18,
        fontWeight: 'bold',
        padding: 8,
        textAlign: 'center',
        margin: 8,
        color: theme.secondary,
    },
    heroImage: {
        width: '100%',
        height: 200,
        marginTop: 40,
    },
    categoryContainer: {
        backgroundColor: theme.secondary,
        marginBottom: 40,
        paddingVertical: 16,
    },
    categoryButton: {
        backgroundColor: 'rgba(255,255,255,0.3)',
        borderRadius: 30,
        paddingVertical: 10,
        paddingHorizontal: 14,
        margin: 4,
    },
    categoryText: {
        color: '#fff',
        fontWeight: 'bold',
    },
    faqQuestion: {
        color: theme.secondary,
        fontSize: 14,
        fontWeight: 'bold',
    },
    faqAnswer: {
        color: '#555',
        fontSize: 13,
        marginTop: 5,
    },
    faqItem: {
        backgroundColor: 'rgba(186, 206, 166, 0.3)',
        marginHorizontal: 15,
        marginVertical: 5,
        padding: 10,
        borderRadius: 5,
    },
    locationContainer: {
        borderRadius: 100,
        margin: 16,
        marginRight: 4,
        backgroundColor: theme.primary,
        width: 100,
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
    },
    locationText: {
        textAlign: 'center',
        color: 'white',
        fontWeight: 'bold'
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
        paddingTop: 20,
        paddingBottom: 10,
        paddingHorizontal: 15,
        backgroundColor: theme.primary,
        alignItems: 'center',
        borderBottomWidth: 1,
        borderColor: theme.secondary,
    },

    headerTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
        textTransform: 'uppercase',
    },
    fixedSignupButton: {
        position: 'absolute',
        bottom: 20,
        right: 0,
        transform: [{ translateX: -14 }],
        width: 100,
        backgroundColor: 'white',
        paddingVertical: 12,
        borderRadius: 30,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        alignItems: 'center',
    },
    signupButtonText: {
        color: theme.secondary,
        fontWeight: 'bold',
        fontSize: 16,
        letterSpacing: 1,
    },

});
