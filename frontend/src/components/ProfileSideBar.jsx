import { Box, UnorderedList, ListItem } from "@chakra-ui/react";
import { Link } from "react-router-dom";
const ProfileSideBar = () => {
  return (
    <Box bgColor={"#F1EFEF"} rounded={5} height={"100%"} paddingTop={4}>
      <UnorderedList fontSize={["0.7rem", "0.7rem", "1rem"]}>
        <ListItem
          listStyleType={"none"}
          _hover={{ color: "red" }}
          cursor={"pointer"}
        >
          <Link to="/profile/">Profile</Link>
        </ListItem>
        <ListItem
          listStyleType={"none"}
          _hover={{ color: "red" }}
          cursor={"pointer"}
        >
          <Link to="/profile/updateProfile">Update Profile</Link>
        </ListItem>
        <ListItem
          listStyleType={"none"}
          _hover={{ color: "red" }}
          cursor={"pointer"}
        >
          <Link to="/profile/changePassword">Change Password</Link>
        </ListItem>
      </UnorderedList>
    </Box>
  );
};

export default ProfileSideBar;
