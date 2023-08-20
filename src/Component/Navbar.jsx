import { ReactNode } from 'react';
import React from 'react';
import {
  Box,
  Flex,
  HStack,
  IconButton,
  useDisclosure,
  useColorModeValue,
  Stack,
  Image,
  Text,
  Center,
} from '@chakra-ui/react';
import {Link} from "react-router-dom"
// import {NavLink} from "react-router-dom"
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import logo from "./image/finallogo.png"
import {AiOutlineUser} from 'react-icons/ai'
import { GrCart } from "react-icons/gr"
import { BiCategory } from "react-icons/bi"


export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  

  return (
    < >
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4} position={"fixed"} top={0} left={0} zIndex={3} w={"100%"}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={'center'}>
            <Link to="/"><Box><Image src={logo} width="120px" /></Box></Link>
            <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}>
              
                
                <BiCategory/> <span>Categories</span>
                <Link to="/cart"><GrCart/></Link><sup>0</sup> <span>Cart</span>
              
            </HStack>
          </HStack>
          {/* <Flex alignItems={'center'}>
            {
            isAuth?<Link><AiOutlineUser />Logout </Link>:<Link to="/signin"><AiOutlineUser />Login </Link>
          
            }
          </Flex> */}
          login
        </Flex>
           
        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
          
            <Center>
            <BiCategory/> <span style={{marginLeft:"5px"}}> Categories </span> 
            </Center>
            <Center>
            < GrCart/><span style={{marginLeft:"5px"}}> Cart </span> 
            </Center>
                
            </Stack>
          </Box>
        ) : null}
      </Box>

      
    </>
  );
}
