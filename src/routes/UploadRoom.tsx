import {
  Box,
  Checkbox,
  Container,
  FormControl,
  FormHelperText,
  FormLabel,
  Heading,
  Input,
  InputGroup,
  InputLeftAddon,
  Select,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import { FaBed, FaMoneyBill, FaToilet } from "react-icons/fa";
import ProtectedPage from "../components/ProtectedPage";
import useHostOnly from "../lib/useHostOnly";
import useLoginOnly from "../lib/useLoginOnly";

export default function UploadRoom() {
  useLoginOnly();
  useHostOnly();

  return (
    <ProtectedPage>
      <Box pb={40} mt={10} px={{ base: 10, lg: 40 }}>
        <Container>
          <Heading textAlign={"center"}>Upload Room</Heading>
          <VStack spacing={5} as={"form"} mt={5}>
            <FormControl>
              <FormLabel>Name</FormLabel>
              <Input required type={"text"} />
              <FormHelperText>Write the name of your room.</FormHelperText>
            </FormControl>
            <FormControl>
              <FormLabel>Country</FormLabel>
              <Input required type={"text"} />
            </FormControl>
            <FormControl>
              <FormLabel>City</FormLabel>
              <Input required type={"text"} />
            </FormControl>
            <FormControl>
              <FormLabel>Address</FormLabel>
              <Input required type={"text"} />
            </FormControl>
            <FormControl>
              <FormLabel>Price</FormLabel>
              <InputGroup>
                <InputLeftAddon children={<FaMoneyBill />} />
                <Input required type={"number"} />
              </InputGroup>
            </FormControl>
            <FormControl>
              <FormLabel>Rooms</FormLabel>
              <InputGroup>
                <InputLeftAddon children={<FaBed />} />
                <Input required type={"number"} />
              </InputGroup>
            </FormControl>
            <FormControl>
              <FormLabel>Toirets</FormLabel>
              <InputGroup>
                <InputLeftAddon children={<FaToilet />} />
                <Input required type={"number"} />
              </InputGroup>
            </FormControl>
            <FormControl>
              <FormLabel>Description</FormLabel>
              <Textarea />
            </FormControl>
            <FormControl>
              <Checkbox>Pet Friendly?</Checkbox>
            </FormControl>
            <FormControl>
              <FormLabel>Kind of room</FormLabel>
              <Select placeholder="Choose a kind">
                <option value="entire_place">Entire Place</option>
                <option value="private_room">Private Room</option>
                <option value="shared_room">Shared Room</option>
              </Select>
              <FormHelperText>
                What kind of room are you renting?
              </FormHelperText>
            </FormControl>
          </VStack>
        </Container>
      </Box>
    </ProtectedPage>
  );
}
