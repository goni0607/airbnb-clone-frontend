import { Grid } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { useQuery } from '@tanstack/react-query';
import Room from '../components/Room'
import RoomSkeleton from '../components/RoomSkeleton';
import { getRooms } from '../api';

interface IPhoto {
  pk: number;
  file: string;
  description: string;
}

interface IRoom {
  pk: number;
  name: string;
  country: string;
  city: string;
  price: number;
  rating: number;
  is_owner: boolean;
  photos: IPhoto[];
}

export default function Home() {
  const {isLoading, data} = useQuery<IRoom[]>(["rooms"], getRooms);

  return (
    <Grid 
      px={{ base:5, md:10, xl:20}} 
      my={10} 
      columnGap={4} 
      rowGap={8} 
      templateColumns={{ sm: "1fr", md: "1fr 1fr", lg: "repeat(3, 1fr)", xl: "repeat(4, 1fr)", "2xl": "repeat(5, 1fr)"}}>
        {isLoading ? <><RoomSkeleton /><RoomSkeleton /><RoomSkeleton /><RoomSkeleton /><RoomSkeleton /></> : null }
        {data?.map((room) => (
          <Room 
            key={room.pk}
            name={room.name}
            imageUrl={room.photos[0].file}
            rating={room.rating}
            city={room.city}
            country={room.country}
            price={room.price}
             />
        ))}
    </Grid>
  )
}
