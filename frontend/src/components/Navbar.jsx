import { Box, Heading, UnorderedList, ListItem } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { FaBarsStaggered } from "react-icons/fa6";
import { useState } from "react";
import "./navbar.css";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const location = useLocation();

  const navbarHandler = () => {
    setNav(!nav);
  };

  return (
    <Box
      as="nav"
      bgColor="#7D7C7C"
      height={"5rem"}
      display={"flex"}
      justifyContent={"space-between"}
      alignItems={"center"}
      color={"black"}
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
        <NavLink to={"/"}>Blogify</NavLink>
      </Heading>
      <UnorderedList
        display={[`${nav ? "flex" : "none"}`, `${nav}`, "flex"]}
        flexDirection={["column", "column", "row"]}
        gap={10}
        fontSize={"1.2rem"}
        fontWeight={500}
        position={nav && ["absolute", "absolute"]}
        top={"5rem"}
        left={-5}
        bgColor={["#7D7C7C", "#7D7C7C", "transparent"]}
        width={["100%", "100%", "auto"]}
        zIndex={"10"}
        padding={5}
        className={nav ? "navVisible" : "navHidden"}
      >
        <ListItem
          listStyleType={"none"}
          cursor={"pointer"}
          transition={"all 0.2s ease-in"}
          _hover={{ color: "#F1EFEF" }}
          letterSpacing={2}
        >
          <NavLink
            to={"/"}
            style={{ color: location.pathname === "/" ? "#CCC8AA" : "#000" }}
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
              color: location.pathname === "/about" ? "#CCC8AA" : "#000",
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
              color: location.pathname === "/contact" ? "#CCC8AA" : "#000",
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
            to={"/blog"}
            style={{
              color: location.pathname === "/blog" ? "#CCC8AA" : "#000",
            }}
          >
            Blogs
          </NavLink>
        </ListItem>
      </UnorderedList>
      <Box mr={10} display={["block", "block", "none"]}>
        <FaBarsStaggered cursor={"pointer"} onClick={navbarHandler} />
      </Box>
    </Box>
  );
};

export default Navbar;
