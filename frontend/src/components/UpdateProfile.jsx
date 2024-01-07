/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Heading, Input, Button, useToast } from "@chakra-ui/react";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";
import { useState } from "react";
import { updateUser } from "../api/api";

const UpdateProfile = () => {
  const token = Cookies.get("uid");
  const decoded = jwtDecode(token);
  const [fullname, setFullname] = useState(decoded.fullname);
  const [email, setEmail] = useState(decoded.email);
  const toast = useToast();

  const updateProfile = async () => {
    await updateUser(decoded._id, fullname, email);
    setFullname("");
    setEmail("");
    toast({
      title: "Name and email changed successfully",
      status: "success",
      duration: 2000,
      isClosable: true,
    });
  };

  return (
    <Box>
      <Heading fontSize={"1.2rem"} mb={4}>
        Update Profile
      </Heading>
      <Box display={"flex"} flexDirection={"column"} gap={5}>
        <Input
          type="text"
          placeholder="Enter your fullname"
          border={"2px solid black"}
          _focus={{ border: "none", outline: "none" }}
          value={fullname}
          onChange={(e) => setFullname(e.target.value)}
        />
        <Input
          type="text"
          placeholder="Enter your Email"
          border={"2px solid black"}
          _focus={{ border: "none", outline: "none" }}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </Box>
      <Button colorScheme="green" mt={5} onClick={updateProfile}>
        Update
      </Button>
    </Box>
  );
};

export default UpdateProfile;
