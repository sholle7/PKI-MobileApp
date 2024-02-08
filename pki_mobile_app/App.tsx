// App.js
import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Header from './components/Header';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screens/LoginScreen';
import ProductsPage from './screens/ProductsPage';
import ContactPage from './screens/ContactPage';
import CartPage from './screens/CartPage';
import NotificationPage from './screens/NotificationPage';
import ProfilePage from './screens/ProfilePage';
import PromotionPage from './screens/PromotionPage';

const Stack = createNativeStackNavigator();

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
  };

  return (
    <View style={styles.container}>
      <NavigationContainer>
      <Header isLoggedIn={isLoggedIn} />
        <Stack.Navigator>
          <Stack.Screen 
            name="LoginScreenPage" 
            options={{ headerShown: false }}
          >
            {props => <LoginScreen {...props} onLoginSuccess={handleLoginSuccess} />}
          </Stack.Screen>
          
          <Stack.Screen 
            name="PromotionPage" 
            component={PromotionPage} 
            options={{ headerShown: false }} 
          />
          <Stack.Screen 
            name="ProductsPage" 
            component={ProductsPage} 
            options={{ headerShown: false }} 
          />     
             <Stack.Screen 
            name="ContactPage" 
            component={ContactPage} 
            options={{ headerShown: false }} 
          />
          <Stack.Screen 
            name="CartPage" 
            component={CartPage} 
            options={{ headerShown: false }} 
          />
          <Stack.Screen 
            name="NotificationPage" 
            component={NotificationPage} 
            options={{ headerShown: false }} 
          />
          <Stack.Screen 
            name="ProfilePage" 
            component={ProfilePage} 
            options={{ headerShown: false }} 
          />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
