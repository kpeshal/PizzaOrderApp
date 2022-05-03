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
  }

  //end style

  
});
