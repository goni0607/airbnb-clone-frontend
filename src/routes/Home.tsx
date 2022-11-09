import { Box, Grid, Skeleton, SkeletonText } from '@chakra-ui/react'
import Room from '../components/Room'

export default function Home() {
  return (
    <Grid 
      px={{ base:5, md:10, xl:20}} 
      my={10} 
      columnGap={4} 
      rowGap={8} 
      templateColumns={{ sm: "1fr", md: "1fr 1fr", lg: "repeat(3, 1fr)", xl: "repeat(4, 1fr)", "2xl": "repeat(5, 1fr)"}}>
        <Room />
      {[
        1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,9,1
      ].map((item, index) => (
        <Room key={index} />
      ))}
      <Box>
        <Skeleton rounded={"2xl"} height={280} mb={6} />
        <SkeletonText w="50%" />
      </Box>
    </Grid>
  )
}
