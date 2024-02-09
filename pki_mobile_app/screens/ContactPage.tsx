import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const ContactPage = () => {
  return (
    <View style={styles.container}>
      <View style={styles.background}>
        <View style={styles.column}>
          <View style={styles.content}>
            <Text style={styles.label}>Kontakt telefon:</Text>
            <Text style={styles.label}>Email adresa:</Text>
            <Text style={styles.label}>Radno vreme:</Text>
          </View>
        </View>
        <View style={styles.column}>
          <View style={styles.content}>
            <Text style={styles.value}>+38169585262</Text>
            <Text style={styles.value}>slatkizalogaji@gmail.com</Text>
            <Text style={styles.value}>
              Ponedeljak - Petak: 9:00 - 18:00
              {'\n'}
              Subota - Nedelja: Zatvoreno
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  background: {
    backgroundColor: "#754949", 
    flexDirection: 'row',
  },
  column: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  content: {
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#ffffff',
  },
  value: {
    fontSize: 16,
    marginBottom: 10,
    color: '#ffffff',
  },
});

export default ContactPage;
