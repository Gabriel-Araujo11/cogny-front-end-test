import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    marginTop: 16,
    borderWidth: 1,
    borderRadius: 8,
    marginLeft: 20,
    marginRight: 20,
    borderColor: "#ddd",
    backgroundColor: "white",
  },
  emptyCartContainer: {
    padding: 15,
  },
  emptyCartText: {
    marginBottom: 20,
    fontSize: 16,
  },
  footer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 16,
    position: "relative",
  },
  button: {
    width: "90%",
    paddingVertical: 12,
    borderRadius: 8,
    backgroundColor: "#FF3B60",
    marginBottom: 20,
  },
  buttonText: {
    textAlign: "center",
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
  backButton: {
    backgroundColor: "#F8375D",
  },
  checkoutButton: {
    backgroundColor: "#F8375D",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    textAlign: "center",
  },
  totalContainer: {
    alignItems: "center",
    flexDirection: "column",
    marginBottom: 16,
  },
  totalLabel: {
    color: "gray",
    fontSize: 18,
    fontWeight: "bold",
  },
  totalValue: {
    fontWeight: "bold",
    color: "black",
    fontSize: 30,
    marginTop: 4,
  },
});
