import React, { useState } from 'react'
import { Box, Button, Input, Text } from '@chakra-ui/react'
import axios from 'axios'
function Signup() {

  const [name,setName]=useState("")
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")

  const handleRegistration=()=>{
    let obj={
      name,
      email,
      password
    }
    // console.log(obj)

    axios.post("http://localhost:4000/user/register",obj)
    .then((r)=>{
     console.log(r)
     alert("User Registerd Succefully")
    })
    .catch((e)=>{
      console.log(e)
      alert("something went wrong")
    })

  }

  return (

         <Box bg='tomato' borderRadius="10px" w='30%' p={4} textAlign={"center"} boxSizing="border-box" >
                <Text fontSize='3rem'>Register</Text>
                <Input onChange={(e)=>setName(e.target.value)} variant='filled' border={"none"}  padding={"0.5rem 2rem 0.5rem 2rem"} mb={"10px"} borderRadius="10px" placeholder='Name' type={"text"} />
                <Input onChange={(e)=>setEmail(e.target.value)} variant='filled' border={"none"}  padding={"0.5rem 2rem 0.5rem 2rem"} mb={"10px"} borderRadius="10px"  placeholder='Email' type={"email"} />
                <Input onChange={(e)=>setPassword(e.target.value)} variant='filled' border={"none"}  padding={"0.5rem 2rem 0.5rem 2rem"} mb={"10px"} borderRadius="10px"  placeholder='Password' type={"password"} />
                <br/>
                <Button onClick={()=>handleRegistration()} backgroundColor='blue' color={"white"} fontSize="1rem" mt={"1rem"} borderRadius="10px" border={"none"} padding={"0.5rem 2rem 0.5rem 2rem"} mb="1rem" >Register</Button>
            </Box>
    
  )
}

export default Signup