import React from "react";
import { View, ScrollView } from "react-native";
import ProductsCard from "../ProductCard/ProductCard";
import { products } from "../utils/productsData";

export default function ProductList() {
  //TODO: resolve config firebase(grundle error)
  // const [quantity, setQuantity] = useState(1);
  // const [products, setProducts] = useState([]);

  // useEffect(() => {
  //   async function fetchProducts() {
  //     const productsCol = collection(db, "products");
  //     const productSnapshot = await getDocs(productsCol);
  //     const productList = productSnapshot.docs.map((doc) => ({
  //       ...doc.data(),
  //     }));
  //     setProducts(productList);
  //   }
  //   fetchProducts();
  // }, []);

  return (
    <View>
      <ScrollView>
        {products.map((product) => (
          <ProductsCard
            key={product.id}
            imageUrl={product.imageUrl}
            name={product.name}
            price={product.price}
          />
        ))}
      </ScrollView>
    </View>
  );
}
