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
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    backgroundColor: colors.itemblock,
  },
  orderItem: {
    borderRadius: 20,
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    backgroundColor: colors.itemblock,
  },
  title: {
    fontSize: 28,
    color: colors.creamwhite,
  },

  todaysSpecial: {
    fontSize: 32,
    color: colors.creamwhite,
  },

  //style tab
  tabsContainerStyle: {
    backgroundColor: "transparent",
    flexDirection: "row",
    paddingHorizontal: 5,
    paddingVertical: 5,
    justifyContent: "space-between",
  },
  tabStyle: {
    paddingVertical: 5,
    flex: 1,
    height: 45,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#0076FF",
    borderWidth: 1,
    backgroundColor: "white",
  },
  activeTabStyle: {
    backgroundColor: "#0076FF",
  },
  tabTextStyle: {
    color: "#0076FF",
  },
  activeTabTextStyle: {
    color: "white",
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
    height: 45,
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
    backgroundColor: colors.creamwhite,
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
    borderColor: "#0076FF",
    borderWidth: 1,
    // height:"",
    display: "flex",
    // justifyContent: "center",
    alignItems: "center",
    marginTop: 2,
    marginBottom: 2,
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

    borderColor: "#0076FF",
    borderWidth: 1,

    //   justifyContent:""
  },
  toppingsButton: {
    borderRadius: 10,
    padding: 5,
    marginRight: 5,
    marginTop: 5,
    backgroundColor: colors.danger,
  },
  selectedToppingsButton: {
    backgroundColor: "#0076FF",
  },
  button: {
    borderRadius: 10,
    padding: 10,
    //  elevation: 2,
    width: 100,
  },
  buttonOk: {
    backgroundColor: colors.secondary,
  },
  buttonClose: {
    backgroundColor: colors.danger,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },

  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
