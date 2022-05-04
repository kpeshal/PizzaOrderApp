import React, { useState } from "react";
import { View, TouchableOpacity, Text, FlatList, Alert } from "react-native";

import menu from "../data/menu";
import styles from "../styles/styles";

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