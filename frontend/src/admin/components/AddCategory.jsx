import { Box, Heading, Input, Button } from "@chakra-ui/react";
import { useState } from "react";
import { addCategory } from "../api/api";
import { useToast } from "@chakra-ui/react";
import { useCategory } from "../context/store";
import { motion } from "framer-motion";

const AddCategory = () => {
  const [category, setCategory] = useState("");
  const { fetchCategory } = useCategory();
  const toast = useToast();

  const handleAddCategory = async () => {
    const res = await addCategory(category);
    res &&
      toast({
        title: "Category added.",
        description: "We've added product category",
        status: "success",
        duration: 3000,
        isClosable: true,
      });

    setCategory("");
    fetchCategory();
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleAddCategory();
    }
  };

  return (
    <Box
      color={"black"}
      as={motion.div}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition="0.2s linear"
    >
      <Heading fontSize={"2rem"} fontFamily={"Long Cang"} textAlign={"center"}>
        Add Category
      </Heading>

      <Box mt={4} ml={3} mr={3}>
        <Input
          type="text"
          placeholder="Enter category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          onKeyDown={handleKeyPress}
        />
        <Button colorScheme="green" mt={3} mb={5} onClick={handleAddCategory}>
          Add
        </Button>
      </Box>
    </Box>
  );
};

export default AddCategory;
