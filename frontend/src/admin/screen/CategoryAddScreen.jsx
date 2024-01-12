import { Box, Heading } from "@chakra-ui/react";
import AddCategory from "../components/AddCategory";
import CategoryList from "../components/CategoryList";
const CategoryAddScreen = () => {
  return (
    <Box width={"80vw"} mr={"auto"} ml={"auto"}>
      <Heading
        fontFamily={"Long Cang"}
        letterSpacing={3}
        fontSize={"3rem"}
        textAlign={"center"}
      >
        CAREGORY
      </Heading>

      <Box display={"flex"} gap={5}>
        <Box bgColor={"#F1EFEF"} rounded={10} height={"max-content"} flex={1}>
          <AddCategory />
        </Box>
        <Box bgColor={"#F1EFEF"} rounded={10} flex={2}>
          <CategoryList />
        </Box>
      </Box>
    </Box>
  );
};

export default CategoryAddScreen;
