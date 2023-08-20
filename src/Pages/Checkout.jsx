import { Box, Button, FormControl, FormHelperText, FormLabel, Input } from '@chakra-ui/react'
import {useState} from 'react'
import Success from "./Succesfull"
const Checkout = () => {
    let [toggle,settoggle]=useState(false)
  return (toggle?<Success/>:
    <Box width="50%" m={'auto'} mt={10}>
    <FormControl>
    <FormLabel>Dedit Cart Numner</FormLabel>
    <Input type='text' />
    <FormLabel>Dedit Cart CVV Numner</FormLabel>
    <Input type='text' />
    <FormLabel>Password</FormLabel>
    <Input type='text' />
    <Button mt={10} onClick={()=>settoggle(!toggle)}> Get Payment</Button>
    </FormControl>
    </Box>
  )
}

export default Checkout
