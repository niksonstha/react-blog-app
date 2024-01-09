import { Box, Heading } from "@chakra-ui/react";
const Products = () => {
  return (
    <Box width={"90%"} ml={"auto"} mr={"auto"}>
      <Heading
        letterSpacing={4}
        fontFamily={"Long Cang"}
        textAlign={"center"}
        fontSize={"3rem"}
      >
        PRODUCTS
      </Heading>
      <Box display={"grid"} gridTemplateColumns="repeat(4, 1fr)" gap={5} mt={5}>
        <Box
          height={"40vh"}
          rounded={7}
          bgColor={"#F1EFEF"}
          transition={"transform 0.2s ease-in"}
          _hover={{
            transform: "scale(1.07)",
          }}
          cursor={"pointer"}
        ></Box>
        <Box
          height={"40vh"}
          rounded={7}
          bgColor={"#F1EFEF"}
          transition={"transform 0.2s ease-in"}
          _hover={{
            transform: "scale(1.03)",
          }}
          cursor={"pointer"}
        ></Box>
        <Box
          height={"40vh"}
          rounded={7}
          bgColor={"#F1EFEF"}
          transition={"transform 0.2s ease-in"}
          _hover={{
            transform: "scale(1.03)",
          }}
          cursor={"pointer"}
        ></Box>
        <Box
          height={"40vh"}
          rounded={7}
          bgColor={"#F1EFEF"}
          transition={"transform 0.2s ease-in"}
          _hover={{
            transform: "scale(1.03)",
          }}
          cursor={"pointer"}
        ></Box>
      </Box>
    </Box>
  );
};

export default Products;
