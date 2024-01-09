import { Box, Heading } from "@chakra-ui/react";
import AdminRegistrationForm from "../components/AdminRegistrationForm";
const AdminRegisterScreen = () => {
  return (
    <Box
      width={["90%", "90%", "30%"]}
      height={"max-content"}
      ml={"auto"}
      mr={"auto"}
      display={"flex"}
      alignItems={"center"}
      flexDirection={"column"}
      bgColor={"#7D7C7C"}
      rounded={5}
      mt={10}
      color={"black"}
    >
      <Heading
        as="h1"
        fontSize="5rem"
        letterSpacing={5}
        fontFamily="'Long Cang', cursive"
      >
        REGISTER
      </Heading>
      <AdminRegistrationForm />
    </Box>
  );
};

export default AdminRegisterScreen;
