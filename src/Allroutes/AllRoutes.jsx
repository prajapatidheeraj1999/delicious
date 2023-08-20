
import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Checkout from '../Pages/Checkout'
import Home from '../Pages/Home'
import SignupCard from '../Pages/Signin'
import Singlepage from '../Pages/Singlepage'
import Chicken from '../Pages/Chicken'
import FishSeafood from '../Pages/FishSeafood'
import Mutton from '../Pages/Mutton'
import ReadytoCook from '../Pages/ReadytoCook'
import Prowns from '../Pages/Prowns'
import Eggs from '../Pages/Eggs'

const AllRoutes = () => {
  return <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/signin' element={<SignupCard/>}/>
    <Route path='/checkout' element={<Checkout/>}/>
    <Route path='/details/:id' element={<Singlepage/>}/>
    <Route path='/chicken' element={<Chicken/>}/>
    <Route path='/fish&seafood' element={<FishSeafood/>}/>
    <Route path='/mutton' element={<Mutton/>}/>
    <Route path='/readytocook' element={<ReadytoCook/>}/>
    <Route path='/prowns' element={<Prowns/>}/>
    <Route path='/eggs' element={<Eggs/>}/>

  </Routes>
}

export default AllRoutes
