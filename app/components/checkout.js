import React, { useEffect, useState } from "react";
import { View, Text, Pressable, Modal, TextInput } from "react-native";
import styles from "../styles/styles";

const CheckOut = (props) => {
  const { modalVisible, onModalClose } = props;
  const [details, setDetails] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    deliveryAddress: "",
  });

  const onChangeHandler = (value, name) => {
    // const { name, type, value } = event.nativeEvent;
    // console.log(JSON.stringify(event));
    let newDetails = { ...details };
    newDetails[name] = value;
    setDetails(newDetails);
  };

  return (
    <View>
      <Modal animationType="fade" transparent={true} visible={modalVisible}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={styles.modalHeaderContainer}>
              <Text>Checkout</Text>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={onModalClose}
              >
                <Text style={styles.textStyle}>Cancel</Text>
              </Pressable>
            </View>

            <View style={styles.modalBody}>
              <TextInput
                name="firstName"
                type="text"
                placeholder="First Name"
                value={details.firstName}
                onChangeText={(e) => onChangeHandler(e, "firstname")}
              />
              <TextInput
                name="firstName"
                type="text"
                placeholder="First Name"
                value={details.firstName}
                onChangeText={(e) => onChangeHandler(e, "firstname")}
              />
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

export default CheckOut;
