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
      "https://www.licious.in/_next/image?url=https%3A%2F%2Fdao54xqhg9jfa.cloudfront.net%2FOMS-Category%2F1049d247-93bb-4924-29a7-bc4f1d059c82%2Foriginal%2FAll-Cat-Icon-Images_(1).png&w=96&q=75",
  },
  {
    name: "Gourmet Marinades",
    image:
      "https://www.licious.in/_next/image?url=https%3A%2F%2Fdao54xqhg9jfa.cloudfront.net%2FOMS-Category%2F7f9d36ae-7bc4-18f2-d1a7-2746f756dc09%2Foriginal%2Fnilgiri-kebabs_(1).png&w=96&q=75",
  },
  {
    name: "Kebabs & Tandoor",
    image:
      "https://www.licious.in/_next/image?url=https%3A%2F%2Fdao54xqhg9jfa.cloudfront.net%2FOMS-Category%2F12dc6a41-1152-3cc0-31e4-053408e8ec71%2Foriginal%2FAfghani_Seekh_264x204.png&w=96&q=75",
  },
  {
    name: "Crispy Snacks",
    image:
      "https://www.licious.in/_next/image?url=https%3A%2F%2Fdao54xqhg9jfa.cloudfront.net%2FOMS-Category%2F7970e430-5da3-490c-1256-a8fe9a5c4252%2Foriginal%2FCrispy_Prawns_264x204.png&w=96&q=75",
  },
  {
    name: "Combos",
    image:
      "https://www.licious.in/_next/image?url=https%3A%2F%2Fdao54xqhg9jfa.cloudfront.net%2FOMS-Category%2F9842c69a-bfa2-ea5e-a81c-d8caa359b1ea%2Foriginal%2FAssorted_Kebab_platter_264x204.png&w=96&q=75",
  },
  
];
const ReadytoCook = () => {
  let [data, setdata] = useState([]);
  let [query, setquery] = useSearchParams();
  let [queryparam,setqueryparam]=useState("")
  let getdata = (param) => {
    axios
      .get("https://pleasant-ruby-yak.cyclic.app/licious/ready_to_cook",{params:param})
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
          backgroundColor={"#eaa794"}
        

        >
          <Box ml={"20%"}>
          <Text mt={3}>Home/Ready to Cook</Text>
          <Text mt={10}fontWeight={"bold"} fontSize={"2xl"}>
          Ready to Cook
          </Text>
          </Box>
          
        </Box>
      <Box backgroundColor={"#eaa794"}  pt={10}>
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

export default ReadytoCook;
