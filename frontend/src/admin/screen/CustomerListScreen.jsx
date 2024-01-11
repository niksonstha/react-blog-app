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
import { useEffect, useState } from "react";
import { fetchAllUsers } from "../api/api";
import { motion } from "framer-motion";

const CustomerListScreen = () => {
  const [getAllUsers, setGetAllUsers] = useState([]);

  const getUsers = async () => {
    const data = await fetchAllUsers();
    setGetAllUsers(data);
  };

  useEffect(() => {
    getUsers();
  }, []);
  return (
    <Box
      as={motion.div}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition="0.2s linear"
    >
      <Heading fontFamily={"Long Cang"} fontSize={"4rem"} textAlign={"center"}>
        Customers
      </Heading>

      <TableContainer width={"80vw"} ml={"auto"} mr={"auto"}>
        <Table variant="simple" colorScheme="purple">
          <Thead>
            <Tr>
              <Th color={"white"}>SN</Th>
              <Th color={"white"}>Fullname</Th>
              <Th color={"white"}>Email</Th>
              <Th color={"white"}>Edit</Th>
            </Tr>
          </Thead>

          <Tbody>
            {getAllUsers.data?.map((users, index) => (
              <Tr key={users.id}>
                <Td>{index + 1}</Td>
                <Td>{users.fullname}</Td>
                <Td>{users.email}</Td>
                <Td>
                  <Button colorScheme="purple">View</Button>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default CustomerListScreen;
