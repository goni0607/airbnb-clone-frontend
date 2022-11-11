import { Box, Button, Divider, HStack, Text, VStack } from "@chakra-ui/react";
import { FaComment, FaGithub } from "react-icons/fa";

export default function SocialLogin() {
  return (
    <Box mb={4}>
      <HStack my={4}>
        <Divider />
        <Text as={"b"} textTransform={"uppercase"} color={"gray.600"}>
          or
        </Text>
        <Divider />
      </HStack>
      <VStack>
        <Button
          as="a"
          href="https://github.com/login/oauth/authorize?client_id=4d7a711d9c6c56a24fd5&scope=read:user,user:email"
          leftIcon={<FaGithub />}
          colorScheme={"gray"}
          width={"100%"}
        >
          Continue with Github
        </Button>
        <Button leftIcon={<FaComment />} colorScheme={"yellow"} width={"100%"}>
          Continue with Kakao
        </Button>
      </VStack>
    </Box>
  );
}
