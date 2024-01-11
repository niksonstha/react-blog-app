/* eslint-disable react/prop-types */
import { Box, Heading, UnorderedList, ListItem, Text } from "@chakra-ui/react";
import { MdDashboard, MdCategory, MdOutlineMenuBook } from "react-icons/md";
import { HiMiniUsers } from "react-icons/hi2";
import { NavLink } from "react-router-dom";
import { RxCross1 } from "react-icons/rx";
import { MdFastfood } from "react-icons/md";

const Sidebar = ({ handleSidebar }) => {
  return (
    <Box bgColor={"#7D7C7C"} height={"100vh"} color={"black"}>
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Heading
          fontFamily={"Long Cang"}
          textAlign={"center"}
          fontSize={"4rem"}
          ml={3}
          cursor={"pointer"}
          userSelect={"none"}
        >
          Bhojan
        </Heading>

        <Box as="span" mr={3}>
          <RxCross1
            fontSize={"1.4rem"}
            cursor={"pointer"}
            onClick={handleSidebar}
          />
        </Box>
      </Box>

      <UnorderedList
        listStyleType={"none"}
        m={0}
        display={"flex"}
        flexDirection={"column"}
        gap={5}
        mt={"2rem"}
        fontSize={"1.3rem"}
      >
        <NavLink to={"/admin/dashboard"}>
          <ListItem
            display={"flex"}
            alignItems={"center"}
            gap={2}
            cursor={"pointer"}
            transition={"all 0.1s ease-in"}
            _hover={{
              bgColor: "#9e9d9d",
            }}
            padding={4}
          >
            <MdDashboard />
            <Text>Dashboard</Text>
          </ListItem>
        </NavLink>
        <NavLink to={"/admin/dashboard/customers"}>
          <ListItem
            display={"flex"}
            alignItems={"center"}
            gap={2}
            cursor={"pointer"}
            transition={"all 0.1s ease-in"}
            _hover={{
              bgColor: "#9e9d9d",
            }}
            padding={4}
          >
            <HiMiniUsers />
            <Text>Users</Text>
          </ListItem>
        </NavLink>
        <NavLink to={"/admin/dashboard/orders"}>
          <ListItem
            display={"flex"}
            alignItems={"center"}
            gap={2}
            cursor={"pointer"}
            transition={"all 0.1s ease-in"}
            _hover={{
              bgColor: "#9e9d9d",
            }}
            padding={4}
          >
            <MdFastfood />
            <Text>Orders</Text>
          </ListItem>
        </NavLink>

        <NavLink to={"/admin/dashboard/category"}>
          <ListItem
            display={"flex"}
            alignItems={"center"}
            gap={2}
            cursor={"pointer"}
            transition={"all 0.1s ease-in"}
            _hover={{
              bgColor: "#9e9d9d",
            }}
            padding={4}
          >
            <MdCategory />
            <Text>Category</Text>
          </ListItem>
        </NavLink>

        <NavLink to={"/admin/dashboard/menu"}>
          <ListItem
            display={"flex"}
            alignItems={"center"}
            gap={2}
            cursor={"pointer"}
            transition={"all 0.1s ease-in"}
            _hover={{
              bgColor: "#9e9d9d",
            }}
            padding={4}
          >
            <MdOutlineMenuBook />
            <Text>Menu</Text>
          </ListItem>
        </NavLink>
      </UnorderedList>
    </Box>
  );
};

export default Sidebar;
