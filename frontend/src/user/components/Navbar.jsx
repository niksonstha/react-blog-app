import { Box, Heading, UnorderedList, ListItem } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { FaBarsStaggered } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import { useEffect, useState } from "react";
import Profile from "./Profile";
import { FaBasketShopping } from "react-icons/fa6";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const [scrolling, setScrolling] = useState(false);
  const location = useLocation();

  const navbarHandler = () => {
    setNav(!nav);
  };

  const profileHandler = () => {
    setShowProfile(!showProfile);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Box
      pos={"fixed"}
      width={"100%"}
      zIndex={1000}
      top={0}
      left={0}
      bg={scrolling ? "rgba(0, 0, 0, 0.2)" : "transparent"} // Adjust the color and opacity as needed
      backdropFilter={scrolling ? "blur(10px)" : "none"} // Add blur effect when scrolling
      transition={
        "background-color 0.3s ease-in-out, backdrop-filter 0.3s ease-in-out"
      }
    >
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

      <Box
        as="nav"
        height={"max-content"}
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
        overflowX={"hidden"}
        transition={"all 0.3s ease-in"}
        mt={[3, 3, 0]}
        mb={[3, 3, 0]}
        style={{
          scrollSnapAlign: "start",
        }}
      >
        <Heading
          ml={[2, 5, 7, 10]}
          fontFamily={"'Long Cang', cursive"}
          fontSize={["1.3rem", "1.5rem", "2rem"]}
          cursor={"pointer"}
          letterSpacing={4}
        >
          <NavLink to={"/"}>ImNIXON</NavLink>
        </Heading>
        <UnorderedList
          display={[`${nav ? "flex" : "none"}`, `${nav}`, "flex"]}
          flexDirection={["column", "column", "row"]}
          margin={0}
          gap={10}
          fontSize={"1rem"}
          fontWeight={500}
          position={nav && ["absolute", "absolute"]}
          top={"4rem"}
          // left={-5}
          bgColor={["rgba(0, 0, 0, 0.2)", "rgba(0, 0, 0, 0.2)", "transparent"]}
          width={["100%", "100%", "auto"]}
          zIndex={20}
          padding={5}
          onClick={() => setNav(false)}
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
        <Box display={"flex"} alignItems={"center"} gap={5}>
          <Box cursor={"pointer"}>
            <FaBasketShopping fontSize={"1.3rem"} />
          </Box>
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
            fontSize={["0.8rem", "1rem"]}
          >
            <FaUser />
          </Box>

          <Box mr={3} display={["block", "block", "none"]}>
            <FaBarsStaggered cursor={"pointer"} onClick={navbarHandler} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Navbar;
