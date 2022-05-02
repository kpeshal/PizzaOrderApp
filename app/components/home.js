//ToDo

import React, { useState, useCallback } from "react";
import { SafeAreaView, TouchableOpacity, View, Text } from "react-native";
import styles from "../styles/styles";
import MenuList from "./menulist";
import OrderList from "./orderlist";

const Home = () => {
  //const [selected, setSelected] = useState();
  const [isMenu, setIsMenu] = useState(true);

  const onTabPress = () => {
    setIsMenu(!isMenu);
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
          <Text numberOfLines={1} allowFontScaling={true} ellipsizeMode="tail">
            Menu
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tabStyle, !isMenu ? styles.activeTabStyle : {}]}
          accessible={true}
          onPress={() => onTabPress("My Orders")}
          activeOpacity={1}
        >
          <Text numberOfLines={1} allowFontScaling={true} ellipsizeMode="tail">
            My Orders
          </Text>
          <View style={[styles.tabBadgeContainerStyle]}>
            <Text style={[styles.tabBadgeStyle]} allowFontScaling={true}>
              4
            </Text>
          </View>
        </TouchableOpacity>
      </View>

      {isMenu ? <MenuList /> : <OrderList />}
    </SafeAreaView>
  );
};

export default Home;
