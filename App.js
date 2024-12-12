import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ProductListScreen from './screens/ProductListScreen';
import ProductDetailScreen from './screens/ProductDetailScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerStyle: { backgroundColor: '#4caf50' }, headerTintColor: '#fff' }}>
        <Stack.Screen name="ProductList" component={ProductListScreen} options={{ title: 'Product Catalog' }} />
        <Stack.Screen name="ProductDetail" component={ProductDetailScreen} options={{ title: 'Product Details' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
