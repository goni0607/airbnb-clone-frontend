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
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getRoom } from "../api";
import ReviewList from "../components/ReviewList";
import { IRoomDetail } from "../types";
import { useState } from "react";

export default function RoomDetail() {
  const { roomPk } = useParams();
  const { isLoading, data } = useQuery<IRoomDetail>(
    ["/rooms/", roomPk],
    getRoom
  );
  const [dates, setDates] = useState<Date>();

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
              {data?.photos && data.photos[index] ? (
                <Image
                  w="100%"
                  h="100%"
                  objectFit={"cover"}
                  src={data?.photos[index].file}
                />
              ) : (
                <HStack
                  w="100%"
                  h="100%"
                  bgColor={"gray.100"}
                  justifyContent={"center"}
                  alignItems={"center"}
                >
                  <Text color={"gray.600"} fontWeight={"bold"}>
                    No Image
                  </Text>
                </HStack>
              )}
            </Skeleton>
          </GridItem>
        ))}
      </Grid>
      <Grid templateColumns={"2fr 1fr"} mt={12} columnGap={8}>
        <Box>
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
        <Box>
          <Calendar
            onChange={setDates}
            selectRange
            minDate={new Date()}
            maxDate={new Date(Date.now() + 60 * 60 * 24 * 90 * 1000)}
            minDetail={"month"}
            next2Label={null}
            prev2Label={null}
          />
        </Box>
      </Grid>
    </Box>
  );
}
