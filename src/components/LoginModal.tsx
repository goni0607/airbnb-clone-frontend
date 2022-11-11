import {
  Button,
  HStack,
  Input,
  InputGroup,
  InputLeftElement,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { FaLock, FaUserCircle } from "react-icons/fa";
import SocialLogin from "./SocialLogin";

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function LoginModal({ isOpen, onClose }: LoginModalProps) {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const onChange = (e: React.SyntheticEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;
    if (name === "username") {
      setUserName(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };
  const onSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(username, password);
  };
  return (
    <Modal onClose={onClose} isOpen={isOpen}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Log in</ModalHeader>
        <ModalCloseButton aria-label="Close login layer" />
        <ModalBody as={"form"} onSubmit={onSubmit as any}>
          <VStack>
            <InputGroup>
              <InputLeftElement children={<FaUserCircle />} />
              <Input
                name="username"
                onChange={onChange}
                variant={"filled"}
                placeholder="Username"
                value={username}
                required
              />
            </InputGroup>
            <InputGroup>
              <InputLeftElement children={<FaLock />} />
              <Input
                name="password"
                onChange={onChange}
                variant={"filled"}
                type={"password"}
                placeholder="Password"
                value={password}
                required
              />
            </InputGroup>
          </VStack>
          <HStack mt={"4"}>
            <Button type={"submit"} colorScheme={"red"} width={"100%"}>
              Log in
            </Button>
          </HStack>
          <SocialLogin />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
