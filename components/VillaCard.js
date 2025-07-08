import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { theme } from '../assets/styles/styles';

const VillaCard = ({ item }) => {
    const navigation = useNavigation();
    return (
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
    );
};

const styles = StyleSheet.create({
    card: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        marginHorizontal: 15,
        marginBottom: 15,
        borderRadius: 10,
        overflow: 'hidden',
        elevation: 2,
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
});

export default VillaCard;
