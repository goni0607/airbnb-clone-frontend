import { Button, Heading, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { NavLink } from "react-router-dom";

export default function NotFound() {
  return (
    <VStack justifyContent={"center"} minHeight={"100vh"} bgColor={"gray.100"}>
      <Heading>404 Page not found</Heading>
      <Text>It seems that you're lost.</Text>
      <Button as={NavLink} to="/" variant={"link"} colorScheme={"red"}>
        Go Home &rarr;
      </Button>
    </VStack>
  );
}
