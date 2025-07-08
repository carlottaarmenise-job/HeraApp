import React, { useRef, useEffect, useState } from 'react';
import { ScrollView, Image, StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const Carousel = ({ images }) => {
  const scrollViewRef = useRef();
  const [currentIndex, setCurrentIndex] = useState(0);

  const imagesForLoop = [...images, images[0]];

  useEffect(() => {
    const interval = setInterval(() => {
      let nextIndex = currentIndex + 1;

      if (nextIndex > images.length) {
        scrollViewRef.current.scrollTo({ x: 0, animated: false });
        nextIndex = 1; 
      }

      setCurrentIndex(nextIndex);

      scrollViewRef.current.scrollTo({
        x: nextIndex * width,
        animated: true,
      });
    }, 2500);

    return () => clearInterval(interval);
  }, [currentIndex, images.length]);

  return (
    <ScrollView
      ref={scrollViewRef}
      horizontal
      pagingEnabled
      showsHorizontalScrollIndicator={false}
      style={styles.carousel}
      scrollEnabled={false} 
    >
      {imagesForLoop.map((imgSrc, index) => (
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
    width: width,
    height: 180,
    borderRadius: 10,
    paddingHorizontal:16
  },
});

export default Carousel;
