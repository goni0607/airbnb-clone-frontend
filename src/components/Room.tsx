import { Box, Button, Grid, HStack, Image, Text, useColorModeValue, VStack } from '@chakra-ui/react'
import React from 'react'
import { FaRegHeart, FaStar } from 'react-icons/fa'

export default function Room() {
  const textGray = useColorModeValue("gray.600", "gray.300")
  return (
    <VStack w="100%" alignItems={"flex-start"} spacing="0">
      <Box position={"relative"} rounded="2xl" overflow="hidden" mb={3}>
        <Image w="100%" h="260px" src='https://a0.muscache.com/im/pictures/95b6a758-2acc-4861-ba67-eca78cb2f6c7.jpg?im_w=720' />
        <Button variant={"unstyled"} position={"absolute"} top={1} right={0} color="white">
          <FaRegHeart size={24} />
        </Button>
      </Box>
      <Grid gap={2} templateColumns={"6fr 1fr"}>
        <Text as={"strong"} noOfLines={1} fontSize="md">
          Sudong-myeon, Namyangju-si, 경기도, 한국
        </Text>
        <HStack spacing={1}>
          <FaStar size={15} />
          <Text>5.0</Text>
        </HStack>
      </Grid>
      <Text color={textGray}>
        Seoul, S. Korea
      </Text>
      <Text>
        <Text as="b">￦347,146</Text> /박
      </Text>
    </VStack>
  )
}
