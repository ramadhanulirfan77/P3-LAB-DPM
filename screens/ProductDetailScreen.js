import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const ProductDetailScreen = ({ route }) => {
  const { product } = route.params;

  return (
    <View style={styles.container}>
      <Image source={{ uri: product.image }} style={styles.image} />
      <Text style={styles.title}>{product.name}</Text>
      <Text style={styles.price}>{product.price}</Text>
      <Text style={styles.description}>{product.description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 10,
    marginBottom: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  price: {
    fontSize: 20,
    color: '#4caf50',
    marginBottom: 16,
  },
  description: {
    fontSize: 16,
    color: '#777',
    textAlign: 'center',
  },
});

export default ProductDetailScreen;
