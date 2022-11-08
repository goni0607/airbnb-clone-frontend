import { Box, Button, Divider, HStack, Text, VStack } from '@chakra-ui/react'
import { FaComment, FaGithub } from 'react-icons/fa'

export default function SocialLogin() {
  return (
    <Box mb={4}>
        <HStack my={4}>
            <Divider />
            <Text as={"b"} textTransform={"uppercase"} color={"gray.600"}>or</Text>
            <Divider />
        </HStack>
        <VStack>
            <Button leftIcon={<FaGithub />} colorScheme={"blackAlpha"} width={"100%"}>Continue with Github</Button>
            <Button leftIcon={<FaComment />} colorScheme={"yellow"}  width={"100%"}>Continue with Kakao</Button>
        </VStack>
    </Box>
  )
}
