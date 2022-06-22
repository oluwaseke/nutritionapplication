import {
  Avatar,
  Box,
  Container,
  Flex,
  Heading,
  Stack,
  Text,
} from "@chakra-ui/react";
import * as React from "react";

import { ReactNode } from "react";

const Testimonial = ({ children }: { children: ReactNode }) => {
  return <Box>{children}</Box>;
};

const TestimonialContent = ({ children }: { children: ReactNode }) => {
  return (
    <Stack
      bg={"white"}
      boxShadow={"lg"}
      p={8}
      rounded={"xl"}
      align={"center"}
      pos={"relative"}
      _after={{
        content: `""`,
        w: 0,
        h: 0,
        borderLeft: "solid transparent",
        borderLeftWidth: 16,
        borderRight: "solid transparent",
        borderRightWidth: 16,
        borderTop: "solid",
        borderTopWidth: 16,
        borderTopColor: "white",
        pos: "absolute",
        bottom: "-16px",
        left: "50%",
        transform: "translateX(-50%)",
      }}
    >
      {children}
    </Stack>
  );
};

const TestimonialHeading = ({ children }: { children: ReactNode }) => {
  return (
    <Heading as={"h3"} fontSize={"xl"}>
      {children}
    </Heading>
  );
};

const TestimonialText = ({ children }: { children: ReactNode }) => {
  return (
    <Text textAlign={"center"} color={"gray.600"} fontSize={"sm"}>
      {children}
    </Text>
  );
};

const TestimonialAvatar = ({ src, name }: { src: string; name: string }) => {
  return (
    <Flex align={"center"} mt={8} direction={"column"}>
      <Avatar src={src} mb={2} />
      <Stack spacing={-1} align={"center"}>
        <Text fontWeight={600}>{name}</Text>
      </Stack>
    </Flex>
  );
};

export default function WithSpeechBubbles() {
  return (
    <Box bg={"gray.100"}>
      <Container maxW={"7xl"} py={16} as={Stack} spacing={12}>
        <Stack spacing={0} align={"center"}>
          <Heading>Our Users Speak</Heading>
          <Text>
            These are just a few of the reviews we have received on EatRight
          </Text>
        </Stack>
        <Stack
          direction={{ base: "column", md: "row" }}
          spacing={{ base: 10, md: 4, lg: 10 }}
        >
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>Unique Recipes</TestimonialHeading>
              <TestimonialText>
                I used to hate cooking before but EatRight has changed my life
                and made cooking so fun.
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              src={
                "https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80"
              }
              name={"Jane"}
            />
          </Testimonial>
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>Efficient Meal Planning</TestimonialHeading>
              <TestimonialText>
                My kids no longer say that meals are boring and monotonous as
                with EatRight, I don't have to make repetitive meals.
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              src={"https://bit.ly/broken-link"}
              name={"Mark"}
            />
          </Testimonial>
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>Wonderful</TestimonialHeading>
              <TestimonialText>
                I am so glad I found EatRight. It has been so beneficial to me
                with so many advantages.
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              name={"Walter"}
              src={"https://bit.ly/broken-link"}
            />
          </Testimonial>
        </Stack>
      </Container>
    </Box>
  );
}
