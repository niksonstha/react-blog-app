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
  Button,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { MdDelete } from "react-icons/md";
import { deleteCategory } from "../api/api";
import { useCategory } from "../context/store";

const CategoryList = () => {
  const { categories, fetchCategory } = useCategory();

  const deleteHandler = async (id) => {
    await deleteCategory(id);
    fetchCategory();
  };

  useEffect(() => {
    fetchCategory();
  }, []);
  return (
    <Box color={"black"} height={"70vh"} overflowY={"scroll"} padding={10}>
      <Heading fontFamily={"Long Cang"} textAlign={"center"}>
        Category List
      </Heading>

      <Box>
        <TableContainer>
          <Table variant="striped" colorScheme="purple">
            <Thead>
              <Tr>
                <Th>SN</Th>
                <Th>Category</Th>
                <Th>Delete</Th>
              </Tr>
            </Thead>
            <Tbody>
              {categories?.map((category, index) => (
                <Tr key={category._id}>
                  <Td>{index + 1}</Td>
                  <Td>{category?.category}</Td>
                  <Td>
                    <Button onClick={() => deleteHandler(category._id)}>
                      <MdDelete color="red" fontSize={"1.2rem"} />
                    </Button>
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

export default CategoryList;
