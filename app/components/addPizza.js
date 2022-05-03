import React, { useEffect } from "react";
import { View, Text, Pressable, Modal } from "react-native";
import styles from "../styles/styles";

const AddPizzaModal = (props) => {
  const { selectedPizza, modalVisible, onModalClose } = props;

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
                style={[styles.button, styles.buttonOk]}
                onPress={onModalClose}
              >
                <Text style={styles.textStyle}>Add</Text>
              </Pressable>
            </View>

            <View></View>

            <View style={styles.modalFooterContainer}>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={onModalClose}
              >
                <Text style={styles.textStyle}>Cancel</Text>
              </Pressable>
              <Pressable
                style={[styles.button, styles.buttonOk]}
                onPress={onModalClose}
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
