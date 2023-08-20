
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import axios from "axios";

import { Box, Button, ButtonGroup, Card, CardBody, CardFooter, Center, Divider, Heading, Image, Stack, Text } from "@chakra-ui/react";
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};
function Slider({data,getcount})
{
  let addtocart=(el)=>{
    
    axios({
      method:"post",
      url:" http://localhost:8080/card",
      data:el
    }).then((res)=>getcount())
    
//console.log(el)
  }
  
    return <Box width="80%" m={"auto"}>
      <Center></Center>
      <Carousel responsive={responsive} border="1px solid red">
   {
    data.map((el)=><Card maxW='sm' key={el.id}>
    <CardBody >
      <Image
        src={el.image}
        alt={el.name}
        borderRadius='lg'
      />
      <Stack mt='6' spacing='3'>
        <Heading size='sm'>{el.name}</Heading>
        <Text>
          {el.discription}
        </Text>
        <Text  color="red">{el.wait}</Text>
        <Box display="flex" justifyContent="space-around">
        <Text color='red' fontSize='2xl' >
          {el.price}
        </Text>
        <Button variant='solid' colorScheme='red' onClick={()=>addtocart(el)}>
          Add to cart
        </Button>
        </Box>
        
      </Stack>
    </CardBody>
    
  </Card>)
   }
  </Carousel>;
    </Box>

}
export default Slider