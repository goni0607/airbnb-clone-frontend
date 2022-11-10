import {
  Avatar,
  Box,
  Button,
  HStack,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Stack,
  useColorMode,
  useColorModeValue,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import { FaAirbnb, FaMoon, FaSun } from "react-icons/fa";
import { Link } from "react-router-dom";
import { logOut } from "../api";
import useUser from "../lib/useUser";
import LoginModal from "./LoginModal";
import SignUpModal from "./SignUpModal";

export default function Header() {
  const { isUserLoading, user, isLoggedIn } = useUser();
  const {
    isOpen: isLoginOpen,
    onOpen: onLoginOpen,
    onClose: onLoginClose,
  } = useDisclosure();
  const {
    isOpen: isSignUpOpen,
    onOpen: onSignUpOpen,
    onClose: onSignUpClose,
  } = useDisclosure();
  const { toggleColorMode } = useColorMode();
  const IconColorMode = useColorModeValue(FaMoon, FaSun);
  const labelColorMode = useColorModeValue(
    "Toggle dark mode",
    "Toggle light mode"
  );
  const toast = useToast();
  const onLogOut = async () => {
    const toastId = toast({
      title: "Login out...",
      description: "Sad to see you go...",
      status: "loading",
      position: "bottom-right",
      variant: "left-accent",
    });
    /* const data = await logOut();
    console.log(data); */
    setTimeout(() => {
      toast.update(toastId, {
        title: "Log out",
        description: "See you later!",
        status: "success",
        duration: null,
        isClosable: true,
      });
    }, 3000);
  };
  return (
    <Stack
      py={5}
      px={{ base: 5, md: 10, xl: 20 }}
      borderBottomWidth={1}
      justifyContent={"space-between"}
      alignItems={"center"}
      spacing={{ base: 3, md: 0 }}
      direction={{ base: "column", md: "row" }}
    >
      <Link to="/">
        <Box color={"red.500"}>
          <FaAirbnb size={40} />
        </Box>
      </Link>
      <HStack>
        <IconButton
          onClick={toggleColorMode}
          variant={"ghost"}
          aria-label={labelColorMode}
          icon={<IconColorMode />}
        />
        {!isUserLoading ? (
          !isLoggedIn ? (
            <>
              <Button onClick={onLoginOpen}>Log in</Button>
              <Button onClick={onSignUpOpen} colorScheme={"red"}>
                Sign up
              </Button>
            </>
          ) : (
            <Menu>
              <MenuButton>
                <Avatar size={"md"} name={user.name} src={user.avatar} />
              </MenuButton>
              <MenuList>
                <MenuItem onClick={onLogOut}>Log out</MenuItem>
              </MenuList>
            </Menu>
          )
        ) : null}
        <LoginModal isOpen={isLoginOpen} onClose={onLoginClose} />
        <SignUpModal isOpen={isSignUpOpen} onClose={onSignUpClose} />
      </HStack>
    </Stack>
  );
}
