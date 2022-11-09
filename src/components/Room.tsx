import { Box, Button, Grid, HStack, Image, Text, useColorModeValue, VStack } from '@chakra-ui/react'
import React from 'react'
import { FaRegHeart, FaStar } from 'react-icons/fa'

interface IRoomProps {
  imageUrl:string;
  name:string;
  rating:number;
  city:string;
  country:string;
  price:number;
}

export default function Room({ imageUrl, name, rating, city, country, price }: IRoomProps) {
  const textGray = useColorModeValue("gray.600", "gray.300")
  return (
    <VStack w="100%" alignItems={"flex-start"} spacing="0">
      <Box position={"relative"} rounded="2xl" overflow="hidden" mb={3}>
        <Image w="100%" h="260px" src={imageUrl} />
        <Button variant={"unstyled"} position={"absolute"} top={1} right={0} color="white">
          <FaRegHeart size={24} />
        </Button>
      </Box>
      <Grid gap={2} templateColumns={"6fr 1fr"}>
        <Text as={"strong"} noOfLines={1} fontSize="md">
          {name}
        </Text>
        <HStack spacing={1}>
          <FaStar size={15} />
          <Text>{rating}</Text>
        </HStack>
      </Grid>
      <Text color={textGray}>
        {city}, {country}
      </Text>
      <Text>
        <Text as="b">${price}</Text> /박
      </Text>
    </VStack>
  )
}
