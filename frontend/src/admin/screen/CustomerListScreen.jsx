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

const CustomerListScreen = () => {
  return (
    <Box>
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
            <Tr>
              <Td>1</Td>
              <Td>Nikson shrestha</Td>
              <Td>sthanikson10@gmail.com</Td>
              <Td>
                <Button colorScheme="purple">View</Button>
              </Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default CustomerListScreen;
