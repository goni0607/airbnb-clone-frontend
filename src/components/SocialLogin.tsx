import { Box, Button, Divider, HStack, Text, VStack } from "@chakra-ui/react";
import { FaComment, FaGithub } from "react-icons/fa";

export default function SocialLogin() {
  const githubParams = {
    client_id: "4d7a711d9c6c56a24fd5",
    scope: "read:user,user:email",
  };
  const githubParamsString = new URLSearchParams(githubParams).toString();
  const kakaoParams = {
    client_id: "06cad38e06055d45e3ecea6ae7747d00",
    redirect_uri: "http://127.0.0.1:3000/social/kakao",
    response_type: "code",
  };
  const kakaoParamsString = new URLSearchParams(kakaoParams).toString();
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
          href={`https://github.com/login/oauth/authorize?${githubParamsString}`}
          leftIcon={<FaGithub />}
          colorScheme={"gray"}
          width={"100%"}
        >
          Continue with Github
        </Button>
        <Button
          as={"a"}
          href={`https://kauth.kakao.com/oauth/authorize?${kakaoParamsString}`}
          leftIcon={<FaComment />}
          colorScheme={"yellow"}
          width={"100%"}
        >
          Continue with Kakao
        </Button>
      </VStack>
    </Box>
  );
}
