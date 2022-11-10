import {
  Box,
  Grid,
  GridItem,
  Heading,
  Image,
  Skeleton,
} from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getRoom } from "../api";
import { IRoomDetail } from "../types";

export default function RoomDetail() {
  const { roomPk } = useParams();
  const { isLoading, data } = useQuery<IRoomDetail>(
    ["/rooms/", roomPk],
    getRoom
  );
  console.log(data);
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
    </Box>
  );
}
