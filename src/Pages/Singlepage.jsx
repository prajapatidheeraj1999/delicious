import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box, Button, Image, Text } from "@chakra-ui/react";
import axios from "axios";
import LargeWithAppLinksAndSocial from "./Footer";
import first from "../Component/image/Screenshot (554).png"
import second from "../Component/image/Screenshot (552).png"
const Singlepage = () => {
  let [data, setdata] = useState({});

  let { id } = useParams();

  let getdetails = () => {
    axios
      .get(`https://pleasant-ruby-yak.cyclic.app/licious/detail/?id=${id}`)
      .then((res) => setdata({ ...res.data[0] }))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getdetails();
  }, []);
  console.log(data);
  return (
    <div>
      <Box display={"flex"} w={"80%"} m={"auto"} flexDirection={{base:"column",lg:"row"}} mt={"100px"}>
        <Box>
          <Image src={data.image} w={"500px"} borderRadius={"lg"}/>
        </Box>
        <Box marginLeft={"20px"} lineHeight={7} mt={2} alignItems={"left"}>
          <Text fontSize="lg" fontWeight="medium" textAlign="left" mb={4}>
            {data.title}
          </Text>
          <Text color="gray.600" fontSize="sm" textAlign="left">
            {data.weight} {data.pieces} {data.servers}
          </Text>

          <Text color="gray.600" textAlign="left">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore, veritatis obcaecati? Molestiae natus consectetur .
           
          </Text>

          <Text textAlign="left" fontWeight={"medium"} mt={1}>
            &#8377; {data.current_price}
          </Text>
          <Box display={"flex"} alignItems={"center"} gap={"20px"} mt={5}>
            <img
              src="https://www.licious.in/image/expressDelivery.svg"
              alt=""
            />
            <Text
              color="gray.600"
              textAlign="left"
              placeItems={"center"}
              mt="-2"
            >
              {data.deliver_day} - {data.time}
            </Text>
          </Box>
          <Button colorScheme="red" mt={5} ml={-10}>Add to Cart</Button>
        </Box>
      </Box>
      <Box w={"80%"} m={"auto"}>
      <Image src={first} mt={10}/>
      <Image src={second}mt={10}/>
      </Box>
     
      <LargeWithAppLinksAndSocial />
    </div>
  );
};

export default Singlepage;
