import { Box, Heading, Text } from "@chakra-ui/react";
import { jwtDecode } from "jwt-decode";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";

const ProfileScreen = () => {
  const [profile, setProfile] = useState({});

  const getProfile = () => {
    const token = Cookies.get("uid");
    const decoded = jwtDecode(token);
    setProfile(decoded);
  };

  useEffect(() => {
    getProfile();
  }, []);

  return (
    <Box
      bgColor={"#F1EFEF"}
      width={["90vw", "90vw", "80vw", "70vw", "60vw", "50vw"]}
      ml={"auto"}
      mr={"auto"}
      mt={10}
      color={"black"}
      height={"50vh"}
      rounded={10}
      padding={3}
    >
      <Heading
        fontFamily={"'Long Cang', cursive"}
        fontSize={"4rem"}
        userSelect={"none"}
      >
        MY PROFILE
      </Heading>
      <Text>Fullname: {profile.fullname}</Text>
      <Text>Username: {profile.username}</Text>
      <Text>Email: {profile.email}</Text>
    </Box>
  );
};

export default ProfileScreen;
