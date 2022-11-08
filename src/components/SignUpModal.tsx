import { Button, HStack, Input, InputGroup, InputLeftElement, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, VStack } from '@chakra-ui/react'
import { FaLock, FaUserCircle } from 'react-icons/fa'
import SocialLogin from './SocialLogin'

interface SignUpModalProps {
    isOpen:boolean;
    onClose: () => void;
}


export default function SignUpModal({ isOpen, onClose }:SignUpModalProps) {
  return (
    <Modal onClose={onClose} isOpen={isOpen}>
    <ModalOverlay />
    <ModalContent>
      <ModalHeader>Sign Up</ModalHeader>
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
