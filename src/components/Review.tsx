import { Avatar, Heading, HStack, Text, VStack } from "@chakra-ui/react";
import { FaStar } from "react-icons/fa";
import { IReview } from "../types";

export default function Review({ user, rating, payload }: IReview) {
  return (
    <VStack alignItems={"flex-start"}>
      <HStack alignItems={"center"}>
        <Avatar name={user.name} src={user.avatar} size={"md"} />
        <VStack alignItems={"flex-start"} spacing={0}>
          <Heading as={"h4"} size={"sm"}>
            {user.name}
          </Heading>
          <HStack spacing={1}>
            <FaStar size="10" />
            <Text>{rating}</Text>
          </HStack>
        </VStack>
      </HStack>
      <Text>{payload}</Text>
    </VStack>
  );
}
