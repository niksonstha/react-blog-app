import { Box, Image, Text, Button } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { getProducts } from "../../admin/api/api";

const ProductItem = () => {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const res = await getProducts();
    setProducts(res.data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <Box
      display={"grid"}
      gridTemplateColumns={[
        "repeat(1, 1fr)",
        "repeat(1, 1fr)",
        "repeat(2, 1fr)",
        "repeat(3, 1fr)",
        "repeat(4, 1fr)",
      ]}
      gap={5}
      mt={5}
    >
      {products.map((product, index) => (
        <Box
          key={index}
          height={"55vh"}
          cursor={"pointer"}
          overflow={"hidden"}
          rounded={10}
          bgColor={"white"}
          transition={"all 0.2s ease-in"}
          _hover={{
            transform: "scale(1.07)",
          }}
          display={"flex"}
          // justifyContent={"center"}
          flexDirection={"column"}
          alignItems={"center"}
          color={"black"}
        >
          <Image
            src={`http://localhost:3000/${product.image}`}
            width={"100%"}
            height={"30vh"}
            objectFit={"cover"}
          />
          <Text mt={5} fontSize={"1.3rem"} color={"purple"} fontWeight={"bold"}>
            {product.name}
          </Text>
          <Text mt={5} fontSize={"1.3rem"} color={"red"} fontWeight={"bold"}>
            Price: Rs {product.price}
          </Text>

          <Button colorScheme="green" mt={2} mb={3}>
            Buy
          </Button>
        </Box>
      ))}
    </Box>
  );
};

export default ProductItem;
