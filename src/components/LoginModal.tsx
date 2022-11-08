import { Button, HStack, Input, InputGroup, InputLeftElement, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, VStack } from '@chakra-ui/react'
import React from 'react'
import { FaLock, FaUserCircle } from 'react-icons/fa'
import SocialLogin from './SocialLogin'

interface LoginModalProps {
    isOpen:boolean;
    onClose: () => void;
}

export default function LoginModal({ isOpen, onClose }:LoginModalProps) {
  return (
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
        <HStack mt={"4"}>
          <Button colorScheme={"red"} onClick={onClose} width={"100%"}>Log in</Button>
        </HStack>
        <SocialLogin />
      </ModalBody>
    </ModalContent>
  </Modal>
  )
}
