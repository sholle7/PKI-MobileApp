import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import LoginScreen from './screens/LoginScreen';
import Header from './components/Header';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProductsPage from './screens/ProductsPage';
import ProfilePage from './screens/ProfilePage';
import NotificationPage from './screens/NotificationPage';
import CartPage from './screens/CartPage';
import ContactPage from './screens/ContactPage';
import PromotionPage from './screens/PromotionPage';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen 
            name="LoginScreenPage" 
            component={LoginScreen} 
            options={{ headerShown: false }}
          />
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
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
