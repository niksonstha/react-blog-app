/* eslint-disable react/prop-types */
import { Box, UnorderedList, ListItem, Text } from "@chakra-ui/react";
import Cookies from "js-cookie";
import { NavLink, useNavigate } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { IoLogOut } from "react-icons/io5";
const Profile = ({ onClick }) => {
  const navigate = useNavigate();

  const logoutHandler = () => {
    Cookies.remove("uid");
    navigate("/login");
  };
  return (
    <Box width={"200px"} padding={4} onClick={onClick} color={"black"}>
      <UnorderedList display={"flex"} flexDirection={"column"} gap={3}>
        <ListItem
          listStyleType={"none"}
          cursor={"pointer"}
          _hover={{ color: "red", fontWeight: "bold" }}
          display={"flex"}
          alignItems={"center"}
          gap={2}
        >
          <FaUser />
          <NavLink to={"/profile"}>Profle</NavLink>
        </ListItem>

        <ListItem
          listStyleType={"none"}
          onClick={logoutHandler}
          cursor={"pointer"}
          _hover={{ color: "red", fontWeight: "bold" }}
          display={"flex"}
          alignItems={"center"}
          gap={2}
        >
          <IoLogOut fontSize={"1.3rem"} />
          <Text>Logout</Text>
        </ListItem>
      </UnorderedList>
    </Box>
  );
};

export default Profile;
