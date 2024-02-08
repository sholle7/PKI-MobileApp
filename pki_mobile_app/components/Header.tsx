import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const Header = () => {
  return (
    <View style={styles.header}>
      <View style={styles.logoContainer}>
        <Image
          source={require('../assets/LogoWeb.png')} 
          style={styles.logo}
          resizeMode="contain" 
        />
      </View>
      <View style={styles.menuContainer}>
        <Text>Hamburger Meni</Text>
      </View>
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
  logoContainer: {
  },
  logo: {
    width: 100, 
    height: 60,
  },
  menuContainer: {
  }
});

export default Header;
