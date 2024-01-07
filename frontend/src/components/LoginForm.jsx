import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Button,
  useToast,
  Text,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { loginUser } from "../api/api";
import { NavLink, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const toast = useToast();
  const navigate = useNavigate();

  const HandleLogin = async () => {
    const login = await loginUser(email, password);
    console.log(login);
    if (login) {
      toast({
        title: "Login Successfull",
        status: "success",
        duration: 2000,
        isClosable: true,
      });
      navigate("/");
    } else {
      toast({
        title: "Please use valid email and password",
        status: "error",
        duration: 2000,
        isClosable: true,
      });
    }

    setEmail("");
    setPassword("");
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const validateUser = () => {
    const cookie = Cookies.get("uid");

    if (cookie) {
      navigate("/");
    }
  };
  useEffect(() => {
    validateUser();
  }, [validateUser]);

  return (
    <Box width={"90%"} mb={5}>
      <FormControl display="flex" gap={5} flexDirection={"column"}>
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
        <Button colorScheme="teal" width={"30%"} onClick={HandleLogin}>
          Login
        </Button>
      </FormControl>
      <Text
        mt={4}
        color={"#CCC8AA"}
        cursor={"pointer"}
        _hover={{ textDecoration: "underline" }}
      >
        <NavLink to={"/register"}>Create an account</NavLink>
      </Text>
    </Box>
  );
};

export default LoginForm;
