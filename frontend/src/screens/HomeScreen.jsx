/* eslint-disable react-hooks/exhaustive-deps */
import { Box } from "@chakra-ui/react";
import Banner from "../components/Banner";
import ProductsScreen from "./ProductsScreen";

const HomeScreen = () => {
  return (
    <Box mb={"200px"}>
      <Banner />
      <ProductsScreen />
    </Box>
  );
};

export default HomeScreen;
