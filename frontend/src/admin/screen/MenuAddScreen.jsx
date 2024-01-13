import { Box, Heading } from "@chakra-ui/react";
import { motion } from "framer-motion";
import AddProduct from "../components/AddProduct";
import ProductList from "../components/ProductList";
const MenuAddScreen = () => {
  return (
    <Box width={"80vw"} mr={"auto"} ml={"auto"}>
      <Heading
        fontSize={"3rem"}
        fontFamily={"Long Cang"}
        letterSpacing={3}
        textAlign={"center"}
      >
        MENU
      </Heading>

      <Box
        color={"black"}
        as={motion.div}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition="0.2s linear"
        display={"flex"}
        gap={4}
      >
        <Box
          flex={2}
          bgColor={"white"}
          rounded={10}
          height={"max-content"}
          padding={5}
        >
          <AddProduct />
        </Box>
        <Box flex={3} bgColor={"white"} rounded={10} padding={5}>
         <ProductList/>
        </Box>
      </Box>
    </Box>
  );
};

export default MenuAddScreen;
