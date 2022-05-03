import React, { useEffect, useState } from "react";
import { View, Text, Pressable, Modal } from "react-native";
import styles from "../styles/styles";
import data from "../data/toppings";

const AddPizzaModal = (props) => {
  const { selectedPizza, modalVisible, onModalClose } = props;
  const [toppings, setToppings] = useState(data);

  const onPressAdd = () => {
    let order = {};
    order.pizza = selectedPizza;
    order.toppings = toppings.filter((x) => x.isSelected).map((y) => y.title);
    props.addToOrder(order);
  };

  const onSelectToppings = (id) => {
    let data = [...toppings];
    data.map((x) => {
      if (x.id === id) x.isSelected = !x.isSelected;
      return x;
    });

    setToppings(data);
  };

  return (
    <View>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        // onRequestClose={() => {
        //   Alert.alert("Modal has been closed.");
        //   setModalVisible(!modalVisible);
        // }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={styles.modalHeaderContainer}>
              <Text>{selectedPizza}</Text>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={onModalClose}
              >
                <Text style={styles.textStyle}>Cancel</Text>
              </Pressable>
            </View>

            <View style={styles.modalBody}>
              <Text> Add extra 3 toppings for $1</Text>
              <View style={styles.toppingsContainer}>
                {toppings.map((x) => (
                  <Pressable
                    key={x.id}
                    style={[
                      styles.toppingsButton,
                      x.isSelected ? styles.selectedToppingsButton : {},
                    ]}
                    onPress={() => onSelectToppings(x.id)}
                  >
                    <Text style={styles.textStyle}>{x.title}</Text>
                  </Pressable>
                ))}
              </View>
            </View>

            <View style={styles.modalFooterContainer}>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={onModalClose}
              >
                <Text style={styles.textStyle}>Cancel</Text>
              </Pressable>
              <Pressable
                style={[styles.button, styles.buttonOk]}
                onPress={() => onPressAdd()}
              >
                <Text style={styles.textStyle}>Add</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default AddPizzaModal;
