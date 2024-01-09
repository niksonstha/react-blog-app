import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Button,
  useToast,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import { adminRegister } from "../api/api";
import { NavLink, useNavigate } from "react-router-dom";

const AdminRegistrationForm = () => {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const toast = useToast();
  const navigate = useNavigate();

  const handleRegister = async () => {
    const register = await adminRegister(fullname, email, password);
    if (register) {
      toast({
        title: "Account created.",
        description: "We've created your account for you.",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
      navigate("/admin/login");
    }

    setFullname("");
    setEmail("");
    setPassword("");
  };

  return (
    <Box width={"90%"} mb={5}>
      <FormControl display="flex" gap={5} flexDirection={"column"}>
        <Box>
          <FormLabel htmlFor="fullname">Full Name</FormLabel>
          <Input
            id="fullname"
            type="text"
            bgColor={"#F1EFEF"}
            outline={"none"}
            border={"none"}
            autoComplete="off"
            value={fullname}
            onChange={(e) => setFullname(e.target.value)}
          />
        </Box>

        <Box>
          <FormLabel htmlFor="email">Email</FormLabel>
          <Input
            id="email"
            type="email"
            bgColor={"#F1EFEF"}
            outline={"none"}
            border={"none"}
            autoComplete="off"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Box>

        <Box>
          <FormLabel htmlFor="password">Password</FormLabel>
          <Input
            id="password"
            type="password"
            bgColor={"#F1EFEF"}
            outline={"none"}
            border={"none"}
            autoComplete="off"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Box>
        <Button colorScheme="teal" width={"30%"} onClick={handleRegister}>
          Register
        </Button>
      </FormControl>
      <Text
        mt={4}
        color={"#CCC8AA"}
        cursor={"pointer"}
        _hover={{ textDecoration: "underline" }}
      >
        <NavLink to={"/admin/login"}>Already have account</NavLink>
      </Text>
    </Box>
  );
};

export default AdminRegistrationForm;
