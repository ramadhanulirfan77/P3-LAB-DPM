import React, { useState, useEffect } from 'react';
import { View, StyleSheet, ScrollView, Button, ActivityIndicator } from 'react-native';
import { products } from '../data/products';
import ProductList from '../components/ProductList';

const ProductListScreen = ({ navigation }) => {
  const [productData, setProductData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = () => {
    setLoading(true);
    setTimeout(() => {
      setProductData(products);
      setLoading(false);
    }, 1000);
  };

  const handleProductSelect = product => {
    navigation.navigate('ProductDetail', { product });
  };

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#4caf50" />
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <ProductList products={productData} onSelect={handleProductSelect} />
      <View style={styles.buttonContainer}>
        <Button title="Refresh" onPress={fetchProducts} color="#4caf50" />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#e0f7fa',
  },
  buttonContainer: {
    marginTop: 16,
    alignItems: 'center',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e0f7fa',
  },
});

export default ProductListScreen;
