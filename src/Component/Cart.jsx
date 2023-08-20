import React from "react";

import { Box, Image, Text, Button, Flex } from "@chakra-ui/react";
import {Link} from "react-router-dom"

const CartItem = ({
  _id,
  image,
  title,
  weight,
  pieces,
  servers,
  current_price,
  original_price,
  discount,
  deliver_day,
  time,
  name,
  category,
  discription,
}) => {
 
  return (
    <Box borderWidth="1px" borderRadius={"2xl"}>
      <Link to={`/details/${_id}`}><Image src={image} alt={title} maxW="100%" borderRadius={"2xl"} /></Link>
      {/* <Image src={image} alt={title} maxW="100%" borderRadius={"2xl"} /> */}

      <Box marginLeft={"20px"} lineHeight={7} mt={2}>
        <Text fontSize="lg" fontWeight="medium" textAlign="left" mb={4}>
          {title}
        </Text>
        <Text color="gray.600" fontSize="sm" textAlign="left">
          {weight} {pieces} {servers}
        </Text>

        <Text color="gray.600" textAlign="left">
          Category: {category}
        </Text>

        <Text textAlign="left" fontWeight={"medium"} mt={1}>
          &#8377; {current_price}
        </Text>
        <Box display={"flex"} alignItems={"center"}   gap={"20px"}  mt={5}>
          <img src="https://www.licious.in/image/expressDelivery.svg" alt="" />
          <Text color="gray.600"  textAlign="left" placeItems={"center"} mt="-2">
          {deliver_day} - {time}
        </Text>
        </Box>
        
        
      </Box>
    </Box>
  );
};

export default CartItem;
