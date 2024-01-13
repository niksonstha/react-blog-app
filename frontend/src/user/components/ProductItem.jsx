import { Box, Image } from "@chakra-ui/react";
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
          height={"40vh"}
          transition={"transform 0.2s ease-in"}
          _hover={{
            transform: "scale(1.07)",
          }}
          cursor={"pointer"}
          pos={"relative"}
          overflow={"hidden"}
          rounded={10}
        >
          <Image
            src={`http://localhost:3000/${product.image}`}
            width={"100%"}
            height={"100%"}
            transition={"all 0.2s ease-in"}
            _hover={{
              filter: "brightness(50%)",
              transform: "scale(1.07)",
            }}
            objectFit={"cover"}
          />
        </Box>
      ))}
    </Box>
  );
};

export default ProductItem;
