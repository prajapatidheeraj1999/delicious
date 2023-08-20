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
      "https://www.licious.in/_next/image?url=https%3A%2F%2Fdao54xqhg9jfa.cloudfront.net%2FOMS-Category%2Fcb4cc0a4-8f30-fee2-69b1-3e620f1d02e5%2Foriginal%2FFish_(1)_(1)_(1).png&w=96&q=75",
  },
  {
    name: "Freshwater",
    image:
      "https://www.licious.in/_next/image?url=https%3A%2F%2Fdao54xqhg9jfa.cloudfront.net%2FOMS-Category%2Ff11acf37-fd7f-59f4-a1d6-b1d5a5adb481%2Foriginal%2FFreshwater_Rohu_Medium_264x204_(1).png&w=96&q=75",
  },
  {
    name: "Seawater",
    image:
      "https://www.licious.in/_next/image?url=https%3A%2F%2Fdao54xqhg9jfa.cloudfront.net%2FOMS-Category%2F5a65f863-b451-fb98-83ae-4f7d1a8d41c6%2Foriginal%2FSeer_Large_Steaks_264x204_(1).png&w=96&q=75",
  },
  {
    name: "Crab",
    image:
      "https://www.licious.in/_next/image?url=https%3A%2F%2Fdao54xqhg9jfa.cloudfront.net%2FOMS-Category%2F069e9830-02c2-6ac6-9af9-bea620888909%2Foriginal%2FBlue_Crab_264x204.png&w=96&q=75",
  }
 
];
const FishSeafood = () => {
  let [data, setdata] = useState([]);
  let [query, setquery] = useSearchParams();
  let [queryparam,setqueryparam]=useState("")
  let getdata = (param) => {
    axios
      .get("https://pleasant-ruby-yak.cyclic.app/licious/fish",{params:param})
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
          <Text mt={3}>Home/Fish & Seafood</Text>
          <Text mt={10}fontWeight={"bold"} fontSize={"2xl"}>
          Fish & Seafood
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

export default FishSeafood;
