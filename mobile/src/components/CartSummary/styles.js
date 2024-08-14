import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    marginTop: 16,
    padding: 16,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: "#ddd",
    backgroundColor: "white",
  },
  emptyCartText: {
    marginBottom: 20,
    fontSize: 16,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 16,
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
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
    flexDirection: "row",
  },
  totalLabel: {
    color: "gray",
    marginRight: 8,
    fontSize: 18,
    fontWeight: "bold",
  },
  totalValue: {
    fontWeight: "bold",
    color: "black",
    fontSize: 30,
    marginBottom: 8,
    marginTop: 4,
  },
});
