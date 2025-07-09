import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { theme } from '../assets/styles/styles';

const VillaCard = ({ item, index }) => {
    const navigation = useNavigation();
    return (
        <>
            <View style={[(index + 1) > 4 ? styles.locationContainer : styles.locationContainer4]}>
                <Text style={styles.locationText}>{index + 1}</Text>
            </View>
            <TouchableOpacity
                style={styles.card}
                onPress={() => navigation.navigate('VillaDetail')}>
                <Image source={item.image} style={styles.image} />
                <View style={styles.info}>
                    <Text style={styles.title}>{item.nome}</Text>
                    <Text style={styles.location}>{item.location}</Text>
                    <Text style={styles.rating}>{'★'.repeat(item.rating)}</Text>
                </View>
            </TouchableOpacity>
        </>
    );
};

const styles = StyleSheet.create({
    card: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        marginHorizontal: 15,
        marginBottom: 15,
        borderRadius: 10,
        elevation: 2,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
    },
    image: {
        width: 120,
        height: 120,
    },
    info: {
        flex: 1,
        padding: 10,
        justifyContent: 'center',
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        color: theme.primary,
    },
    location: {
        fontSize: 14,
        color: '#555',
        marginTop: 4,
    },
    rating: {
        marginTop: 6,
        color: '#f1c40f',
        fontSize: 16,
    },
    locationContainer4: {
        position: 'absolute',
        zIndex: 2,
        top: -8,
        left: 8,
        borderRadius: 100,
        backgroundColor: theme.secondary,
        width: 30,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
    },
    locationContainer: {
        position: 'absolute',
        zIndex: 2,
        top: -8,
        left: 8,
        borderRadius: 100,
        backgroundColor: theme.primary,
        width: 30,
        height: 30,
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
});

export default VillaCard;
