import {
  Avatar,
  Box,
  Grid,
  GridItem,
  Heading,
  HStack,
  Image,
  Skeleton,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import { FaStar } from "react-icons/fa";
import { useParams } from "react-router-dom";
import { getRoom, getRoomReviews } from "../api";
import Review from "../components/Review";
import ReviewList from "../components/ReviewList";
import { IReview, IRoomDetail } from "../types";

export default function RoomDetail() {
  const { roomPk } = useParams();
  const { isLoading, data } = useQuery<IRoomDetail>(
    ["/rooms/", roomPk],
    getRoom
  );

  return (
    <Box px={{ base: 5, md: 10, xl: 20 }} my={10}>
      <Skeleton isLoaded={!isLoading} h={9}>
        <Heading>{data?.name}</Heading>
      </Skeleton>
      <Grid
        rounded={"2xl"}
        overflow={"hidden"}
        mt={6}
        gap={2}
        height={"60vh"}
        templateColumns={"repeat(4, 1fr)"}
        templateRows={"1fr 1fr"}
      >
        {[0, 1, 2, 3, 4].map((index) => (
          <GridItem
            colSpan={index === 0 ? 2 : 1}
            rowSpan={index === 0 ? 2 : 1}
            overflow={"hidden"}
            key={index}
          >
            <Skeleton isLoaded={!isLoading} w="100%" h="100%">
              <Image
                w="100%"
                h="100%"
                objectFit={"cover"}
                src={data?.photos[index].file}
              />
            </Skeleton>
          </GridItem>
        ))}
      </Grid>
      <Box mt={10} w="60%">
        <HStack justifyContent={"space-between"}>
          <VStack alignItems={"flex-start"}>
            <Skeleton isLoaded={!isLoading}>
              <Heading as={"h3"} size={"lg"}>
                House hosted by {data?.owner.name}
              </Heading>
            </Skeleton>
            <Skeleton isLoaded={!isLoading}>
              <HStack justifyContent={"flex-start"} w="100%">
                <Text>{data?.toilets} toliets</Text>
                <Text>&middot;</Text>
                <Text>{data?.rooms} rooms</Text>
              </HStack>
            </Skeleton>
          </VStack>
          <Avatar
            size={"lg"}
            name={data?.owner.name}
            src={data?.owner.avatar}
          />
        </HStack>

        {/* Reviews Area */}
        {isLoading ? null : <ReviewList room={data as IRoomDetail} />}
      </Box>
    </Box>
  );
}
