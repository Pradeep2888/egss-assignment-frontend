import { Box, Button, Input } from '@chakra-ui/react'
import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Navbar from './Navbar'

function EditTask() {
    const {taskId}=useParams()
    // console.log(param)
    const navigate=useNavigate()
    const [task,setTask]=useState("")
    const handleupdate=()=>{
        let obj={
            task,
            taskId
        }

        axios.patch(`http://localhost:4000/user/edittask`,obj)
        .then((r)=>{
            // console.log(r)
            alert("Task Updated")
            navigate("/task")
        })
        .catch((e)=>{
            alert("Some Thing Went Wrong")
            console.log(e)
        })

    }
          


  return (
    <div>
        <Navbar/>
        <Box>
        <Input onChange={(e)=>setTask(e.target.value)} placeholder='Write Updated Task Here' width={"40%"} fontSize="1rem" height={"3rem"}  margin={"1rem 1rem 1rem 1rem"} />
        <Button onClick={()=>handleupdate(task)} backgroundColor={"green"} color="white" width={"20%"} fontSize="1rem" height={"3rem"}  margin={"1rem 1rem 1rem 1rem"} >Update Task</Button>
    </Box>
    </div>
  )
}

export default EditTask