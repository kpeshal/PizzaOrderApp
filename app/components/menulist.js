import React from "react";
import { View, TouchableOpacity, Text, FlatList } from "react-native";

import menu from "../data/menu";
import styles from "../styles/styles";

const onSelect = (title) => {
  alert(title);
};

const renderItem = ({ item }) => {
  return (
    <TouchableOpacity onPress={() => onSelect(item.title)} style={styles.item}>
      <Text style={styles.title}>{item.title}</Text>
    </TouchableOpacity>
  );
};

const MenuList = () => {
  return (
    <>
      <View style={{ alignItems: "center" }}>
        <Text style={styles.todaysSpecial}>Today's Special</Text>
      </View>

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
