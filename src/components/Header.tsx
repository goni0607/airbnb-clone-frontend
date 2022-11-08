import { Box, Button, HStack, IconButton, useColorMode, useColorModeValue, useDisclosure } from '@chakra-ui/react'
import React from 'react'
import { FaAirbnb, FaMoon, FaSun } from 'react-icons/fa'
import LoginModal from './LoginModal'
import SignUpModal from './SignUpModal';

export default function Header() {
  const { isOpen:isLoginOpen, onOpen:onLoginOpen, onClose:onLoginClose } = useDisclosure();
  const { isOpen:isSignUpOpen, onOpen:onSignUpOpen, onClose:onSignUpClose } = useDisclosure();
  const { toggleColorMode } = useColorMode();
  const IconColorMode = useColorModeValue(FaMoon, FaSun);
  const labelColorMode = useColorModeValue('Toggle dark mode', 'Toggle light mode');
  return (
    <HStack py={5} px={10} borderBottomWidth={1} justifyContent={"space-between"}>
    <Box color={"red.500"}>
      <FaAirbnb size={40} />
    </Box>
    <HStack>
      <IconButton 
        onClick={toggleColorMode}
        variant={"ghost"} 
        aria-label={labelColorMode}
        icon={<IconColorMode />} />
      <Button onClick={onLoginOpen}>Log in</Button>
      <LoginModal isOpen={isLoginOpen} onClose={onLoginClose} />
      <Button onClick={onSignUpOpen} colorScheme={"red"}>Sign up</Button>
      <SignUpModal isOpen={isSignUpOpen} onClose={onSignUpClose} />
    </HStack>
  </HStack>
  )
}
