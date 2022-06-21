import {
  Box,
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function SimpleCard() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { email, password } = formData;
  const onChange = (e: any) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const onSubmit = (e: any) => {
    e.preventDefault();
  };
  let navigate = useNavigate();
  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"}>Sign in to your account</Heading>
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <form onSubmit={onSubmit}>
            <Stack spacing={4}>
              <FormControl>
                <FormLabel>Email address</FormLabel>
                <Input
                  id="email"
                  name="email"
                  value={email}
                  onChange={onChange}
                  type="email"
                />
              </FormControl>
              <FormControl>
                <FormLabel>Password</FormLabel>
                <Input
                  id="password"
                  name="password"
                  value={password}
                  onChange={onChange}
                  type="password"
                />
              </FormControl>
              <Stack spacing={10}>
                <Stack
                  direction={{ base: "column", sm: "row" }}
                  align={"center"}
                  justify={"space-between"}
                >
                  <Checkbox>Remember me</Checkbox>
                  <Button
                    variant={"link"}
                    colorScheme={"red"}
                    size={"sm"}
                    color={"red.100"}
                    onClick={() => navigate("/forgot-password")}
                  >
                    Forgot Password?
                  </Button>
                </Stack>
                <Button
                  bg={"red.400"}
                  color={"white"}
                  _hover={{
                    bg: "red.300",
                  }}
                >
                  Sign in
                </Button>
              </Stack>
              <Stack pt={6}>
                <Text align={"center"}>
                  Don't have an account?{" "}
                  <Button
                    variant={"link"}
                    colorScheme={"red"}
                    size={"md"}
                    color={"red.100"}
                    onClick={() => navigate("/sign-up")}
                  >
                    Sign Up
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
