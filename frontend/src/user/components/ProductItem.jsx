import { Box, Image, Button } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { getProducts } from "../../admin/api/api";

const ProductItem = () => {
  const [products, setProducts] = useState([]);
  const [hoveredIndex, setHoveredIndex] = useState(null);

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
      backdropFilter="blur(5px)"
    >
      {products.map((product, index) => (
        <Box
          key={index}
          height={"40vh"}
          cursor={"pointer"}
          overflow={"hidden"}
          rounded={10}
          transition={"all 0.2s ease-in"}
          _hover={{
            transform: "scale(1.07)",
          }}
          pos={"relative"}
          onMouseOver={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <Image
            src={`http://localhost:3000/${product.image}`}
            width={"100%"}
            height={"100%"}
            objectFit={"cover"}
          />
          {hoveredIndex === index && (
            <Box
              pos={"absolute"}
              bottom={0}
              left={0}
              zIndex={2000}
              transition={"all 0.3s ease-in-out"}
              bg={"rgba(0, 0, 0, 0.2)"}
              width={"100%"}
              height={"100%"}
            >
              <Button colorScheme="purple">Add To Cart</Button>
            </Box>
          )}
        </Box>
      ))}
    </Box>
  );
};

export default ProductItem;
