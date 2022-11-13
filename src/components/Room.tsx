import {
  Box,
  Button,
  Grid,
  HStack,
  Image,
  Text,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { FaCamera, FaRegHeart, FaStar } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

interface IRoomProps {
  pk: number;
  imageUrl: string;
  name: string;
  rating: number;
  city: string;
  country: string;
  price: number;
  isOwner: boolean;
}

export default function Room({
  pk,
  imageUrl,
  name,
  rating,
  city,
  country,
  price,
  isOwner,
}: IRoomProps) {
  const textGray = useColorModeValue("gray.600", "gray.300");
  const navigate = useNavigate();
  const onCameraClick = (e: React.SyntheticEvent<HTMLButtonElement>) => {
    e.preventDefault();
    navigate(`/rooms/${pk}/photos`);
  };
  return (
    <Link to={`/rooms/${pk}`}>
      <VStack w="100%" alignItems={"flex-start"} spacing="0">
        <Box position={"relative"} rounded="2xl" overflow="hidden" mb={3}>
          <Image w="100%" h="260px" src={imageUrl} />
          <Button
            variant={"unstyled"}
            position={"absolute"}
            top={1}
            right={0}
            onClick={onCameraClick}
            color="white"
          >
            {isOwner ? <FaCamera size={24} /> : <FaRegHeart size={24} />}
          </Button>
        </Box>
        <Grid w={"100%"} gap={2} templateColumns={"6fr 1fr"}>
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
    </Link>
  );
}
