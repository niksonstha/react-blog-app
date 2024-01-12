import { Box, Heading, Input, Button } from "@chakra-ui/react";
import { useState } from "react";
import { addCategory } from "../api/api";

const AddCategory = () => {
  const [category, setCategory] = useState("");

  const handleAddCategory = async () => {
    await addCategory(category);
    setCategory("");
  };

  return (
    <Box color={"black"}>
      <Heading fontSize={"2rem"} fontFamily={"Long Cang"} textAlign={"center"}>
        Add Category
      </Heading>

      <Box mt={4} ml={3} mr={3}>
        <Input
          type="text"
          placeholder="Enter category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
        <Button colorScheme="green" mt={3} mb={5} onClick={handleAddCategory}>
          Add
        </Button>
      </Box>
    </Box>
  );
};

export default AddCategory;
