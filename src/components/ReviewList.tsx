import { Box, Grid, Heading, HStack, Skeleton, Text } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import { FaStar } from "react-icons/fa";
import { getRoomReviews } from "../api";
import { IReview, IRoomDetail } from "../types";
import Review from "./Review";

interface IReviewListProps {
  room: IRoomDetail;
}

export default function ReviewList({ room }: IReviewListProps) {
  const { isLoading, data } = useQuery<IReview[]>(
    ["rooms", room.id, "reviews"],
    getRoomReviews
  );
  return (
    <Box mt={10}>
      <Skeleton isLoaded={!isLoading}>
        <Heading as={"h3"} size={"lg"} mb={5}>
          <HStack>
            <FaStar />
            <Text>{room.rating}</Text>
            <Text>&middot;</Text>
            <Text>{data?.length} reviews</Text>
          </HStack>
        </Heading>
      </Skeleton>
      <Grid rowGap={8} columnGap={4} templateColumns={"1fr 1fr"}>
        {data?.map((review, index) => (
          <Review
            key={index}
            user={review.user}
            rating={review.rating}
            payload={review.payload}
          />
        ))}
      </Grid>
    </Box>
  );
}
