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
      "https://www.licious.in/_next/image?url=https%3A%2F%2Fdao54xqhg9jfa.cloudfront.net%2FOMS-Category%2Fbe1f0bf6-2de4-5608-558c-37039f279108%2Foriginal%2FMutton_(1)_(1).png&w=96&q=75",
  },
  {
    name: "Curry Cuts",
    image:
      "https://www.licious.in/_next/image?url=https%3A%2F%2Fdao54xqhg9jfa.cloudfront.net%2FOMS-Category%2F5b4d8d02-e0d2-478b-1567-51656536c353%2Foriginal%2FGoat_Curry_Cut_264x204.png&w=96&q=75",
  },
  {
    name: "Boneless & Mince",
    image:
      "https://www.licious.in/_next/image?url=https%3A%2F%2Fdao54xqhg9jfa.cloudfront.net%2FOMS-Category%2Ffcdf6dc6-0c1d-a96b-ca39-b254a0fc6aea%2Foriginal%2FGoat_Mince_264x204.png&w=96&q=75",
  },
  {
    name: "Speciality Cuts",
    image:
      "https://www.licious.in/_next/image?url=https%3A%2F%2Fdao54xqhg9jfa.cloudfront.net%2FOMS-Category%2F001e7ff8-9830-7ed0-110a-b4074e3639ea%2Foriginal%2FRibs___Chops_264x204.png&w=96&q=75",
  },
  {
    name: "Offals",
    image:
      "https://www.licious.in/_next/image?url=https%3A%2F%2Fdao54xqhg9jfa.cloudfront.net%2FOMS-Category%2F2814db04-160e-f1e7-e8d1-b0bb948a8bad%2Foriginal%2FMutton_Liver_Chunks_264x204.png&w=96&q=75",
  },
  {
    name: "Combos",
    image:
      "https://www.licious.in/_next/image?url=https%3A%2F%2Fdao54xqhg9jfa.cloudfront.net%2FOMS-Category%2F7ea314dc-c2e2-ea13-70e5-687c92a11674%2Foriginal%2Fsample-imgmutton-combo-shot-(264-x-204)-copy_(1).png&w=96&q=75",
  },
];
const Mutton = () => {
  let [data, setdata] = useState([]);
  let [query, setquery] = useSearchParams();
  let [queryparam,setqueryparam]=useState("")
  let getdata = (param) => {
    axios
      .get("https://pleasant-ruby-yak.cyclic.app/licious//mutton",{params:param})
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
          backgroundColor={"#ffbfca"}
        

        >
          <Box ml={"20%"}>
          <Text mt={3}>Home/Mutton</Text>
          <Text mt={10}fontWeight={"bold"} fontSize={"2xl"}>
          Mutton
          </Text>
          </Box>
          
        </Box>
      <Box backgroundColor={"#ffbfca"}  pt={10}>
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

export default Mutton;
