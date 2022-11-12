import { useForm } from "react-hook-form";
import {
  Box,
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
  useToast,
  VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { FaLock, FaUserCircle } from "react-icons/fa";
import SocialLogin from "./SocialLogin";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import {
  IUsernameLoginError,
  IUsernameLoginSuccess,
  IUsernameLoginVariables,
  usernameLogIn,
} from "../api";

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface IForm {
  username: string;
  password: string;
}

export default function LoginModal({ isOpen, onClose }: LoginModalProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IForm>();
  const toast = useToast();
  const queryClient = useQueryClient();
  const mutation = useMutation<
    IUsernameLoginSuccess,
    IUsernameLoginError,
    IUsernameLoginVariables
  >(usernameLogIn, {
    onMutate: () => {
      console.log("mutation starting.");
    },
    onSuccess: (data) => {
      toast({
        title: "Welcome back!",
        status: "success",
        variant: "left-accent",
        position: "top",
      });
      onClose();
      queryClient.refetchQueries(["me"]);
    },
    onError: (error) => {
      console.log("mutation has an error.");
    },
  });
  const onSubmit = ({ username, password }: IForm) => {
    mutation.mutate({ username, password });
  };

  return (
    <Modal onClose={onClose} isOpen={isOpen}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Log in</ModalHeader>
        <ModalCloseButton aria-label="Close login layer" />
        <ModalBody as={"form"} onSubmit={handleSubmit(onSubmit)}>
          <VStack>
            <InputGroup>
              <InputLeftElement children={<FaUserCircle />} />
              <Input
                isInvalid={Boolean(errors.username?.message)}
                {...register("username", {
                  required: "Please enter your name.",
                })}
                variant={"filled"}
                placeholder="Username"
              />
            </InputGroup>
            {errors.username?.message ? (
              <Box role={"alert"} w={"100%"} color={"red.600"}>
                {errors.username.message}
              </Box>
            ) : null}
            <InputGroup>
              <InputLeftElement children={<FaLock />} />
              <Input
                isInvalid={Boolean(errors.password?.message)}
                {...register("password", {
                  required: "Please enter your password.",
                })}
                variant={"filled"}
                type={"password"}
                placeholder="Password"
              />
            </InputGroup>
          </VStack>
          <HStack mt={"4"}>
            <Button
              isLoading={mutation.isLoading}
              type={"submit"}
              colorScheme={"red"}
              width={"100%"}
            >
              Log in
            </Button>
          </HStack>
          <SocialLogin />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
