import * as React from "react";

import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  HStack,
  Heading,
  Input,
  InputGroup,
  Stack,
  Text,
} from "@chakra-ui/react";

import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function SignUp() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    username: "",
    password: "",
    password2: "",
  });
  const { name, email, username, password, password2 } = formData;
  const onChange = (e: any) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const onSubmit = (e: any) => {
    e.preventDefault();
  };
  const navigate = useNavigate();
  return (
    <Flex minH={"100vh"} align={"center"} justify={"center"} bg={"gray.50"}>
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"} textAlign={"center"}>
            Sign up
          </Heading>
          <Text fontSize={"lg"} color={"gray.500"}>
            to enjoy all of our cool features ✌️
          </Text>
        </Stack>
        <Box rounded={"lg"} bg={"white"} boxShadow={"lg"} p={8}>
          <form onSubmit={onSubmit}>
            <Stack spacing={4}>
              <HStack>
                <Box>
                  <FormControl isRequired>
                    <FormLabel>Name</FormLabel>
                    <Input
                      type="text"
                      id="name"
                      name="name"
                      value={name}
                      onChange={onChange}
                      border="1px"
                      borderColor="gray.900"
                    />
                  </FormControl>
                </Box>
                <Box>
                  <FormControl isRequired>
                    <FormLabel>Username</FormLabel>
                    <Input
                      id="username"
                      name="username"
                      value={username}
                      onChange={onChange}
                      type="text"
                      border="1px"
                      borderColor="gray.900"
                    />
                  </FormControl>
                </Box>
              </HStack>
              <FormControl isRequired>
                <FormLabel>Email address</FormLabel>
                <Input
                  id="email"
                  name="email"
                  value={email}
                  onChange={onChange}
                  type="email"
                  border="1px"
                  borderColor="gray.900"
                />
              </FormControl>
              <FormControl isRequired>
                <FormLabel>Password</FormLabel>
                <InputGroup>
                  <Input
                    id="password"
                    name="password"
                    value={password}
                    onChange={onChange}
                    type="password"
                    border="1px"
                    borderColor="gray.900"
                  />
                </InputGroup>
              </FormControl>
              <FormControl isRequired>
                <FormLabel>Confirm password</FormLabel>
                <InputGroup>
                  <Input
                    id="password2"
                    name="password2"
                    value={password2}
                    onChange={onChange}
                    type="password"
                    border="1px"
                    borderColor="gray.900"
                  />
                </InputGroup>
              </FormControl>
              <Stack spacing={10} pt={2}>
                <Button
                  loadingText="Submitting"
                  size="lg"
                  bg={"red.400"}
                  color={"white"}
                  _hover={{
                    bg: "red.300",
                  }}
                  onClick={() => navigate("/biodata")}
                >
                  Sign up
                </Button>
              </Stack>
              <Stack pt={6}>
                <Text align={"center"}>
                  Already a user?{" "}
                  <Button
                    variant={"link"}
                    colorScheme={"red"}
                    size={"md"}
                    color={"red.100"}
                    onClick={() => navigate("/login")}
                  >
                    Login
                  </Button>
                </Text>
              </Stack>
            </Stack>
          </form>
        </Box>
      </Stack>
    </Flex>
  );
}
