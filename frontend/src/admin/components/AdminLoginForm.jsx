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
// import { loginUser } from "../api/api";
import { NavLink } from "react-router-dom";
import { FaEyeSlash } from "react-icons/fa";

const AdminLoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [viewPassword, setViewPassword] = useState(true);
  //   const toast = useToast();

  //   const HandleLogin = async () => {
  //     const login = await loginUser(email, password);
  //     console.log(login);
  //     if (login) {
  //       toast({
  //         title: "Login Successfull",
  //         status: "success",
  //         duration: 2000,
  //         isClosable: true,
  //       });
  //     } else {
  //       toast({
  //         title: "Please use valid email and password",
  //         status: "error",
  //         duration: 2000,
  //         isClosable: true,
  //       });
  //     }

  //     setEmail("");
  //     setPassword("");
  //   };

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

        <Box pos={"relative"}>
          <FormLabel htmlFor="password">Password</FormLabel>
          <Input
            id="password"
            type={viewPassword ? "password" : "text"}
            bgColor={"#F1EFEF"}
            outline={"none"}
            border={"none"}
            autoComplete="off"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Box
            as="span"
            pos={"absolute"}
            right={2}
            bottom={3}
            zIndex={10}
            userSelect={"none"}
          >
            <FaEyeSlash
              onClick={() => setViewPassword(!viewPassword)}
              cursor={"pointer"}
            />
          </Box>
        </Box>
        <Button colorScheme="teal" width={"30%"}>
          Login
        </Button>
      </FormControl>
      <Text
        mt={4}
        color={"#CCC8AA"}
        cursor={"pointer"}
        _hover={{ textDecoration: "underline" }}
      >
        <NavLink to={"/admin/register"}>Create an account</NavLink>
      </Text>
    </Box>
  );
};

export default AdminLoginForm;
