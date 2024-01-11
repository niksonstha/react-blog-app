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
  useDisclosure,
} from "@chakra-ui/react";
import { useCallback, useEffect, useState } from "react";
import { deleteUser, fetchAllUsers } from "../api/api";
import { motion } from "framer-motion";
import UserModel from "../components/UserModel";

const CustomerListScreen = () => {
  const [getAllUsers, setGetAllUsers] = useState([]);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const getUsers = async () => {
    const data = await fetchAllUsers();
    setGetAllUsers(data);
  };

  const handleDelete = useCallback(async (id) => {
    await deleteUser(id);
    getUsers();
  }, []);

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
        <Table>
          <Thead>
            <Tr>
              <Th color={"white"}>SN</Th>
              <Th color={"white"}>Fullname</Th>
              <Th color={"white"}>Email</Th>
              <Th color={"white"}>Edit</Th>
              <Th color={"white"}>Delete</Th>
            </Tr>
          </Thead>

          <Tbody>
            {getAllUsers.data?.map((users, index) => (
              <Tr key={users.id}>
                <Td>{index + 1}</Td>
                <Td>{users.fullname}</Td>
                <Td>{users.email}</Td>
                <Td>
                  <Button
                    colorScheme="purple"
                    onClick={onOpen}
                    fontSize={"0.7rem"}
                  >
                    View
                  </Button>
                </Td>
                <Td>
                  <Button
                    colorScheme="red"
                    onClick={() => handleDelete(users.id)}
                    fontSize={"0.7rem"}
                  >
                    Delete
                  </Button>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
      <UserModel isOpen={isOpen} onClose={onClose} />
    </Box>
  );
};

export default CustomerListScreen;
