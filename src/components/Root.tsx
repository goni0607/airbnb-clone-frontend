import { Box, Button, HStack, IconButton, Input, InputGroup, InputLeftElement, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure, VStack } from '@chakra-ui/react'
import React from 'react'
import { Outlet } from 'react-router-dom'
import { FaAirbnb, FaMoon, FaUserCircle, FaLock } from "react-icons/fa";

export default function Root() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box>
      <HStack py={5} px={10} borderBottomWidth={1} justifyContent={"space-between"}>
        <Box color={"red.500"}>
          <FaAirbnb size={40} />
        </Box>
        <HStack>
          <IconButton variant={"ghost"} aria-label='Toggle dark mode' icon={<FaMoon />} />
          <Button onClick={onOpen}>Log in</Button>
          <Modal onClose={onClose} isOpen={isOpen}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Log in</ModalHeader>
              <ModalCloseButton aria-label='Close login layer' />
              <ModalBody>
                <VStack>
                  <InputGroup>
                    <InputLeftElement children={<FaUserCircle />} />
                    <Input variant={"filled"} placeholder='Username' />
                  </InputGroup>
                  <InputGroup>
                    <InputLeftElement children={<FaLock />} />
                    <Input variant={"filled"} type={"password"} placeholder='Password' />
                  </InputGroup>
                </VStack>
              </ModalBody>
              <ModalFooter>
                <HStack>
                  <Button colorScheme={"red"} onClick={onClose}>Log in</Button>
                  <Button onClick={onClose}>Close</Button>
                </HStack>
              </ModalFooter>
            </ModalContent>
          </Modal>
          <Button colorScheme={"red"}>Sign up</Button>
        </HStack>
      </HStack>
        <Outlet />
    </Box>
  )
}
