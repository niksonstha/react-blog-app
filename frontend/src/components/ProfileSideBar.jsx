import { Box, UnorderedList, ListItem } from "@chakra-ui/react";
import { Link } from "react-router-dom";
const ProfileSideBar = () => {
  return (
    <Box bgColor={"#F1EFEF"} rounded={5} height={"100%"} padding={4}>
      <UnorderedList>
        <ListItem
          listStyleType={"none"}
          _hover={{ color: "red" }}
          cursor={"pointer"}
        >
          <Link to="/profile/userInfo">Profile</Link>
        </ListItem>
        <ListItem
          listStyleType={"none"}
          _hover={{ color: "red" }}
          cursor={"pointer"}
        >
          <Link to="/profile/updateProfile">Update Profile</Link>
        </ListItem>
      </UnorderedList>
    </Box>
  );
};

export default ProfileSideBar;
