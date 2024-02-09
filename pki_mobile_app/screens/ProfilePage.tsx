import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text } from 'react-native';
import { users } from '../database/database';
import { User } from '../models/User';

const ProfilePage = ({ route } : any) => {
  const loggedInUser = route.params.loggedInUser;

  const [username, setUsername] = useState(loggedInUser.username);
  const [firstName, setFirstName] = useState(loggedInUser.firstName);
  const [lastName, setLastName] = useState(loggedInUser.lastName);
  const [address, setAddress] = useState(loggedInUser.address);
  const [phoneNumber, setPhoneNumber] = useState(loggedInUser.contactNumber);
  const [currentPassword, setCurrentPassword] = useState(loggedInUser.password);
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');
  
  const handleSave = () => {
    const user: User | undefined = users.find(user => user.username === username);
    if(user!= undefined && user != null){
      user!.firstName = firstName;
      user!.lastName = lastName;
      user!.address = address;
      user!.contactNumber = phoneNumber;
      if(newPassword == confirmNewPassword) {
        user!.password = newPassword
      }
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Korisničko ime:</Text>
      <TextInput
        style={styles.input}
        placeholder="Korisničko ime"
        value={username}
        onChangeText={setUsername}
        editable={false}
      />
      <Text style={styles.label}>Ime:</Text>
      <TextInput
        style={styles.input}
        placeholder="Ime"
        value={firstName}
        onChangeText={setFirstName}
      />
      <Text style={styles.label}>Prezime:</Text>
      <TextInput
        style={styles.input}
        placeholder="Prezime"
        value={lastName}
        onChangeText={setLastName}
      />
      <Text style={styles.label}>Adresa:</Text>
      <TextInput
        style={styles.input}
        placeholder="Adresa"
        value={address}
        onChangeText={setAddress}
      />
      <Text style={styles.label}>Kontakt telefon:</Text>
      <TextInput
        style={styles.input}
        placeholder="Kontakt telefon"
        value={phoneNumber}
        onChangeText={setPhoneNumber}
      />
      <Text style={styles.label}>Trenutna lozinka:</Text>
      <TextInput
        style={styles.input}
        placeholder="Trenutna lozinka"
        secureTextEntry={true}
        value={currentPassword}
        onChangeText={setCurrentPassword}
      />
      <Text style={styles.label}>Nova lozinka:</Text>
      <TextInput
        style={styles.input}
        placeholder="Nova lozinka"
        secureTextEntry={true}
        value={newPassword}
        onChangeText={setNewPassword}
      />
      <Text style={styles.label}>Ponovite novu lozinku:</Text>
      <TextInput
        style={styles.input}
        placeholder="Ponovite novu lozinku"
        secureTextEntry={true}
        value={confirmNewPassword}
        onChangeText={setConfirmNewPassword}
      />
      <Button
        title="Sačuvaj"
        onPress={handleSave}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  input: {
    width: '100%',
    marginBottom: 10,
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
});

export default ProfilePage;
