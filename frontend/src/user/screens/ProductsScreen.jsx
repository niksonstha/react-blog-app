import { Box, Heading } from "@chakra-ui/react";
import ProductItem from "../components/ProductItem";
const ProductsScreen = () => {
  return (
    <Box
      width={"90%"}
      ml={"auto"}
      mr={"auto"}
      style={{
        scrollSnapAlign: "start",
      }}
    >
      <Heading
        letterSpacing={4}
        fontFamily={"Long Cang"}
        textAlign={"center"}
        fontSize={"4rem"}
      >
        PRODUCTS
      </Heading>
      <ProductItem />
    </Box>
  );
};

export default ProductsScreen;
