import React, { useState } from "react";
import { View, Text, TouchableOpacity, FlatList } from "react-native";
import styles from "../styles/styles";
import { Entypo } from "@expo/vector-icons";
import CheckOut from "../components/checkout";

const renderItem = ({ item }) => {
  return (
    <View style={styles.myordercard}>
      <Text style={styles.title}>{item.pizza}</Text>
      {item.toppings.length ? (
        <Text style={styles.myOrderExtra}> Add {item.toppings.toString()}</Text>
      ) : null}
      <Text style={styles.myOrderTotal}>Total - {10}</Text>
    </View>
  );
};

const OrderList = (props) => {
  const { order } = props;

  const [modalVisible, setModalVisible] = useState(false);

  const onSelect = () => {
    setModalVisible(true);
  };

  const onModalClose = () => {
    setModalVisible(false);
  };

  return (
    <View style={styles.myOrdersContainerStyle}>
      {order.length && (
        <View style={{ alignItems: "center" }}>
          <Text style={styles.totalPrice}>$30</Text>
        </View>
      )}
      {modalVisible && (
        <CheckOut modalVisible={modalVisible} onModalClose={onModalClose} />
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
