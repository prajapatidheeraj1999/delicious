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
      "https://www.licious.in/_next/image?url=https%3A%2F%2Fdao54xqhg9jfa.cloudfront.net%2FOMS-Category%2F5205d61b-8bbb-fbab-f0fa-e5d9a5230cc2%2Foriginal%2FChicken_(1)_(1).png&w=96&q=75",
  },
  {
    name: "Curry Cuts",
    image:
      "https://www.licious.in/_next/image?url=https%3A%2F%2Fdao54xqhg9jfa.cloudfront.net%2FOMS-Category%2Ff6d43eb8-691a-bb7c-5860-d51c46a2de22%2Foriginal%2FChicken_curry_cut_small_264x204.png&w=96&q=75",
  },
  {
    name: "Boneless & Mince",
    image:
      "https://www.licious.in/_next/image?url=https%3A%2F%2Fdao54xqhg9jfa.cloudfront.net%2FOMS-Category%2F4df40249-f238-4fd5-2670-f0d2f3c453cf%2Foriginal%2FChicken_Breast_boneless_264x204_(1).png&w=96&q=75",
  },
  {
    name: "Speciality Cuts",
    image:
      "https://www.licious.in/_next/image?url=https%3A%2F%2Fdao54xqhg9jfa.cloudfront.net%2FOMS-Category%2F690290fc-d36a-5c10-5f2c-68133eedd32d%2Foriginal%2FChicken_Whole_Legs_264x204.png&w=96&q=75",
  },
  {
    name: "Offals",
    image:
      "https://www.licious.in/_next/image?url=https%3A%2F%2Fdao54xqhg9jfa.cloudfront.net%2FOMS-Category%2F867cd5c4-4bd6-d129-36c6-2aaf2c4c9dd3%2Foriginal%2FLiver_264x204_(1).png&w=96&q=75",
  },
  {
    name: "Combos",
    image:
      "https://www.licious.in/_next/image?url=https%3A%2F%2Fdao54xqhg9jfa.cloudfront.net%2FOMS-Category%2F8141a27d-4386-1724-dd78-7e227ce08219%2Foriginal%2Fsample-imgchicken-combo-shot-(264-x-204)_(1).png&w=96&q=75",
  },
];
const Chicken = () => {
  let [data, setdata] = useState([]);
  let [query, setquery] = useSearchParams();
  let [queryparam,setqueryparam]=useState("")
  let getdata = (param) => {
    console.log(param)
    axios
      .get("https://pleasant-ruby-yak.cyclic.app/licious/chicken",{params:param})
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
          backgroundColor={"#ffe9f0"}
        

        >
          <Box ml={"20%"}>
          <Text mt={3}>Home/Chicken</Text>
          <Text mt={10}fontWeight={"bold"} fontSize={"2xl"}>
            Chicken
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

export default Chicken;
