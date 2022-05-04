import React, { useState } from "react";
import { View, Text, TouchableOpacity, FlatList } from "react-native";
import toppings from "../data/toppings";
import styles from "../styles/styles";
import CheckOut from "./checkout";

const renderItem = ({ item }) => {
  return (
    <TouchableOpacity
      //onPress={() => onSelect(item.title)}
      style={styles.item}
    >
      <Text style={styles.title}>{item.pizza}</Text>
      <Text>{item.toppings.toString()}</Text>
    </TouchableOpacity>
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
          <Text>No Pizza Selected !!!</Text>
        </View>
      )}

      <TouchableOpacity
        style={[styles.checkoutButton]}
        accessible={true}
        onPress={onSelect}
        activeOpacity={1}
      >
        <Text numberOfLines={1} allowFontScaling={true} ellipsizeMode="tail">
          Checkout
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default OrderList;
