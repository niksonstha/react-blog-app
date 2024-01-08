import { Box, Heading, UnorderedList, ListItem } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { FaBarsStaggered } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import { useState } from "react";
import Profile from "./Profile";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const location = useLocation();

  const navbarHandler = () => {
    setNav(!nav);
  };

  const profileHandler = () => {
    setShowProfile(!showProfile);
  };

  return (
    <Box
      as="nav"
      // bgColor="#7D7C7C"
      height={"5rem"}
      display={"flex"}
      justifyContent={"space-between"}
      alignItems={"center"}
      overflowX={"hidden"}
      transition={"all 0.3s ease-in"}
    >
      <Heading
        ml={10}
        fontFamily={"'Long Cang', cursive"}
        fontSize={["2rem", "2.2rem", "3rem"]}
        cursor={"pointer"}
        letterSpacing={4}
      >
        <NavLink to={"/"}>ImNIXON</NavLink>
      </Heading>
      <UnorderedList
        display={[`${nav ? "flex" : "none"}`, `${nav}`, "flex"]}
        flexDirection={["column", "column", "row"]}
        gap={10}
        fontSize={"1rem"}
        fontWeight={500}
        position={nav && ["absolute", "absolute"]}
        top={"4rem"}
        left={-5}
        bgColor={["#7D7C7C", "#7D7C7C", "transparent"]}
        width={["100%", "100%", "auto"]}
        zIndex={"10"}
        padding={5}
      >
        <ListItem
          listStyleType={"none"}
          cursor={"pointer"}
          color={"white"}
          transition={"all 0.2s ease-in"}
          _hover={{ color: "#F1EFEF" }}
          letterSpacing={2}
        >
          <NavLink
            to={"/"}
            style={{ color: location.pathname === "/" ? "#CCC8AA" : "white" }}
          >
            Home
          </NavLink>
        </ListItem>
        <ListItem
          listStyleType={"none"}
          cursor={"pointer"}
          transition={"all 0.2s ease-in"}
          _hover={{ color: "#F1EFEF" }}
          letterSpacing={2}
        >
          <NavLink
            to={"/about"}
            style={{
              color: location.pathname === "/about" ? "#CCC8AA" : "white",
            }}
          >
            About Us
          </NavLink>
        </ListItem>
        <ListItem
          listStyleType={"none"}
          cursor={"pointer"}
          transition={"all 0.2s ease-in"}
          _hover={{ color: "#F1EFEF" }}
          letterSpacing={2}
        >
          <NavLink
            to={"/contact"}
            style={{
              color: location.pathname === "/contact" ? "#CCC8AA" : "white",
            }}
          >
            Contact Us
          </NavLink>
        </ListItem>
        <ListItem
          listStyleType={"none"}
          cursor={"pointer"}
          transition={"all 0.2s ease-in"}
          _hover={{ color: "#F1EFEF" }}
          letterSpacing={2}
        >
          <NavLink
            to={"/products"}
            style={{
              color: location.pathname === "/blog" ? "#CCC8AA" : "white",
            }}
          >
            Products
          </NavLink>
        </ListItem>
      </UnorderedList>
      <Box display={"flex"} alignItems={"center"}>
        <Box
          mr={3}
          display={["block", "block", "block"]}
          bgColor={"#F1EFEF"}
          padding={2}
          rounded={50}
          cursor={"pointer"}
          pos={"relative"}
          onClick={profileHandler}
          color={"black"}
        >
          <FaUser />
        </Box>
        <Box
          pos={"absolute"}
          bgColor={"#F1EFEF"}
          top={"5rem"}
          right={10}
          rounded={4}
          transition={"opacity 0.3s ease-in-out"}
          opacity={showProfile ? 1 : 0}
          pointerEvents={showProfile ? "all" : "none"}
          zIndex={1000}
        >
          {showProfile && <Profile onClick={profileHandler} />}
        </Box>
        <Box mr={3} display={["block", "block", "none"]}>
          <FaBarsStaggered cursor={"pointer"} onClick={navbarHandler} />
        </Box>
      </Box>
    </Box>
  );
};

export default Navbar;
