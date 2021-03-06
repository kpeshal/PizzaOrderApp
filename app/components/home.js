import React, { useState, useCallback } from "react";
import { SafeAreaView, TouchableOpacity, View, Text } from "react-native";
import styles from "../styles/styles";
import MenuList from "./menulist";
import OrderList from "./orderlist";

const Home = () => {
  //const [selected, setSelected] = useState();
  const [isMenu, setIsMenu] = useState(true);
  const [order, setOrder] = useState([]);

  const onTabPress = () => {
    setIsMenu(!isMenu);
  };

  const addToOrder = (newOrder) => {
    let data = [...order];
    data.push(newOrder);
    setOrder(data);
  };

  const clearOrders = () => {
    setOrder([]);
  };

  const removeOrder = (item) => {
    let newOrder = [...order];
    let index = newOrder.findIndex(
      (i) =>
        i.pizza === item.pizza &&
        i.price === item.price &&
        i.toppings === item.toppings
    );
    newOrder.splice(index, 1);
    setOrder(newOrder);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.tabsContainerStyle}>
        <TouchableOpacity
          style={[styles.tabStyle, isMenu ? styles.activeTabStyle : {}]}
          accessible={true}
          onPress={() => onTabPress("Menu")}
          activeOpacity={1}
        >
          <Text
            numberOfLines={1}
            allowFontScaling={true}
            ellipsizeMode="tail"
            style={isMenu ? styles.activeTabTextStyle : styles.tabTextStyle}
          >
            Menu
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tabStyle, !isMenu ? styles.activeTabStyle : {}]}
          accessible={true}
          onPress={() => onTabPress("My Orders")}
          activeOpacity={1}
        >
          <Text
            numberOfLines={1}
            allowFontScaling={true}
            ellipsizeMode="tail"
            style={!isMenu ? styles.activeTabTextStyle : styles.tabTextStyle}
          >
            My Orders
          </Text>

          <View style={[styles.tabBadgeContainerStyle]}>
            <Text style={[styles.tabBadgeStyle]} allowFontScaling={true}>
              {order.length ? order.length : 0}
            </Text>
          </View>
        </TouchableOpacity>
      </View>

      {isMenu ? (
        <MenuList addToOrder={addToOrder} />
      ) : (
        <OrderList
          order={order}
          resetOrders={clearOrders}
          deleteOrder={removeOrder}
        />
      )}
    </SafeAreaView>
  );
};
export default Home;
