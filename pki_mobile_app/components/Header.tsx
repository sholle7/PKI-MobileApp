import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Modal } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/Octicons';
import { useNavigation } from '@react-navigation/native';

const Stack = createNativeStackNavigator();

const Header = ({ isLoggedIn }: any) => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const navigation = useNavigation();

  const toggleMenu = () => {
    setIsMenuVisible(!isMenuVisible);
  };

  const navigateToPage = (pageName: string) => {
    setIsMenuVisible(false);
    navigation.navigate(pageName);
  };

  return (
    <View style={styles.header}>
      <View style={styles.logoContainer}>
        <Image
          source={require('../assets/LogoWeb.png')} 
          style={styles.logo}
          resizeMode="contain" 
        />
      </View>
      {isLoggedIn && (
        <TouchableOpacity onPress={toggleMenu}>
          <Icon 
            name='three-bars' 
            size={30} 
            color='#000' 
          />
        </TouchableOpacity>
      )}
      <Modal
        animationType="slide"
        transparent={true}
        visible={isMenuVisible}
        onRequestClose={() => {
          setIsMenuVisible(false);
        }}
      >
        <View style={styles.menuModal}>
          <TouchableOpacity onPress={() => navigateToPage('PromotionPage')}>
            <Text>Promocije</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigateToPage('ProductsPage')}>
            <Text>Proizvodi</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigateToPage('ContactPage')}>
            <Text>Kontakt</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigateToPage('CartPage')}>
            <Text>Korpa</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigateToPage('NotificationPage')}>
            <Text>Obavestenje</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigateToPage('ProfilePAge')}>
            <Text>Profil</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#e0c0c0',
    color: 'white'
  },
  logoContainer: {},
  logo: {
    width: 100, 
    height: 60,
  },
  menuModal: {
    backgroundColor: 'white',
    padding: 20,
    marginTop: 50,
  },
});

export default Header;
