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
  TableCaption,
  TableContainer,
  Button,
} from "@chakra-ui/react";
import { useCallback, useEffect } from "react";
import { MdDelete } from "react-icons/md";
import { getCategory } from "../api/api";
import { useCategory } from "../context/context";

const CategoryList = () => {
  const { categoriesList, setCategories } = useCategory();

  const fetchCategory = useCallback(async () => {
    const res = await getCategory();
    setCategories(res.data.data);
  }, [setCategories]);

  useEffect(() => {
    fetchCategory();
  }, [fetchCategory]);
  return (
    <Box color={"black"}>
      <Heading fontFamily={"Long Cang"} textAlign={"center"}>
        Category List
      </Heading>

      <Box>
        <TableContainer>
          <Table variant="striped" colorScheme="purple">
            <TableCaption>Product Categories</TableCaption>
            <Thead>
              <Tr>
                <Th>SN</Th>
                <Th>Category</Th>
                <Th>Delete</Th>
              </Tr>
            </Thead>
            <Tbody>
              {categoriesList?.map((category, index) => (
                <Tr key={category?._id}>
                  <Td>{index + 1}</Td>
                  <Td>{category?.category}</Td>
                  <Td>
                    <Button>
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
