import React from 'react';
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { products } from '../database/database';
import { Types } from '../models/Product';
import { useNavigation } from '@react-navigation/native';

const ParfeTorta = require("../assets/parfeTorta.jpg");
const CokoladnaTorta = require("../assets/cokoladnaTorta.jpg");
const VocnaTorta = require("../assets/vocnaTorta.jpg");
const RafaeloTorta = require("../assets/rafaeloTorta.jpg");
const ReformaTorta = require("../assets/reformaTorta.jpg");
const DobosTorta = require("../assets/dobosTorta.jpg");
const CakePopsKolac = require("../assets/cakePopsKolac.jpg");
const CokoladaKolac = require("../assets/cokoladaKolac.jpg");
const CokoladneBombice = require("../assets/cokoladneBombiceKolac.jpg");
const MalineKolac = require("../assets/malineKolac.jpg");
const PrincesKrofne = require("../assets/princesKrofneKolac.jpg");
const VisnjaKolac = require("../assets/visnjeKolac.jpg");
const images = [ ParfeTorta, CokoladnaTorta, VocnaTorta, RafaeloTorta, ReformaTorta, DobosTorta, CakePopsKolac,
  CokoladaKolac, CokoladneBombice, MalineKolac, PrincesKrofne, VisnjaKolac ]

const ProductsPage = () => {
  const torte = products.filter(product => product.type === Types.cake);
  const kolaci = products.filter(product => product.type === Types.pastry);
  const navigation = useNavigation();

  const navigateToProductDetails = (productId: number) => {
    navigation.navigate('ProductDetailsPage', { productId: productId });
  };

  const renderItem = ({ item }: any) => (
    <TouchableOpacity onPress={() => navigateToProductDetails(item.id)}>
      <View style={styles.item}>
        <Image source={images[item.id - 1]} style={styles.image} />
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.description}>{item.description}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.column}>
        <Text style={styles.header}>Torte</Text>
        <FlatList
          data={torte}
          renderItem={renderItem}
          keyExtractor={item => item.id.toString()}
        />
      </View>
      <View style={styles.column}>
        <Text style={styles.header}>Kolaci</Text>
        <FlatList
          data={kolaci}
          renderItem={renderItem}
          keyExtractor={item => item.id.toString()}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  column: {
    flex: 1,
    paddingHorizontal: 10,
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  item: {
    marginBottom: 20,
  },
  image: {
    width: '100%',
    height: 200,
    marginBottom: 10,
    resizeMode: 'cover',
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  description: {
    fontSize: 16,
  },
});

export default ProductsPage;
