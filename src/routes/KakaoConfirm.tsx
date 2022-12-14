import { Heading, Spinner, Text, useToast, VStack } from "@chakra-ui/react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { kakaoLogIn } from "../api";

export default function KakaoConfirm() {
  const { search } = useLocation();
  const toast = useToast();
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const mutation = useMutation(kakaoLogIn, {
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
    console.log(code);
    if (code) {
      mutation.mutate(code);
      /*
      const status = await kakaoLogIn(code);
      if (status === 200) {
        toast({
          status: "success",
          title: "Welcome!",
          description: "Happy to have you back!",
          variant: "left-accent",
          position: "top",
        });
        queryClient.refetchQueries(["me"]);
        navigate("/");
      }*/
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
