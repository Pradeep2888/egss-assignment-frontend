import { Box, Button, Input, Text } from '@chakra-ui/react'
import React from 'react'
import Login from '../Components/Login'
import Signup from '../Components/Signup'
import "../Styles/home.css"


function Home() {
  return (

    <div className='container2' >
        <h1>Welcom To Task Management App</h1>
        <Box display={"flex"} gap={"10px"} alignItems={"center"} mt={"5rem"} justifyContent={"space-around"} boxSizing="border-box"  >
               
               <Login/>
               <Signup/> 
               
        </Box>
    </div>
  )
}

export default Home