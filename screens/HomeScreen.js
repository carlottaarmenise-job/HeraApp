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

const categories = ['VILLE', 'SALE', 'DIMORE', 'CATERING'];
const topLocations = [
    { id: '1', image: require('../assets/villa1.jpg') },
    { id: '2', image: require('../assets/villa2.jpg') },
    { id: '3', image: require('../assets/villa3.jpg') },
    { id: '4', image: require('../assets/villa4.jpg') },
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


const HomeScreen = ({ navigation }) => {
    const [expandedFAQ, setExpandedFAQ] = useState(null);
    return (
        <View style={{ flex: 1 }}>
            <ScrollView style={styles.container}>
                <View style={styles.header}>
                    <Image source={require('../assets/logo.png')} style={{
                        width: 150, height: 130, shadowColor: 'black',
                        shadowOffset: { width: 0, height: 2 },
                        shadowOpacity: 0.25,
                        shadowRadius: 3.84
                    }} />
                </View>

                <Carousel images={[
                    require('../assets/wedding1.jpg'),
                    require('../assets/wedding2.jpg'),
                    require('../assets/wedding3.jpg')
                ]} />
                <Text style={styles.sectionTitle}>TOP LOCATION</Text>
                <FlatList
                    horizontal
                    data={topLocations}
                    renderItem={({ item, index }) => (
                        <View style={{ backgroundColor: 'white', paddingBottom: 16, marginRight: 10, }}>
                            <Image source={item.image} style={styles.carouselImage} />
                            <View style={{ alignItems: 'center', marginTop: 4 }}>
                                <Text style={{ textAlign: 'center', paddingTop: 6, backgroundColor: '#D1AC3C', width: 30, height: 30, borderRadius: 100, color: 'white' }}>{index + 1}</Text>
                            </View>
                        </View>
                    )}
                    keyExtractor={(item) => item.id}
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={{ paddingHorizontal: 10 }}
                />

                {/* Hero Image */}
                <Image
                    source={require('../assets/villa4.jpg')}
                    style={styles.heroImage}
                    resizeMode="cover"
                />

                {/* Category Buttons */}
                <View style={styles.categoryContainer}>
                    {categories.map((cat, index) => (
                        <TouchableOpacity
                            key={index}
                            style={styles.categoryButton}
                            onPress={() => navigation.navigate('VilleList')}
                        >
                            <Text style={styles.categoryText}>{cat}</Text>
                        </TouchableOpacity>
                    ))}
                </View>

                {/* FAQ */}
                <Text style={styles.sectionTitle}>Q & A</Text>
                {faqs.map((item, i) => (
                    <TouchableOpacity
                        key={i}
                        style={styles.faqItem}
                        onPress={() =>
                            setExpandedFAQ((prev) => (prev === i ? null : i))
                        }
                    >
                        <Text style={styles.faqQuestion}>• {item.question}</Text>
                        {expandedFAQ === i && (
                            <Text style={styles.faqAnswer}>{item.answer}</Text>
                        )}
                    </TouchableOpacity>
                ))}

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
        backgroundColor: '#D1AC3C',
    },
    sectionTitle: {
        borderWidth: 2,
        borderColor: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        padding: 8,
        textAlign: 'center',
        margin: 8,
        color: 'white',
    },
    carouselImage: {
        width: 120,
        height: 120,
        padding: 8
    },
    heroImage: {
        width: '100%',
        height: 200,
        marginTop: 20,
    },
    categoryContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginVertical: 20,
    },
    categoryButton: {
        backgroundColor: 'white',
        borderRadius: 30,
        paddingVertical: 10,
        paddingHorizontal: 15,
    },
    categoryText: {
        color: '#D1AC3C',
        fontWeight: 'bold',
    },
    faqQuestion: {
        color: '#333',
        fontSize: 14,
        fontWeight: 'bold',
    },
    faqAnswer: {
        color: '#555',
        fontSize: 13,
        marginTop: 5,
    },
    faqItem: {
        backgroundColor: '#fff',
        marginHorizontal: 15,
        marginVertical: 5,
        padding: 10,
        borderRadius: 5,
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
    header: {
        paddingTop: 20,
        marginBottom: 20,
        paddingHorizontal: 15,
        backgroundColor: '#D1AC3C',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderColor: '#fff',
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
        color: '#D1AC3C',
        fontWeight: 'bold',
        fontSize: 16,
        letterSpacing: 1,
    },

});
