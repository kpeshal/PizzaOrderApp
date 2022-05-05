import React, { useEffect, useState } from "react";
import { View, Text, Pressable, Modal, TextInput, Alert } from "react-native";
import Checkbox from "expo-checkbox";
import { Entypo } from "@expo/vector-icons";

import styles from "../styles/styles";

const CheckOut = (props) => {
  const { modalVisible, onModalClose, clearOrders } = props;
  const [details, setDetails] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    deliveryAddress: "",
  });

  const [isChecked, setChecked] = useState(false);

  const onChangeHandler = (value, name) => {
    let newDetails = { ...details };
    newDetails[name] = value;
    setDetails(newDetails);
  };

  const onPressAdd = () => {
    if (
      !details.firstName ||
      !details.lastName ||
      !details.phoneNumber ||
      !details.deliveryAddress ||
      !isChecked
    ) {
      alert("Please fill out all the fields");
    } else {
      onModalClose();
      Alert.alert(
        "Success!!",
        `Thank You ${
          details.firstName + " " + details.lastName
        } your order has been confirmed and
      will be delivered at ${details.deliveryAddress}`,
        [{ text: "OK" }]
      );
      clearOrders();
    }
  };

  return (
    <View>
      <Modal animationType="fade" transparent={true} visible={modalVisible}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={styles.modalHeaderContainer}>
              <Text style={[styles.secondaryText, styles.textModalHeading]}>
                Checkout
              </Text>
              <Pressable onPress={onModalClose}>
                <Entypo name="cross" size={30} color="red" />
              </Pressable>
            </View>

            <View style={styles.checkoutBody}>
              <View style={{ justifyContent: "flex-start" }}>
                <View style={styles.checkboxContainer}>
                  <Checkbox
                    style={styles.checkbox}
                    value={isChecked}
                    onValueChange={setChecked}
                    color={details.payOnDelivery ? "#f2994a" : undefined}
                  />
                  <Text style={styles.secondayTextNormal}>
                    Pay On Delivery?
                  </Text>
                </View>
                {isChecked && (
                  <>
                    <Text style={styles.whitetextNormal}>First Name</Text>
                    <TextInput
                      style={styles.input}
                      name="firstName"
                      type="text"
                      placeholder="First Name"
                      value={details.firstName}
                      onChangeText={(e) => onChangeHandler(e, "firstName")}
                    />
                    <Text style={styles.whitetextNormal}>Last Name</Text>
                    <TextInput
                      style={styles.input}
                      name="lastName"
                      type="text"
                      placeholder="Last Name"
                      value={details.lastName}
                      onChangeText={(e) => onChangeHandler(e, "lastName")}
                    />
                    <Text style={styles.whitetextNormal}>Phone</Text>
                    <TextInput
                      style={styles.input}
                      name="phoneNumber"
                      type="number"
                      placeholder="+44 8439573934 "
                      value={details.phoneNumber}
                      onChangeText={(e) => onChangeHandler(e, "phoneNumber")}
                    />
                    <Text style={styles.whitetextNormal}>Delivery Address</Text>
                    <TextInput
                      style={styles.input}
                      name="deliveryAddress"
                      type="text"
                      placeholder="Ealing Broadway"
                      value={details.deliveryAddress}
                      onChangeText={(e) =>
                        onChangeHandler(e, "deliveryAddress")
                      }
                    />
                  </>
                )}
              </View>
            </View>
            <View style={styles.modalFooterContainer}>
              <Pressable
                style={[styles.button, styles.buttonOk, styles.fullWidth]}
                onPress={() => onPressAdd()}
                // disabled={
                //   !details.firstName ||
                //   !details.lastName ||
                //   !details.phoneNumber ||
                //   !details.deliveryAddress
                // }
              >
                <Entypo
                  name="check"
                  size={24}
                  color="white"
                  style={{ marginRight: 5 }}
                />
                <Text style={styles.textStyle}>Confirm</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default CheckOut;
