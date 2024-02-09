import React, { useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { products } from '../database/database';

const ParfeTorta = require("../assets/parfeTorta.jpg");
const CokoladnaTorta = require("../assets/cokoladnaTorta.jpg");
const VocnaTorta = require("../assets/vocnaTorta.jpg");
const images = [ParfeTorta, CokoladnaTorta, VocnaTorta]

const BuyerPromotions = () => {
  const [productId, setProductId] = useState(1);

  useEffect(() => {
    const intervalId = setInterval(() => {
      handleRightIconClick();
    }, 3000);

    return () => clearInterval(intervalId);
  }, [productId]);

  const handleLeftIconClick = () => {
    if (productId > 1) {
      setProductId(productId - 1);
    } else {
      setProductId(3);
    }
  };

  const handleRightIconClick = () => {
    if (productId < 3) {
      setProductId(productId + 1);
    } else {
      setProductId(1);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.productsWrapper}>
        <Text style={styles.productName}>{products[productId - 1].name}</Text>
        <Image
         source={images[productId - 1]}
         style={styles.productImage}
        />
        <View style={styles.descriptionWrapper}>
          <Text style={styles.productDescription}>{products[productId - 1].description}</Text>
        </View>
      </View>

      <TouchableOpacity onPress={handleLeftIconClick} style={styles.leftArrowButton}>
        <Text style={styles.arrowText}>◄</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleRightIconClick} style={styles.rightArrowButton}>
        <Text style={styles.arrowText}>►</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  productsWrapper: {
    alignItems: 'center',
  },
  productName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  productImage: {
    width: 200,
    height: 200,
    marginBottom: 10,
  },
  descriptionWrapper: {
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  productDescription: {
    fontSize: 16,
    textAlign: 'center',
  },
  leftArrowButton: {
    position: 'absolute',
    top: '50%',
    left: '0%',
    paddingHorizontal: 20,
  },
  rightArrowButton: {
    position: 'absolute',
    top: '50%',
    right: '0%',
    paddingHorizontal: 20,
  },
  arrowText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default BuyerPromotions;
