import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Select,
  Heading,
  Button,
} from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import { addProduct, getCategory } from "../api/api";

const AddProduct = () => {
  const [categories, setcategories] = useState([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState();
  const [image, setImage] = useState(null);
  const [categoryId, setCategoryId] = useState("");
  const fileInputRef = useRef(null);

  const handleAddProduct = async () => {
    await addProduct(name, description, price, stock, image, categoryId);
    setName("");
    setDescription("");
    setPrice("");
    setStock("");
    setImage("");
    setCategoryId("");
    if (image !== null) {
      resetFileInput();
    }
  };

  const resetFileInput = () => {
    // Create a new input element
    const newFileInput = document.createElement("input");
    newFileInput.type = "file";

    // Replace the existing file input with the new one
    if (fileInputRef.current && fileInputRef.current.parentNode) {
      fileInputRef.current.parentNode.replaceChild(
        newFileInput,
        fileInputRef.current
      );
    }

    // Update the ref to point to the new input element
    fileInputRef.current = newFileInput;
  };

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
        <Input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </FormControl>
      <FormControl>
        <FormLabel>Description</FormLabel>
        <Input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </FormControl>
      <FormControl>
        <FormLabel>Price</FormLabel>
        <Input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
      </FormControl>
      <FormControl>
        <FormLabel>Stock</FormLabel>
        <Select
          placeholder="Select"
          value={stock}
          onChange={(e) => setStock(e.target.value)}
        >
          <option value={1}>In Stock</option>
          <option value={0}>Out of Stock</option>
        </Select>
      </FormControl>
      <FormControl>
        <FormLabel>Image</FormLabel>
        <Input
          type="file"
          border={"none"}
          onChange={(e) => setImage(e.target.files[0])}
          ref={fileInputRef}
        />
      </FormControl>
      <FormControl>
        <FormLabel>Category</FormLabel>
        <Select
          onChange={(e) => setCategoryId(e.target.value)}
          value={categoryId}
        >
          <option value="" disabled>
            Select category
          </option>
          {categories.map((category) => (
            <option value={category._id} key={category._id}>
              {category.category}
            </option>
          ))}
        </Select>

        <Button colorScheme="purple" mt={2} onClick={handleAddProduct}>
          Add Product
        </Button>
      </FormControl>
    </Box>
  );
};

export default AddProduct;
