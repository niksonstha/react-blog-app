/* eslint-disable react-hooks/exhaustive-deps */
import {
  Box,
  Heading,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from "@chakra-ui/react";

import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { useEffect, useState } from "react";
import { getProducts } from "../api/api";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const data = await getProducts();
    setProducts(data.data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <Box color={"black"} height={"70vh"} overflowY={"scroll"} padding={10}>
      <Heading fontFamily={"Long Cang"} textAlign={"center"}>
        Menu Items
      </Heading>

      <Box>
        <TableContainer>
          <Table variant="striped" colorScheme="purple">
            <Thead>
              <Tr>
                <Th>SN</Th>
                <Th>Name</Th>
                <Th>Price</Th>
                <Th>Available</Th>
                <Th>Category</Th>
                <Th>Edit</Th>
                <Th>Delete</Th>
              </Tr>
            </Thead>
            <Tbody>
              {products.map((product, index) => (
                <Tr key={product._id}>
                  <Td>{index + 1}</Td>
                  <Td>{product.name}</Td>
                  <Td>Rs {product.price}</Td>
                  <Td
                    color={product.inStock === true ? "green" : "red"}
                    fontWeight={"bold"}
                  >
                    {product.inStock === true ? "In Stock" : "Out of stock"}
                  </Td>
                  <Td>{product.categoryId.category}</Td>
                  <Td cursor={"pointer"}>
                    <FaEdit color="green" fontSize={"1.2rem"} />
                  </Td>
                  <Td cursor={"pointer"}>
                    <MdDelete color="red" fontSize={"1.2rem"} />
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
};

export default ProductList;
