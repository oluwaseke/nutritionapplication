import * as React from "react";

import {
  Avatar,
  Box,
  Button,
  Center,
  Flex,
  Link,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Stack,
} from "@chakra-ui/react";

import { Link as Linker } from "react-router-dom";

export default function OtherNav() {
  return (
    <>
      <Box bg={"gray.100"} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <Box>EatRight!</Box>

          <Flex alignItems={"center"}>
            <Stack direction={"row"} spacing={7}>
              <Menu>
                <MenuButton
                  as={Button}
                  rounded={"full"}
                  variant={"link"}
                  cursor={"pointer"}
                  minW={0}
                >
                  <Avatar size={"sm"} src={"https://bit.ly/broken-link"} />
                </MenuButton>
                <MenuList bg={"gray.100"} alignItems={"center"}>
                  <br />
                  <Center>
                    <Avatar size={"2xl"} src={"https://bit.ly/broken-link"} />
                  </Center>
                  <MenuDivider />
                  <MenuItem>
                    <Link
                      px={2}
                      py={1}
                      rounded={"md"}
                      _hover={{
                        textDecoration: "none",
                        bg: "gray.200",
                      }}
                    >
                      <Linker to="/dashboard">Meal Planner</Linker>
                    </Link>
                  </MenuItem>
                  <MenuItem>
                    <Link
                      px={2}
                      py={1}
                      rounded={"md"}
                      _hover={{
                        textDecoration: "none",
                        bg: "gray.200",
                      }}
                    >
                      <Linker to="/recipe">Recipe Database</Linker>
                    </Link>
                  </MenuItem>
                  <MenuItem>
                    <Link
                      px={2}
                      py={1}
                      rounded={"md"}
                      _hover={{
                        textDecoration: "none",
                        bg: "gray.200",
                      }}
                    >
                      <Linker to="/fridge">What's in your Fridge?</Linker>
                    </Link>
                  </MenuItem>
                  <MenuDivider />
                  <MenuItem>
                    <Link
                      color={"red.500"}
                      px={2}
                      py={1}
                      rounded={"md"}
                      _hover={{
                        textDecoration: "none",
                        bg: "gray.200",
                      }}
                    >
                      <Linker to="/">Logout</Linker>
                    </Link>
                  </MenuItem>
                </MenuList>
              </Menu>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
