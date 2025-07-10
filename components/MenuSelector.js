import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, FlatList } from 'react-native';
import { theme } from '../assets/styles/styles';

const MenuSelector = ({ category, items, selected, toggle }) => {
  const renderItem = ({ item }) => {
    const isSelected = selected[item.id];

    return (
      <TouchableOpacity style={[styles.card, isSelected && styles.cardSelected]} onPress={() => toggle(item.id)}>
        <Image source={item.image} style={styles.image} resizeMode="cover" />
        <View style={styles.cardContent}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.description}>{item.description}</Text>
          <Text style={styles.checkbox}>{isSelected ? '☑' : '☐'}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.section}>
      <Text style={styles.category}>{category}</Text>
      <FlatList
        data={items}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
        numColumns={2}
        columnWrapperStyle={styles.row}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  section: {
    paddingVertical: 12,
  },
  category: {
    fontSize: 20,
    fontWeight: 'bold',
    color: theme.secondary,
    marginBottom: 12,
    textAlign: 'center',
  },
  list: {
    paddingHorizontal: 8,
  },
  row: {
    justifyContent: 'space-between',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 8,
    marginBottom: 12,
    width: '48%',
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
  },
  cardSelected: {
    borderColor: theme.primary,
    borderWidth: 2,
  },
  image: {
    width: '100%',
    height: 100,
    borderRadius: 8,
  },
  cardContent: {
    marginTop: 8,
    alignItems: 'center',
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    textAlign: 'center',
  },
  description: {
    fontSize: 14,
    color: '#777',
    marginVertical: 4,
    textAlign: 'center',
  },
  checkbox: {
    fontSize: 18,
    color: theme.primary,
    marginTop: 4,
  },
});

export default MenuSelector;
