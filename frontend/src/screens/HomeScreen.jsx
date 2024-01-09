/* eslint-disable react-hooks/exhaustive-deps */
import { Box } from "@chakra-ui/react";
import Banner from "../components/Banner";
import Products from "./Products";

const HomeScreen = () => {
  return (
    <Box mb={"200px"}>
      <Box>
        <Banner />
        <Products />
      </Box>
    </Box>
  );
};

export default HomeScreen;
