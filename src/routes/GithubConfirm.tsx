import { Heading, Spinner, Text, useToast, VStack } from "@chakra-ui/react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { githubLogIn } from "../api";

export default function GithubConfirm() {
  const { search } = useLocation();
  const toast = useToast();
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const mutation = useMutation(githubLogIn, {
    onMutate: () => {},
    onSuccess: () => {
      toast({
        status: "success",
        title: "Welcome!",
        description: "Happy to have you back!",
        variant: "left-accent",
        position: "top",
      });
      queryClient.refetchQueries(["me"]);
      navigate("/");
    },
    onError: (error) => {
      console.log(error);
    },
  });
  const confirmLogin = async () => {
    const params = new URLSearchParams(search);
    const code = params.get("code");
    if (code) {
      mutation.mutate(code);
    }
  };
  useEffect(() => {
    confirmLogin();
  }, []);
  return (
    <VStack justifyContent={"center"} mt={"35vh"}>
      <Heading>Processing Log in...</Heading>
      <Text>Don't go anywhere.</Text>
      <Spinner size={"lg"} />
    </VStack>
  );
}
