import { View, Text, TouchableOpacity } from "react-native";
import styles from "../styles/styles";

const onSelect = () => {
  alert("ToDo Checkout");
};

const OrderList = () => {
  return (
    <View style={styles.myOrdersContainerStyle}>
      <View style={{ justifyContent: "center", flex: 1, alignItems: "center" }}>
        <Text>No Pizza Selected !!!</Text>
      </View>

      <TouchableOpacity
        style={[styles.checkoutButton]}
        accessible={true}
        onPress={onSelect}
        activeOpacity={1}
      >
        <Text numberOfLines={1} allowFontScaling={true} ellipsizeMode="tail">
          Checkout
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default OrderList;
