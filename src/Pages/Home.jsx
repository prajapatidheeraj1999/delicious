import React from "react";
import CaptionCarousel from "./Corasel";
import {
  Box,
  Center,
  Container,
  Heading,
  Image,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import axios from "axios";
import Slider from "./ReactSlick";
import LargeWithAppLinksAndSocial from "./Footer";
import frist from "../Component/image/image1.png";
import second from "../Component/image/image2.png";

import CartItem from "../Component/Cart";
import { Link } from "react-router-dom";
let category = [
  {
    id: 2,
    image:
      "https://dao54xqhg9jfa.cloudfront.net/OMS-Category/07ee9c6c-2f08-9aa6-2721-436950267c96/original/Chicken_20.png",
    name: "Chicken",
    link:"/chicken"
  },
  {
    id: 3,
    image:
      "https://dao54xqhg9jfa.cloudfront.net/OMS-Category/ff043c52-cba7-a63a-2050-2335e011fa55/original/FIsh_(3).png",
    name: "Fish & Seafood",
    link:"/fish&seafood"
  },
  {
    id: 4,
    image:
      "https://dao54xqhg9jfa.cloudfront.net/OMS-Category/a66990a5-ad16-08e9-75f2-9bb2dd490801/original/Mutton_20.png",
    name: "Mutton",
    link:"/mutton"
  },
  {
    id: 5,
    image:
      "https://dao54xqhg9jfa.cloudfront.net/OMS-Category/f06c1bad-2e06-832a-cdc1-14571353bba9/original/RTC_(2).png",
    name: "Ready to Cook",
    link:"/readytocook"
  },
  {
    id: 6,
    image:
      "https://dao54xqhg9jfa.cloudfront.net/OMS-Category/f4053965-f199-80a0-2551-d85d712574e2/original/Prawn_(2).png",
    name: "Prowns",
    link:"/prowns"
  },
  {
    id: 9,
    image:
      "https://dao54xqhg9jfa.cloudfront.net/OMS-Category/1bd08fae-c971-390a-ce8a-6f6502f5bd0d/original/Eggs_(1).png",
    name: "Eggs",
    link:"/eggs"
  },
];
const Home = () => {
  let [categori, setCategori] = useState(category);
  let [data, setdata] = useState([]);


  let getalldata = () => {
    axios
      .get("https://pleasant-ruby-yak.cyclic.app/licious")
      .then((res) => setdata(res.data))
      .catch((error) => console.log(error));
  };
  useEffect(() => {
    getalldata();
  }, []);

  // console.log(categori);
  console.log(data)
  
  return (
    <Box>
      <Box maxW="100%" height="auto" mt={"16"}>
        <Image
          src="https://d2407na1z3fc0t.cloudfront.net/Slider/banner_63630e9d6ba0e"
          alt="Your Image Alt Text"
          objectFit="cover" // You can use "contain", "cover", "fill", etc.
        />
      </Box>
      <Container maxW={{base:"100%",lg:"80%"}} mt={{base:5,lg:10}}>
        <Heading as="h3" size="lg" mb={{base:10,lg:20}} textAlign={"left"} ml={"5%"}>
          Shop by categories
        </Heading>
        <SimpleGrid columns={{ base: 2, sm: 2, md: 3 }} spacing={10}>
          {categori.map((el) => (
            <Box
              key={el.id}
              boxShadow={`rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px`}
              p={{base:5,lg:10}}
              borderRadius={10}
            >
              <Center>
                <Link to={el.link}><Image src={el.image} alt={el.name} /></Link>
                
              </Center>
              <Text fontSize={{ base: "xs", sm: "sm", lg: "lg" }}>
                {el.name}
              </Text>
            </Box>
          ))}
        </SimpleGrid>
      </Container>
      <Heading as="h1" mt={{base:10,lg:16}} mb={{base:5,lg:10}} textAlign={"left"} ml={"12%"}>
        Best Sellers
      </Heading>
      <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} spacing={{base:5,lg:10}} w={"80%"} m={"auto"}>
        {data?.map((el) => (
          <CartItem key={el._id} {...el} />
        ))}
      </SimpleGrid>
      <Image src={frist} />
      <Image src={second} />
      <LargeWithAppLinksAndSocial />
    </Box>
  );
};

export default Home;
