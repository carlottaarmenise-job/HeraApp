import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { theme } from '../assets/styles/styles';

const MenuSelector = ({ category, items, selected, toggle }) => {
  return (
    <View style={styles.section}>
      <Text style={styles.category}>{category}</Text>
      {items.map((dish) => (
        <TouchableOpacity key={dish} style={styles.item} onPress={() => toggle(dish)}>
          <Text style={styles.itemText}>
            {selected[dish] ? '☑' : '☐'} {dish}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  section: {
    padding: 20,
    backgroundColor: 'white'
  },
  category: {
    fontSize: 18,
    fontWeight: 'bold',
    color: theme.primary,
    marginBottom: 10,
  },
  item: {
    paddingVertical: 4,
  },
  itemText: {
    color: 'gray',
    fontSize: 14,
  },
});

export default MenuSelector;
