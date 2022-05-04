import React, { useState } from "react";
import { View, Text, TouchableOpacity, FlatList } from "react-native";
import styles from "../styles/styles";
import { Entypo } from "@expo/vector-icons";

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

  

  

  return (
    <View style={styles.myOrdersContainerStyle}>
      

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