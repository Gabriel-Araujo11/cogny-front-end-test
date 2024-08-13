import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
    overflow: "hidden",
    padding: 20,
    marginTop: 10,
    marginLeft: 20,
    marginRight: 20,
  },
  image: {
    height: 300,
    marginBottom: 16,
    resizeMode: "contain",
  },
  quantityButton: {
    padding: 10,
    width: 83,
    backgroundColor: "#c62c4a",
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
    alignItems: "center",
    left: 1,
  },
  quantityText: {
    color: "#fff",
    fontSize: 16,
  },
  addButton: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    borderRadius: 5,
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
    backgroundColor: "#F8375D",
  },
  productName: {
    fontSize: 18,
    marginBottom: 8,
    color: "black",
  },
  productPrice: {
    fontSize: 21,
    fontWeight: "bold",
    lineHeight: 25,
    marginBottom: 16,
    color: "black",
  },
  flexContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    right: 20,
  },
});
