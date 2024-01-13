import { Box, Heading, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { fetchAllUsers } from "../api/api";

const DashboardScreen = () => {
  const [users, setUsers] = useState(0);

  const fetchUsersAndProducts = async () => {
    const resUser = await fetchAllUsers();
    setUsers(resUser.data.length);
  };

  useEffect(() => {
    fetchUsersAndProducts();
  }, []);

  return (
    <Box width={"80vw"} mr={"auto"} ml={"auto"} fontFamily={"Long Cang"}>
      <Heading
        textAlign={"center"}
        fontFamily={"Long Cang"}
        mb={5}
        fontSize={"3rem"}
      >
        Dashboard
      </Heading>
      <Box display={"flex"} justifyContent={"center"} gap={5} color={"black"}>
        <Box
          flex={1}
          bgColor={"#8caced"}
          height={"200px"}
          rounded={10}
          display={"flex"}
          alignItems={"center"}
          flexDirection={"column"}
        >
          <Text fontSize={"3rem"}>Total Customers</Text>
          <Text fontSize={"4rem"}>{users}</Text>
        </Box>
        <Box
          flex={1}
          bgColor={"#ea8ced"}
          height={"200px"}
          rounded={10}
          display={"flex"}
          alignItems={"center"}
          flexDirection={"column"}
        >
          <Text fontSize={"3rem"}>Total Customers</Text>
          <Text fontSize={"4rem"}>{users}</Text>
        </Box>
      </Box>
    </Box>
  );
};

export default DashboardScreen;
