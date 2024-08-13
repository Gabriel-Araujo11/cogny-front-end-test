import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
    overflow: "hidden",
    padding: 20,
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
  },
  image: {
    height: 300,
    marginBottom: 16,
    resizeMode: "contain",
  },
  productName: {
    fontSize: 18,
    marginBottom: 8,
    color: "black",
  },
  productPrice: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 16,
    color: "black",
  },
  flexContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  picker: {
    height: 44,
    width: 80,
    backgroundColor: "#c62c4a",
    color: "white",
    borderRadius: 5,
    marginRight: 8,
  },
  button: {
    backgroundColor: "#F8375D",
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});
