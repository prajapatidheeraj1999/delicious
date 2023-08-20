import { Button, HStack, Text } from '@chakra-ui/react'
import {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'

const Totalprice = ({data}) => {
    let [totalprice,settotalprice]=useState(0)
    let newstr=(str)=>{
        let ans=""
        for(let i=1;i<str.length;i++)
        {
            ans+=str[i]
        }
        return Number(ans)
        }
    
    console.log(data)
    useEffect(()=>{
        settotalprice(0)
        data.map((el)=>settotalprice((pre)=>pre+newstr(el.price)))
    },[data])
  return (
    <HStack><Text>Total Price :{totalprice}</Text> <Link to="/checkout"><Button>Checkout</Button></Link></HStack>
  )
}

export default Totalprice
