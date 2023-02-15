import { Box, Button, Input } from '@chakra-ui/react'
import axios from 'axios'
import React, { useState } from 'react'

function CreateTask({handleTask}) {

    const [task,setTask]=useState()
    
    // const handleTask=()=>{
    //     const token=JSON.parse(localStorage.getItem("token"))
    //      let obj={
    //         "task":task,
    //         "token":token[0]
    //     }
    //     // console.log(obj)
    //      axios.post("http://localhost:4000/user/addtask",obj)
    //      .then((r)=>{
    //         console.log(r)
    //         alert("Task Added Successfully")
    //      })
    //      .catch((e)=>{
    //         console.log(e)
    //         alert("Some Thing Went Wrong")
    //      })
    // }


  return (
    <Box>
        <Input onChange={(e)=>setTask(e.target.value)} placeholder='Write Your Task Here' width={"40%"} fontSize="1rem" height={"3rem"}  margin={"1rem 1rem 1rem 1rem"} />
        <Button onClick={()=>handleTask(task)} backgroundColor={"blue"} color="white" width={"20%"} fontSize="1rem" height={"3rem"}  margin={"1rem 1rem 1rem 1rem"} >Add Task</Button>
    </Box>
  )
}

export default CreateTask