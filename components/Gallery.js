import React, { useState } from 'react';
import { View, Image, TouchableOpacity, ScrollView, StyleSheet, Dimensions } from 'react-native';
import ImageViewing from 'react-native-image-viewing';

const rawImages = [
  { id: 'img1', src: require('../assets/villa1.jpg') },
  { id: 'img2', src: require('../assets/villa2.jpg') },
  { id: 'img3', src: require('../assets/villa3.jpg') },
  { id: 'img4', src: require('../assets/villa4.jpg') },
  { id: 'img5', src: require('../assets/wedding1.jpg') },
  { id: 'img6', src: require('../assets/wedding2.jpg') },
];

// Risolviamo gli URI una sola volta
const images = rawImages.map((img) => ({
  id: img.id,
  uri: Image.resolveAssetSource(img.src).uri,
}));

export default function App() {
  const [visible, setVisible] = useState(false);
  const [index, setIndex] = useState(0);

  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.gallery}
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        {images.map((img, i) => (
          <TouchableOpacity
            key={img.id}
            activeOpacity={0.8}
            onPress={() => {
              setIndex(i);
              setVisible(true);
            }}
            style={styles.imageWrapper}
          >
            <Image source={{ uri: img.uri }} style={styles.thumbnail} />
          </TouchableOpacity>
        ))}
      </ScrollView>

      <ImageViewing
        images={images}
        imageIndex={index}
        visible={visible}
        onRequestClose={() => setVisible(false)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  gallery: {
    paddingVertical: 20,
    paddingHorizontal: 10,
    alignItems: 'center',
  },
  imageWrapper: {
    marginHorizontal: 8,
    borderRadius: 12,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    backgroundColor: 'white',
  },
  thumbnail: {
    width: 140,
    height: 140,
    borderRadius: 12,
  },
});
