import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const ProductList = ({ products, onSelect }) => {
  return (
    <View style={styles.container}>
      {products.map(product => (
        <TouchableOpacity key={product.id} style={styles.card} onPress={() => onSelect(product)}>
          <Image source={{ uri: product.image }} style={styles.image} />
          <View style={styles.info}>
            <Text style={styles.title}>{product.name}</Text>
            <Text style={styles.price}>{product.price}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#f9f9f9',
  },
  card: {
    flexDirection: 'row',
    marginBottom: 16,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 3,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 10,
  },
  info: {
    marginLeft: 16,
    justifyContent: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  price: {
    fontSize: 16,
    color: '#777',
  },
});

export default ProductList;
