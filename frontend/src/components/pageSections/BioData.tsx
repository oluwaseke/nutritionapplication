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

export default function BioData() {
  const [formData, setFormData] = useState({
    age: undefined,
    height: undefined,
    weight: undefined,
    genotype: "",
    bloodGrp: "",
  });
  const { age, height, weight, genotype, bloodGrp } = formData;
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
            BioData
          </Heading>
        </Stack>
        <Box rounded={"lg"} bg={"white"} boxShadow={"lg"} p={8}>
          <form onSubmit={onSubmit}>
            <Stack spacing={4}>
              <HStack>
                <Box>
                  <FormControl isRequired>
                    <FormLabel>Age</FormLabel>
                    <Input
                      type="number"
                      id="age"
                      name="age"
                      value={age}
                      onChange={onChange}
                      border="1px"
                      borderColor="gray.900"
                    />
                  </FormControl>
                </Box>
                <Box>
                  <FormControl isRequired>
                    <FormLabel>Height (in cm)</FormLabel>
                    <Input
                      id="height"
                      name="height"
                      value={height}
                      onChange={onChange}
                      type="number"
                      border="1px"
                      borderColor="gray.900"
                    />
                  </FormControl>
                </Box>
              </HStack>
              <FormControl isRequired>
                <FormLabel>Weight (in kg)</FormLabel>
                <Input
                  id="weight"
                  name="weight"
                  value={weight}
                  onChange={onChange}
                  type="number"
                  border="1px"
                  borderColor="gray.900"
                />
              </FormControl>
              <FormControl isRequired>
                <FormLabel>Genotype</FormLabel>
                <InputGroup>
                  <Input
                    id="genotype"
                    name="genotype"
                    value={genotype}
                    onChange={onChange}
                    type="text"
                    border="1px"
                    borderColor="gray.900"
                  />
                </InputGroup>
              </FormControl>
              <FormControl isRequired>
                <FormLabel>Blood Group</FormLabel>
                <InputGroup>
                  <Input
                    id="bloodGrp"
                    name="bloodGrp"
                    value={bloodGrp}
                    onChange={onChange}
                    type="text"
                    border="1px"
                    borderColor="gray.900"
                  />
                </InputGroup>
              </FormControl>
              <Stack spacing={10} pt={2}>
                <Button
                  type="submit"
                  loadingText="Loading"
                  size="lg"
                  bg={"red.400"}
                  color={"white"}
                  _hover={{
                    bg: "red.300",
                  }}
                  onClick={() => navigate("/meal-planner")}
                >
                  Submit
                </Button>
              </Stack>
            </Stack>
          </form>
        </Box>
      </Stack>
    </Flex>
  );
}
