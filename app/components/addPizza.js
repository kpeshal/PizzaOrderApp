import React, { useEffect, useState } from "react";
import { View, Text, Pressable, Modal } from "react-native";
import styles from "../styles/styles";
import data from "../data/toppings";
import { Entypo } from "@expo/vector-icons";

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
      <Modal animationType="fade" transparent={true} visible={modalVisible}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={styles.modalHeaderContainer}>
              <Text style={[styles.secondaryText, styles.textModalHeading]}>
                {selectedPizza}
              </Text>
              <Pressable onPress={onModalClose}>
                <Entypo name="cross" size={30} color="red" />
              </Pressable>
            </View>

            <View style={styles.modalBody}>
              <Text style={styles.secondaryText}>
                {" "}
                Add extra 3 toppings for $1
              </Text>
              <View style={styles.toppingsContainer}>
                {toppings.map((x) => (
                  <Pressable
                    key={x.id}
                    style={[
                      styles.toppingsButton,
                      x.isSelected ? styles.selectedToppingsButton : {},
                    ]}
                    onPress={() => onSelectToppings(x.id)}
                    disabled={
                      x.isSelected
                        ? false
                        : toppings.filter((item) => item.isSelected === true)
                            .length > 2
                    }
                  >
                    <Text style={styles.secondaryText}>{x.title}</Text>
                  </Pressable>
                ))}
              </View>
            </View>

            <View style={styles.modalFooterContainer}>
              
              <Pressable
                style={[styles.button, styles.buttonOk, styles.fullWidth]}
                onPress={() => onPressAdd()}
              >
                <Entypo
                  name="shopping-cart"
                  size={23}
                  color="white"
                  style={{ marginRight: 5 }}
                />
                <Text style={styles.textStyle}>Add To Cart</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default AddPizzaModal;