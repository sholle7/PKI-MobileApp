import React, { useEffect, useState } from 'react';
import { View, Text, Button, Image, StyleSheet } from 'react-native';
import { carts, orders, products } from '../database/database';
import { Cart } from '../models/Cart';
import { useNavigation } from '@react-navigation/native';
import { Order } from '../models/Order';

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
  CokoladaKolac, CokoladneBombice, MalineKolac, PrincesKrofne, VisnjaKolac ];

const CartPage = ({ route }: any) => {
  const loggedInUser = route.params.loggedInUser;
  const [cart, setCart] = useState<Cart | undefined>(undefined);
  const [totalPrice, setTotalPrice] = useState(0);
  const navigation = useNavigation();

  useEffect(() => {
    const userCart: Cart | undefined = carts.find(cart => cart.userId === loggedInUser?.id);
    setCart(userCart);
  }, []);

  useEffect(() => {
    if (!cart) return;

    let totalPrice = 0;

    for (const [productId, quantity] of cart.hashmapOfProducts) {
      const product = products.find(p => p.id === productId);
      if (product) {
        totalPrice += product.price * quantity;
      }
    }

    setTotalPrice(totalPrice);
  }, [cart]);

  const makeAnOrder = () => {
    const order = new Order(orders.length + 1, loggedInUser?.id ?? 0, cart?.id ?? 0, null)
    orders.push(order)
    
    for (const [productId, quantity] of cart?.hashmapOfProducts || []) {
      order.products.set(productId, quantity);
    }

    cart?.hashmapOfProducts.clear();

    const cartIndex = carts.findIndex(c => c.userId === loggedInUser?.id);
    if (cartIndex !== -1) {
      carts.splice(cartIndex, 1);
    }

    setCart(undefined);
    setTotalPrice(0);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Korpa</Text>
      <View style={styles.cartItems}>
        {cart?.hashmapOfProducts && Array.from(cart.hashmapOfProducts.entries()).map(([productId, quantity]) => {
          const product = products.find(p => p.id === productId);
          return (
            <View key={productId} style={styles.cartItem}>
              <Text style={styles.productName}>{product?.name}</Text>
              <Image source={images[productId - 1]} style={styles.productImage} />
              <Text style={{marginRight: 10}}>X {quantity}</Text>
              <Text>{product!.price * quantity} RSD</Text>
            </View>
          );
        })}
      </View>
      <Text style={styles.totalPrice}>Ukupno: {totalPrice} RSD</Text>
      <Button title="Poruči" onPress={makeAnOrder} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  cartItems: {
    marginBottom: 20,
  },
  cartItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  productName: {
    marginRight: 20,
    flex: 1,
  },
  productImage: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
  },
  totalPrice: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default CartPage;
