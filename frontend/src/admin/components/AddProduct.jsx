import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Select,
  Heading,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { getCategory } from "../api/api";

const AddProduct = () => {
  const [categories, setcategories] = useState([]);

  const fetchCategory = async () => {
    const res = await getCategory();
    setcategories(res.data.data);
  };

  useEffect(() => {
    fetchCategory();
  }, []);
  return (
    <Box display={"flex"} flexDirection={"column"} gap={5}>
      <Heading textAlign={"center"} fontFamily={"Long Cang"}>
        Add Products
      </Heading>
      <FormControl>
        <FormLabel>Product Name</FormLabel>
        <Input type="text" />
      </FormControl>
      <FormControl>
        <FormLabel>Description</FormLabel>
        <Input type="text" />
      </FormControl>
      <FormControl>
        <FormLabel>Price</FormLabel>
        <Input type="number" />
      </FormControl>
      <FormControl>
        <FormLabel>Stock</FormLabel>
        <Select placeholder="Select">
          <option value={1}>True</option>
          <option value={0}>False</option>
        </Select>
      </FormControl>
      <FormControl>
        <FormLabel>Image</FormLabel>
        <Input type="file" border={"none"} />
      </FormControl>
      <FormControl>
        <FormLabel>Category</FormLabel>
        <Select placeholder="Select">
          {categories.map((category) => (
            <option value={category.category} key={category._id}>
              {category.category}
            </option>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default AddProduct;
