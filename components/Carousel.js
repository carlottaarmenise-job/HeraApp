import React from 'react';
import { View, ScrollView, Image, StyleSheet } from 'react-native';

const Carousel = ({ images }) => {
  return (
    <ScrollView
      horizontal
      pagingEnabled
      showsHorizontalScrollIndicator={false}
      style={styles.carousel}
    >
      {images.map((imgSrc, index) => (
        <Image key={index} source={imgSrc} style={styles.image} />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  carousel: {
    marginBottom: 15,
  },
  image: {
    width: 300,
    height: 180,
    marginRight: 10,
    borderRadius: 10,
  },
});

export default Carousel;
