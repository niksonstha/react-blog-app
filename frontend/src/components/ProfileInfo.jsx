import { Box, Text } from "@chakra-ui/react";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";
import { useEffect, useState } from "react";

const ProfileInfo = () => {
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
    <Box>
      <Text>Fullname: {profile.fullname}</Text>
      <Text>Username: {profile.username}</Text>
      <Text>Email: {profile.email}</Text>
    </Box>
  );
};

export default ProfileInfo;
