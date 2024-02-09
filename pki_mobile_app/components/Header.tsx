import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Modal } from 'react-native';
import Icon from 'react-native-vector-icons/Octicons';
import { useNavigation } from '@react-navigation/native';

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
        <>
          <View style={{ flex: 1 }} />
          <TouchableOpacity onPress={toggleMenu} style={styles.hamburgerContainer}>
            <Icon 
              name='three-bars' 
              size={30} 
              color='#000' 
            />
          </TouchableOpacity>
        </>
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
          <TouchableOpacity style={styles.menuItem} onPress={() => navigateToPage('PromotionPage')}>
            <Text style={styles.text}>Promocije</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem} onPress={() => navigateToPage('ProductsPage')}>
            <Text style={styles.text}>Proizvodi</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem} onPress={() => navigateToPage('ContactPage')}>
            <Text style={styles.text}>Kontakt</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem} onPress={() => navigateToPage('CartPage')}>
            <Text style={styles.text}>Korpa</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem} onPress={() => navigateToPage('NotificationPage')}>
            <Text style={styles.text}>Obavestenje</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem} onPress={() => navigateToPage('ProfilePage')}>
            <Text style={styles.text}>Profil</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#e0c0c0',
    color: 'white'
  },
  logoContainer: {},
  logo: {
    width: 100, 
    height: 60
  },
  hamburgerContainer: {
    marginRight: 10
  },
  menuModal: {
    backgroundColor: '#af4242',
    padding: 20,
    marginTop: 50,
    gap: 20,
  },
  menuItem: {
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    paddingBottom: 10,
  },
  text: {
    color: "white",
    textAlign: 'center'
  }
});

export default Header;
