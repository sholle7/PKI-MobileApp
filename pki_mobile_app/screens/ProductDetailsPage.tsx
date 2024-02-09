import React, { useEffect, useState } from 'react';
import { ScrollView, View, Text, TouchableOpacity, Image, StyleSheet, TextInput, Button } from 'react-native';
import { comments, products, carts, users } from '../database/database';
import { Comment } from '../models/Comment';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { Cart } from '../models/Cart';

// Import slika
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

const ProductDetailsPage = ({ route }: any) => {
  const productId  = route.params.productId;
  const product = products.find((p) => p.id === productId);
  const loggedInUser = route.params.loggedInUser;
  const [productComments, setProductComments] = useState<Comment[] | undefined>(undefined)
  const [newComment, setNewComment] = useState("")
  const [quantity, setQuantity] = useState(0);
  const navigation = useNavigation();

  useEffect(()=>{
    setProductComments(comments?.filter(comment => comment.productId == parseInt(productId)))
  }, [])

  const handleAddToCart = () => {
    if (quantity == 0) return;
    const userCartIndex = carts.findIndex(cart => cart.userId === loggedInUser.id);

    if (userCartIndex !== -1) {
      carts[userCartIndex].hashmapOfProducts.set(productId, (carts[userCartIndex].hashmapOfProducts.get(productId) || 0) + quantity);
    } 
    else {
      const newCart: Cart = {
        id: carts.length + 1,
        userId: loggedInUser.id,
        hashmapOfProducts: new Map([[productId, quantity]])
      };
      carts.push(newCart);
    }

    setQuantity(0);
  };

  const addComment = () => {
    if (newComment.trim() !== "") {
      const newCommentObject: Comment = {
        userId: loggedInUser.id,
        productId: productId,
        text: newComment.trim()
      };
      comments.push(newCommentObject);
      setNewComment("");
      setProductComments([...(productComments || []), newCommentObject]);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backIcon}>
        <Ionicons name="arrow-back" size={24} color="black" />
      </TouchableOpacity>
      <View style={styles.productDetails}>
        <Image source={images[productId]} style={styles.productImage} />
        <Text style={styles.productName}>{product?.name}</Text>
        <Text style={styles.productDescription}>{product?.description}</Text>
        <Text style={styles.productDescription}>Cena: {product?.price} RSD</Text>
        <View style={styles.cartControl}>
          <TouchableOpacity onPress={() => setQuantity(quantity > 0 ? quantity - 1 : 0)}>
            <Ionicons name="remove-circle-outline" size={24} color="black" />
          </TouchableOpacity>
          <Text style={styles.quantity}>{quantity}</Text>
          <TouchableOpacity onPress={() => setQuantity(quantity + 1)}>
            <Ionicons name="add-circle-outline" size={24} color="black" />
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={handleAddToCart} style={styles.addToCartButton}>
          <Text style={styles.addToCartText}>Dodaj u korpu</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.commentsContainer}>
        <Text style={styles.commentsTitle}>Komentari</Text>
        {productComments && productComments.map((comment, index) => (
          <View key={index} style={styles.commentItem}>
            <Text>{users.find(user => user.id == comment.userId)?.username}</Text>
            {'\n'}
            <Text>{comment.text}</Text>
          </View>
        ))}
        <TextInput
          style={styles.commentInput}
          placeholder="Unesite komentar"
          value={newComment}
          onChangeText={(text) => setNewComment(text)}
        />
        <Button title="Dodaj komentar" onPress={addComment} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
  backIcon: {
    position: 'absolute',
    top: 20,
    left: 20,
    zIndex: 1,
  },
  productDetails: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  productImage: {
    width: '80%',
    height: 200,
    resizeMode: 'cover',
    marginBottom: 20,
  },
  productName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  productDescription: {
    fontSize: 16,
    textAlign: 'center',
  },
  cartControl: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  quantity: {
    fontSize: 20,
    marginHorizontal: 10,
  },
  addToCartButton: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  addToCartText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  commentsContainer: {
    padding: 20,
  },
  commentsTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  commentItem: {
    marginBottom: 10,
    borderWidth: 1,
    borderColor: 'lightgray',
    padding: 10,
    borderRadius: 5,
  },
  commentInput: {
    borderWidth: 1,
    borderColor: 'lightgray',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
});

export default ProductDetailsPage;
