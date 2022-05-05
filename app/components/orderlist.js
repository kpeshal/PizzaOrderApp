import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Pressable,
  Alert,
} from "react-native";
import styles from "../styles/styles";
import { Entypo } from "@expo/vector-icons";
import CheckOut from "../components/checkout";
import toppings from "../data/toppings";

const OrderList = (props) => {
  const { order, resetOrders, deleteOrder } = props;

  const [modalVisible, setModalVisible] = useState(false);

  const onSelect = () => {
    if (order.length > 0) {
      setModalVisible(true);
    } else {
      alert("Please select pizza from menu first");
    }
  };

  const onModalClose = () => {
    setModalVisible(false);
  };

  const refreshOrders = () => {
    resetOrders();
  };

  const removeOrder = (item) => {
    Alert.alert("Remove Order", "Are You Sure You Want To Remove This Order?", [
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel",
      },
      { text: "OK", onPress: () => deleteOrder(item) },
    ]);
  };

  const renderItem = ({ item }) => {
    return (
      <View style={styles.myordercard}>
        <View>
          <Text style={styles.title}>{item.pizza}</Text>
          {item.toppings.length ? (
            <Text style={styles.myOrderExtra}>
              {" "}
              Add {item.toppings.toString()}
            </Text>
          ) : null}
          <Text style={styles.myOrderTotal}>Total - ${item.price}</Text>
        </View>
        <Pressable onPress={() => removeOrder(item)}>
          <Entypo name="trash" size={30} color="red" />
        </Pressable>
      </View>
    );
  };

  return (
    <View style={styles.myOrdersContainerStyle}>
      {order.length > 0 && (
        <View style={{ alignItems: "center" }}>
          <Text style={styles.totalPrice}>
            $
            {order.reduce((accumulator, x) => {
              return accumulator + x.price;
            }, 0)}
          </Text>
        </View>
      )}
      {modalVisible && (
        <CheckOut
          modalVisible={modalVisible}
          onModalClose={onModalClose}
          clearOrders={refreshOrders}
        />
      )}

      {order.length ? (
        <FlatList
          data={order}
          renderItem={renderItem}
          keyExtractor={(item) => item.pizza + 1}
          style={styles.menuContainer}
        />
      ) : (
        <View
          style={{ justifyContent: "center", flex: 1, alignItems: "center" }}
        >
          <Text style={styles.activeTabTextStyle}>No Pizza Selected !!!</Text>
        </View>
      )}

      <TouchableOpacity
        style={[styles.checkoutButton]}
        accessible={true}
        onPress={onSelect}
        activeOpacity={1}
      >
        <Entypo
          name="shopping-cart"
          size={23}
          color="white"
          style={{ marginRight: 5 }}
        />
        <Text style={styles.textStyle}>Checkout</Text>
      </TouchableOpacity>
    </View>
  );
};

export default OrderList;
