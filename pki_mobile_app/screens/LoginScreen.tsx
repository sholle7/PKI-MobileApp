// LoginScreen.js
import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ImageBackground, Image, Dimensions } from 'react-native';
import { users } from '../database/database';

const Background = require("../assets/BackgroundWeb.png");
const { width, height } = Dimensions.get('window');

const LoginScreen = ({ navigation, onLoginSuccess }: any) => {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleLogin = () => {
    const user = users.find(user => user.username === username && user.password === password);
    if (user != null) {
      onLoginSuccess(user);
      navigation.navigate('PromotionPage');
    }
  };

  return (
    <View style={styles.backGroundContainer}>
      <ImageBackground source={Background} style={styles.backgroundImage}>
        <View style={styles.container}>
          <Text style={styles.titles}>Korisničko ime:</Text>
          <TextInput
            style={styles.input}
            placeholder="Unesite korisničko ime"
            onChangeText={setUsername}
            value={username}
          />

          <Text style={styles.titles}>Lozinka:</Text>
          <TextInput
            style={styles.input}
            placeholder="Unesite lozinku"
            onChangeText={setPassword}
            value={password}
            secureTextEntry
          />
          <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  backGroundContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    opacity: 0.7,
    width: width,
    height: height
  },
  titles: {
    fontSize: 40,
    marginBottom: 20,
    fontWeight: "bold",
  },
  input: {
    width: '100%',
    height: 50,
    borderWidth: 1,
    color: "#fff",
    borderRadius: 5,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  button: {
    width: '100%',
    height: 50,
    backgroundColor: '#21947e',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginTop: 20
  },
  buttonText: {
    color: '#fff',
    fontSize: 18
  }
});

export default LoginScreen;
