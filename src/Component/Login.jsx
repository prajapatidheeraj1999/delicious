import React from "react";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  useDisclosure,
  Input,
  Text,
  Box,
} from "@chakra-ui/react";
import Sms from "./Sms";
const Login = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  return (
    <Box>
      <Text ref={btnRef} colorScheme="teal" onClick={onOpen}>
        Login
      </Text>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
        
      >
        <DrawerOverlay />
        <DrawerContent>
            <Box backgroundImage={"https://www.licious.in/image/rebranding/jpg/user-login-new.jpg"} h={"100vh"}>
          <DrawerCloseButton />
          <DrawerHeader>Login</DrawerHeader>

          <DrawerBody>
            <Box w={"100%"} h={"500px"} backgroundColor={"white"} mt={"120px"}>
            <Sms/>
            </Box>
            
          </DrawerBody>

          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme="blue">Save</Button>
          </DrawerFooter>
          </Box>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

export default Login;
