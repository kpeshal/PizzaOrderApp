import { StyleSheet, StatusBar } from "react-native";

import colors from "../config/colors";

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    width: "100%",
    backgroundColor: colors.primary,
  },

  menuContainer: {
    marginBottom: 2,
  },
  item: {
    borderRadius: 20,
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 16,
    backgroundColor: colors.itemblock,
  },
  menuItemView: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  orderItem: {
    borderRadius: 20,
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    backgroundColor: colors.itemblock,
  },
  title: {
    fontSize: 25,
    color: colors.creamwhite,
  },

  todaysSpecial: {
    fontSize: 30,
    color: colors.creamwhite,
  },

  totalPrice: {
    fontSize: 30,
    color: colors.secondary,
  },

  //style tab
  tabsContainerStyle: {
    backgroundColor: "transparent",
    flexDirection: "row",
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderRadius: 20,
    justifyContent: "space-between",
  },
  tabStyle: {
    paddingVertical: 5,
    flex: 1,
    height: 50,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    // borderColor: "#0076FF",
    // borderWidth: 1,
    backgroundColor: "white",
    // borderRadius: 40,
  },
  activeTabStyle: {
    backgroundColor: colors.secondary,
  },
  tabTextStyle: {
    color: colors.primary,
    fontWeight: "bold",
    textAlign: "center",
  },
  activeTabTextStyle: {
    color: colors.creamwhite,
    fontWeight: "bold",
    textAlign: "center",
  },
  tabBadgeContainerStyle: {
    borderRadius: 20,
    backgroundColor: "red",
    paddingLeft: 5,
    paddingRight: 5,
    marginLeft: 5,
    marginBottom: 3,
  },
  activeTabBadgeContainerStyle: {
    backgroundColor: "white",
  },
  tabBadgeStyle: {
    color: "white",
    fontSize: 11,
    fontWeight: "bold",
  },
  activeTabBadgeStyle: {
    color: "black",
  },

  //end style

  myOrdersContainerStyle: {
    flex: 1,
  },
  checkoutButton: {
    backgroundColor: colors.secondary,
    height: 50,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    marginHorizontal: 5,
    marginBottom: 2,
    position: "absolute",
    bottom: 0,
    width: "100%",
  },

  //style Modal
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    // margin: 20,
    // height: 500,
    display: "flex",
    width: 300,
    backgroundColor: colors.grey,
    borderRadius: 15,
    padding: 5,
    // alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    flexDirection: "column",
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 20,
    justifyContent: "space-between",
  },
  modalHeaderContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    // height: "10%",
    alignItems: "center",
    paddingStart: 5,
  },
  modalBody: {
    display: "flex",
    alignItems: "center",
    marginTop: 10,
    marginBottom: 10,
  },
  modalFooterContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    // height: "10%",
  },
  toppingsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    padding: 5,
    marginTop: 8,
    borderRadius: 10,
    backgroundColor: colors.primary,
    paddingBottom: 8,
    // borderWidth: 1,

    //   justifyContent:""
  },
  toppingsButton: {
    borderRadius: 10,
    padding: 5,
    marginRight: 5,
    marginTop: 5,
    backgroundColor: colors.creamwhite,
  },
  selectedToppingsButton: {
    backgroundColor: colors.react,
  },
  button: {
    borderRadius: 10,
    padding: 10,
    //  elevation: 2,
    width: 100,
    flexDirection: "row",
    justifyContent: "center",
  },
  buttonOk: {
    backgroundColor: colors.secondary,
  },
  fullWidth: {
    width: "100%",
  },
  buttonClose: {
    backgroundColor: colors.danger,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  secondaryText: {
    color: "black",
    fontWeight: "bold",
    textAlign: "center",
  },
  whitetextNormal: {
    color: colors.creamwhite,
  },

  secondayTextNormal: {
    color: colors.secondary,
    fontWeight: "bold",
    textAlign: "center",
  },
  textModalHeading: {
    fontSize: 20,
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },

  input: {
    height: 40,
    marginBottom: 12,
    marginTop: 6,
    // borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    backgroundColor: colors.creamwhite,
  },

  checkoutBody: {
    display: "flex",
    marginTop: 2,
    marginBottom: 6,

    padding: 5,
    marginTop: 8,
    borderRadius: 10,
    backgroundColor: colors.primary,
    paddingBottom: 8,
  },

  checkboxContainer: {
    flexDirection: "row",
    marginVertical: 10,
  },
  checkbox: {
    alignSelf: "center",
    marginRight: 6,
  },
  checkboxLabel: {
    margin: 8,
  },

  logoStyle: {
    width: 70,
    height: 70,
    marginRight: 10,
    borderRadius: 8,
  },
  menuPriceContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginRight: 15,
  },
  menuPriceText: {
    color: colors.secondary,
    // fontWeight: "bold",
    textAlign: "center",
    fontSize: 25,
  },
  ingTextView: {
    color: colors.react,
    // fontWeight: "bold",
    textAlign: "left",
    fontStyle: "italic",
  },

  myordercard: {
    borderRadius: 20,
    padding: 10,
    // height: 200,
    marginVertical: 8,
    marginHorizontal: 16,
    backgroundColor: colors.itemblock,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  myOrderExtra: {
    color: colors.react,
    // fontWeight: "bold",
    textAlign: "left",
    fontStyle: "italic",
  },
  myOrderTotal: {
    color: colors.secondary,
    // fontWeight: "bold",
    textAlign: "left",
    fontStyle: "italic",
  },
});
