import { Box, Grid, Heading, HStack, Image, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { FaStar } from 'react-icons/fa'

export default function Home() {
  return (
    <Grid px={20} my={10} columnGap={4} rowGap={8} templateColumns={"repeat(5, 1fr)"}>
      <VStack alignItems={"flex-start"} spacing="0">
        <Box rounded="2xl" overflow="hidden" mb={3}>
          <Image  h="260px" src='https://a0.muscache.com/im/pictures/95b6a758-2acc-4861-ba67-eca78cb2f6c7.jpg?im_w=720' />
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
        <Text color={"gray.600"}>
          Seoul, S. Korea
        </Text>
        <Text>
          <Text as="b">￦347,146</Text> /박
        </Text>
      </VStack>
      <Box w={"100%"} h={"120px"} bgColor={"red.400"}></Box>
      <Box w={"100%"} h={"120px"} bgColor={"red.400"}></Box>
      <Box w={"100%"} h={"120px"} bgColor={"red.400"}></Box>
      <Box w={"100%"} h={"120px"} bgColor={"red.400"}></Box>
      <Box w={"100%"} h={"120px"} bgColor={"red.400"}></Box>
      <Box w={"100%"} h={"120px"} bgColor={"red.400"}></Box>
      <Box w={"100%"} h={"120px"} bgColor={"red.400"}></Box>
      <Box w={"100%"} h={"120px"} bgColor={"red.400"}></Box>
      <Box w={"100%"} h={"120px"} bgColor={"red.400"}></Box>
      <Box w={"100%"} h={"120px"} bgColor={"red.400"}></Box>
      <Box w={"100%"} h={"120px"} bgColor={"red.400"}></Box>
      <Box w={"100%"} h={"120px"} bgColor={"red.400"}></Box>
      <Box w={"100%"} h={"120px"} bgColor={"red.400"}></Box>
      <Box w={"100%"} h={"120px"} bgColor={"red.400"}></Box>
      <Box w={"100%"} h={"120px"} bgColor={"red.400"}></Box>
      <Box w={"100%"} h={"120px"} bgColor={"red.400"}></Box>
      <Box w={"100%"} h={"120px"} bgColor={"red.400"}></Box>
      <Box w={"100%"} h={"120px"} bgColor={"red.400"}></Box>
      <Box w={"100%"} h={"120px"} bgColor={"red.400"}></Box>
    </Grid>
  )
}
