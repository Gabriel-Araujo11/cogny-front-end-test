import { View, Text } from "react-native";
import { styles } from "./styles";

export default function ProductList() {
  return (
    <View style={styles.container}>
      <Text style={{ color: "white" }}>Lista de Produtos</Text>
    </View>
  );
}
