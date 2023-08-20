import { Box, Image, SimpleGrid, Text } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import CartItem from "../Component/Cart";
import LargeWithAppLinksAndSocial from "./Footer";
import Subcart from "../Component/Subcart";
let categorys = [
  {
    name: "All",
    image:
      "https://www.licious.in/_next/image?url=https%3A%2F%2Fdao54xqhg9jfa.cloudfront.net%2FOMS-Category%2Fd2d8ea03-3bb6-d596-80d3-fd7e8bdb55f7%2Foriginal%2FEggs.png&w=96&q=75",
  },
  {
    name: "Classic Eggs",
    image:
      "https://www.licious.in/_next/image?url=https%3A%2F%2Fdao54xqhg9jfa.cloudfront.net%2FOMS-Category%2F923cd95f-bfd5-c3d2-ba9c-f070db943d3a%2Foriginal%2FClassic_Eggs_12_264x204.png&w=96&q=75",
  },
  {
    name: "Speciality Eggs",
    image:
      "https://www.licious.in/_next/image?url=https%3A%2F%2Fdao54xqhg9jfa.cloudfront.net%2FOMS-Category%2F7a0c23d2-7b6f-7453-53b3-0aa081e44bdc%2Foriginal%2FBrown_Eggs_264x204.png&w=96&q=75",
  },
  {
    name: "Combos",
    image:
      "https://www.licious.in/_next/image?url=https%3A%2F%2Fdao54xqhg9jfa.cloudfront.net%2FOMS-Category%2F3f8d0096-b2ec-dfb4-b955-44e8f26ecaf3%2Foriginal%2Fsample-imgEggs-Combo_(1).png&w=96&q=75",
  }
  
];
const Eggs = () => {
  let [data, setdata] = useState([]);
  let [query, setquery] = useSearchParams();
  let [queryparam,setqueryparam]=useState("")
  let getdata = (param) => {
    axios
      .get("https://pleasant-ruby-yak.cyclic.app/licious/eggs",{params:param})
      .then((res) => setdata(res.data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    
    if(queryparam=="All")
    {
      let param={}
      getdata(param);
      setquery(param)
    }else{
      let param={category:queryparam}
      setquery(param)
      getdata(param);
    }
    console.log("it is working properly")
  }, [queryparam]);

  useEffect(()=>{
    let param={}
    getdata(param)
  },[])
console.log(data)
  return (
    <Box minW={"100%"}>
       <Box
          position={"sticky"}
          top={"63px"}
          zIndex={2}
          w={"100%"}
          m={"auto"}
          
          textAlign={"left"}
          backgroundColor={"#ffe9f0"}
        

        >
          <Box ml={"20%"}>
          <Text mt={3}>Home/Eggs</Text>
          <Text mt={10}fontWeight={"bold"} fontSize={"2xl"}>
          Eggs
          </Text>
          </Box>
          
        </Box>
      <Box backgroundColor={"#ffe9f0"}  pt={10}>
        <Box
          display={"flex"}
          gap={10}
          w={{ base: "100%", lg: "60%" }}
          m={"auto"}
          textAlign={"left"}
          position={"relative"}
          zIndex={1}
          mt={"63px"}
          overflow={"auto"}
          p={5}
          css={{
            '&::-webkit-scrollbar': {
              width: '0px',  // Hide the scrollbar track
            },
          }}
        >
          {categorys.map((el) => {
            return (
              <Box
                display={"flex"}
                alignItems={"center"}
                justifyContent={"center"}
                flexDirection={"column"}
                minW={"150px"}
                minH={"100px"}
                
              >
                <Image src={el.image}  onClick={()=>setqueryparam(el.name)}/> <Text>{el.name}</Text>
              </Box>
            );
          })}
        </Box>
      </Box>
      <SimpleGrid
        columns={{ base: 1, sm: 2, md: 3 }}
        spacing={10}
        w={{ base: "90%", lg: "80%" }}
        m={"auto"}
        mt={10}
        alignItems={"center"}
      >
        {data?.map((el) => (
          <Subcart key={el._id} {...el} />
        ))}
      </SimpleGrid>
      <LargeWithAppLinksAndSocial />
    </Box>
  );
};

export default Eggs;
