import React, { useState } from 'react'
import { Alert, AlertIcon, Box, Button, Input, Text } from '@chakra-ui/react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
function Login() {
 
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const [display,setDisplay]=useState("none")
   const navigate=useNavigate()
  const handleClick=()=>{
    if(email==="" || password==="" ){
      alert("Please Fill The Detail")
    }
    else{
    axios.post("https://backend-test-api-egss.onrender.com/user/login",{email,password})
    .then((r)=>{
      // let arr=[]
      // arr.push(r.data.token)
      // console.log(r.data.token)
      localStorage.setItem( "token", JSON.stringify(r.data.token) )
      alert("Loged in Successfully")
      navigate("/task")
      // console.log(r)
    })
    .catch((e)=>{
      alert("Something went wrong")
    })
  }
  }

  return (

        <Box bg='tomato' borderRadius="10px" w='30%' p={4} textAlign={"center"} boxSizing="border-box" >
                <Text fontSize='3rem'>Login</Text>
                <Input variant='filled' border={"none"} width="60%"  padding={"0.5rem 2rem 0.5rem 2rem"} mb={"10px"} borderRadius="10px" placeholder='Email' type={"email"} onChange={(e)=>setEmail(e.target.value)} />
                <Input variant='filled' border={"none"}  width="60%" padding={"0.5rem 2rem 0.5rem 2rem"} mb={"10px"} borderRadius="10px"  placeholder='Password' type={"password"}  onChange={(e)=>setPassword(e.target.value)} />
                <br/>
                <Button onClick={handleClick} backgroundColor='blue' color={"white"} fontSize="1rem" mt={"1rem"} borderRadius="10px" border={"none"} padding={"0.5rem 2rem 0.5rem 2rem"} mb="1rem" >Login</Button>
                
          </Box>
  
  )
}

export default Login