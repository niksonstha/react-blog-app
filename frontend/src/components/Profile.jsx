/* eslint-disable react/prop-types */
import { Box, UnorderedList, ListItem } from "@chakra-ui/react";
import Cookies from "js-cookie";
import { NavLink, useNavigate } from "react-router-dom";
const Profile = ({ onClick }) => {
  const navigate = useNavigate();

  const logoutHandler = () => {
    Cookies.remove("uid");
    navigate("/login");
  };
  return (
    <Box width={"200px"} padding={4} onClick={onClick}>
      <UnorderedList display={"flex"} flexDirection={"column"} gap={3}>
        <ListItem
          listStyleType={"none"}
          cursor={"pointer"}
          _hover={{ color: "red", fontWeight: "bold" }}
        >
          <NavLink to={"/profile"}>Profle</NavLink>
        </ListItem>

        <ListItem
          listStyleType={"none"}
          onClick={logoutHandler}
          cursor={"pointer"}
          _hover={{ color: "red", fontWeight: "bold" }}
        >
          Logout
        </ListItem>
      </UnorderedList>
    </Box>
  );
};

export default Profile;
