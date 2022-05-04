import React, { useState } from "react";
import {
  View,
  TouchableOpacity,
  Text,
  FlatList,
  Alert,
  Image,
} from "react-native";

import menu from "../data/menu";
import styles from "../styles/styles";
import AddPizzaModal from "./addPizza";
import data from "../data/toppings";

const MenuList = (props) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedPizza, setSelectedPizza] = useState(null);

  const onSelect = (title) => {
    setModalVisible(true);
    setSelectedPizza(title);
    data.map((x) => {
      x.isSelected = false;
      return x;
    });
  };

  const onModalClose = () => {
    setSelectedPizza(null);
    setModalVisible(false);
  };

  const addToOrder = (order) => {
    props.addToOrder(order);
    setModalVisible(false);
    Alert.alert("Success!!", "Check My Orders to View your Order.", [
      { text: "OK" },
    ]);
  };

  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity
        onPress={() => onSelect(item.title)}
        style={styles.item}
      >
        <View style={styles.menuItemView}>
          <View style={{ flexDirection: "row" }}>
            <Image
              style={styles.logoStyle}
              source={{
                uri: item.img,
              }}
            />
            <View>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.ingTextView} numberOfLines={2}>
                {item.ing}
              </Text>
            </View>
          </View>
          <View style={styles.menuPriceContainer}>
            <Text style={styles.menuPriceText}>${item.price}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <>
      <View style={{ alignItems: "center" }}>
        <Text style={styles.todaysSpecial}>Today's Special</Text>
      </View>

      {modalVisible && (
        <AddPizzaModal
          modalVisible={modalVisible}
          selectedPizza={selectedPizza}
          onModalClose={onModalClose}
          addToOrder={addToOrder}
        />
      )}

      <FlatList
        data={menu}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        style={styles.menuContainer}
      />
    </>
  );
};

export default MenuList;
