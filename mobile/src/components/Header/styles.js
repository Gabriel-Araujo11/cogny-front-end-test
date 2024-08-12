import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  headerContainer: {
    paddingVertical: 20,
    paddingHorizontal: 16,
    backgroundColor: "black",
    top: 30,
  },
  headerContent: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  logoContainer: {
    flexDirection: "row",
  },
  logoText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    marginRight: 10,
  },
  logoImage: {
    width: 34,
    height: 24,
  },
  cartContainer: {
    marginRight: 5,
  },
  cartBadge: {
    backgroundColor: "#F8375D",
    width: 16,
    height: 16,
    borderRadius: 10,
    bottom: 28,
    left: 10,
    alignItems: "center",
  },
  cartBadgeText: {
    color: "white",
    fontSize: 12,
  },
});
