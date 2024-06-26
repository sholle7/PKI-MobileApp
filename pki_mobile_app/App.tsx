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
import { User } from './models/User';
import ProductDetailsPage from './screens/ProductDetailsPage';

const Stack = createNativeStackNavigator();

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loggedInUser, setLoggedInUser] = useState<User | null>(null);

  const handleLoginSuccess = (user: User) => {
    setIsLoggedIn(true);
    setLoggedInUser(user);
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
            initialParams={{ loggedInUser: loggedInUser }}
          />
          <Stack.Screen 
            name="ProductsPage" 
            component={ProductsPage} 
            options={{ headerShown: false }} 
            initialParams={{ loggedInUser: loggedInUser }}
          />     
          <Stack.Screen
            name="ProductDetailsPage"
            component={ProductDetailsPage}
            options={{ headerShown: false }} 
            initialParams={{ loggedInUser: loggedInUser }}
          />
          <Stack.Screen 
            name="ContactPage" 
            component={ContactPage} 
            options={{ headerShown: false }} 
            initialParams={{ loggedInUser: loggedInUser }}
          />
          <Stack.Screen 
            name="CartPage" 
            component={CartPage} 
            options={{ headerShown: false }} 
            initialParams={{ loggedInUser: loggedInUser }}
          />
          <Stack.Screen 
            name="NotificationPage" 
            component={NotificationPage} 
            options={{ headerShown: false }} 
            initialParams={{ loggedInUser: loggedInUser }}
          />
          <Stack.Screen 
            name="ProfilePage" 
            component={ProfilePage} 
            options={{ headerShown: false }} 
            initialParams={{ loggedInUser: loggedInUser }}
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