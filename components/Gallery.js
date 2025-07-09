// App.js
import React, { useState } from 'react';
import { View, Image, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import ImageViewing from 'react-native-image-viewing';

const images = [
  { uri: 'https://picsum.photos/id/1011/600/800' },
  { uri: 'https://picsum.photos/id/1012/600/800' },
  { uri: 'https://picsum.photos/id/1015/600/800' },
];

export default function App() {
  const [visible, setVisible] = useState(false);
  const [index, setIndex] = useState(0);

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.gallery} horizontal>
        {images.map((img, i) => (
          <TouchableOpacity key={i} onPress={() => { setIndex(i); setVisible(true); }}>
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
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  gallery: { paddingVertical: 20 },
  thumbnail: { width: 120, height: 120, marginHorizontal: 10, borderRadius: 8 },
});
