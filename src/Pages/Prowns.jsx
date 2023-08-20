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
      "https://www.licious.in/_next/image?url=https%3A%2F%2Fdao54xqhg9jfa.cloudfront.net%2FOMS-Category%2F62a6603c-8f91-a8a8-df28-94f670c0ae67%2Foriginal%2FPrawns.png&w=96&q=75",
  },
  {
    name: "Small Size",
    image:
      "https://www.licious.in/_next/image?url=https%3A%2F%2Fdao54xqhg9jfa.cloudfront.net%2FOMS-Category%2F777de169-7d68-af04-d75a-fd440b53a829%2Foriginal%2FFreshwater_Prawns_Small_264x204_(1).png&w=96&q=75",
  },
  {
    name: "Medium Size",
    image:
      "https://www.licious.in/_next/image?url=https%3A%2F%2Fdao54xqhg9jfa.cloudfront.net%2FOMS-Category%2Fa3c36815-858a-b27f-45f6-91084516cbae%2Foriginal%2FFreshwater_Prawns_Medium_264x204_(2).png&w=96&q=75",
  },
  {
    name: "Large Size",
    image:
      "https://www.licious.in/_next/image?url=https%3A%2F%2Fdao54xqhg9jfa.cloudfront.net%2FOMS-Category%2Ffd69146b-c078-c5e0-aac3-c66cc0a8fa3a%2Foriginal%2FFreshwater_Prawns_Large_264x204_(1).png&w=96&q=75",
  }
 
];
const Prowns = () => {
  let [data, setdata] = useState([]);
  let [query, setquery] = useSearchParams();
  let [queryparam,setqueryparam]=useState("")
  let getdata = (param) => {
    console.log(param)
    axios
      .get("https://pleasant-ruby-yak.cyclic.app/licious/prawns",{params:param})
      .then((res) => setdata(res.data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    
    if(queryparam=="All")
    {
      let param={}
      getdata(param);

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
          backgroundColor={"#cbe3ff"}
        

        >
          <Box ml={"20%"}>
          <Text mt={3}>Home/Prawns</Text>
          <Text mt={10}fontWeight={"bold"} fontSize={"2xl"}>
          Prawns
          </Text>
          </Box>
          
        </Box>
      <Box backgroundColor={"#cbe3ff"}  pt={10}>
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

export default Prowns;
