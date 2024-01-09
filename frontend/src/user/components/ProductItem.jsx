import { Box, Image } from "@chakra-ui/react";
import banner1 from "../assets/banner1.jpg";
import banner2 from "../assets/banner2.jpg";
import banner3 from "../assets/banner3.jpg";
import banner4 from "../assets/banner4.jpg";
const ProductItem = () => {
  const imageUrls = [banner1, banner2, banner3, banner4];
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
      {imageUrls.map((url, index) => (
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
            src={url}
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
