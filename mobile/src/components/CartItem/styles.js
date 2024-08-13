import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: 10,
    marginTop: 10,
    marginLeft: 20,
    marginRight: 20,
    padding: 20,
    backgroundColor: "white",
  },
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  image: {
    width: 100,
    height: 100,
  },
  textContainer: {
    marginLeft: 16,
  },
  productName: {
    fontSize: 14,
    textAlign: "left",
  },
  productPrice: {
    fontWeight: "bold",
    fontSize: 16,
    textAlign: "left",
  },
  totalPrice: {
    backgroundColor: "#EEEEEE",
    padding: 10,
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "right",
    marginTop: 16,
  },
});
