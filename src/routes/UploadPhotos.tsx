import {
  Box,
  Button,
  Container,
  FormControl,
  Heading,
  Input,
  VStack,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import ProtectedPage from "../components/ProtectedPage";
import useHostOnly from "../lib/useHostOnly";

export default function UploadPhotos() {
  const { register, watch } = useForm();
  const { roomPk } = useParams();
  useHostOnly();
  console.log(watch());
  return (
    <ProtectedPage>
      <Box pb={40} mt={10} px={{ base: 10, lg: 40 }}>
        <Container>
          <Heading textAlign={"center"}>Upload Photos</Heading>
          <VStack>
            <FormControl>
              <Input {...register("file")} type={"file"} accept="image/*" />
            </FormControl>
            <Button w="full" colorScheme={"red"}>
              Upload photo
            </Button>
          </VStack>
        </Container>
      </Box>
    </ProtectedPage>
  );
}
