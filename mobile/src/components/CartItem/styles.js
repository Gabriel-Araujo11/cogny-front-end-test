import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  cartContainer: {
    margin: 20,
  },
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  image: {
    width: 100,
    height: 100,
  },
  productName: {
    fontSize: 14,
    left: 10,
    color: "black",
    width: 170,
  },
  productPrice: {
    fontWeight: "bold",
    color: "black",
    fontSize: 16,
    left: 10,
  },
  totalPriceContainer: {
    backgroundColor: "#EEEEEE",
    borderRadius: 5,
  },
  totalPrice: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "right",
    top: 15,
    right: 20,
  },
  totalQuantity: {
    bottom: 10,
    left: 40,
    textAlign: "left",
    borderWidth: 1,
    borderColor: "black",
    backgroundColor: "white",
    padding: 5,
    borderRadius: 4,
    width: 40,
    textAlign: "center",
  },
});
