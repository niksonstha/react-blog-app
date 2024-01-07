import { Box, Heading } from "@chakra-ui/react";
import ProfileSideBar from "../components/ProfileSideBar";
import { Outlet } from "react-router-dom";

const ProfileScreen = () => {
  return (
    <Box
      bgColor={"#7D7C7C"}
      width={["90vw", "90vw", "80vw", "70vw", "60vw", "50vw"]}
      ml={"auto"}
      mr={"auto"}
      mt={10}
      color={"black"}
      height={"max-content"}
      rounded={10}
      padding={3}
    >
      <Heading
        fontFamily={"'Long Cang', cursive"}
        fontSize={"4rem"}
        userSelect={"none"}
        letterSpacing={3}
      >
        MY PROFILE
      </Heading>
      <Box display={"flex"} gap={10}>
        <Box width={"30vw"} height={"40vh"}>
          <ProfileSideBar />
        </Box>
        <Box width={"70vw"}>
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
};

export default ProfileScreen;
