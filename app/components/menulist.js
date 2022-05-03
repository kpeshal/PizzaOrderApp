import React, { useState } from "react";
import {
  View,
  TouchableOpacity,
  Text,
  FlatList,
  Modal,
  StyleSheet,
  Pressable,
} from "react-native";

import menu from "../data/menu";
import styles from "../styles/styles";
import AddPizzaModal from "./addPizza";

const MenuList = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedPizza, setSelectedPizza] = useState(null);

  const onSelect = (title) => {
    setModalVisible(true);
    setSelectedPizza(title);
  };

  const onModalClose = () => {
    setSelectedPizza(null);
    setModalVisible(false);
  };

  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity
        onPress={() => onSelect(item.title)}
        style={styles.item}
      >
        <Text style={styles.title}>{item.title}</Text>
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
