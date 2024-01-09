/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Heading, Input, Button, useToast } from "@chakra-ui/react";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";
import { useState } from "react";
import { changePassword } from "../api/api";

const ChangePassword = () => {
  const token = Cookies.get("uid");
  const decoded = jwtDecode(token);
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const toast = useToast();

  const updateProfile = async () => {
    const passwordChanged = await changePassword(
      decoded._id,
      currentPassword,
      newPassword
    );
    setCurrentPassword("");
    setNewPassword("");
    console.log(passwordChanged);
    passwordChanged &&
      toast({
        title: "Password changed successfully",
        status: "success",
        duration: 2000,
        isClosable: true,
      });
  };

  return (
    <Box>
      <Heading fontSize={"1.2rem"} mb={4}>
        Change Password
      </Heading>
      <Box display={"flex"} flexDirection={"column"} gap={5}>
        <Input
          type="text"
          placeholder="Enter your current password"
          border={"2px solid black"}
          _focus={{ border: "none", outline: "none" }}
          value={currentPassword}
          onChange={(e) => setCurrentPassword(e.target.value)}
        />
        <Input
          type="text"
          placeholder="Enter your new password"
          border={"2px solid black"}
          _focus={{ border: "none", outline: "none" }}
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
        />
      </Box>
      <Button colorScheme="green" mt={5} onClick={updateProfile}>
        Update
      </Button>
    </Box>
  );
};

export default ChangePassword;
