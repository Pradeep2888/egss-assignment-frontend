import { Box, Button, ListItem, OrderedList, Text } from '@chakra-ui/react'
import axios from 'axios'
import React from 'react'
import { useNavigate } from 'react-router-dom'

function Tasklist({task,status,taskId,getData}) {

    const handleStatus=(taskId,status)=>{
    
        let obj={
            status:status==="true"?"false":"true"
        }
        axios.patch(`http://localhost:4000/user/changestatus/${taskId}`,obj)
        .then((r)=>{
          getData()
          alert("Status Changed")
        })
        .catch((e)=>{
          alert("Some thing went wrong")
        })
        
    }

    const handleDelete=(taskId)=>{
       console.log(taskId)
      axios.delete(`http://localhost:4000/user/taskdelete/${taskId}`)
      .then((r)=>{
        getData()
        alert("Item Deleted")
      })
      .catch((e)=>{
        alert("Some thing went wrong")
      })
    }
const navigate=useNavigate()
    const handleEdit=(taskId)=>{
      navigate(`/edittask/${taskId}`)
    }

  return (
        <ListItem>
            <Box display={"flex"} justifyContent={"space-between"} width={"50%"} >
                 <Text>{task}</Text>
                  <Button height={"2rem"} onClick={()=>handleStatus(taskId,status)} >{status==="true"?"Done":"Not Done"}</Button> 
                  <Button height={"2rem"} onClick={()=>handleDelete(taskId)} >Delete</Button> 
                  <Button height={"2rem"} onClick={()=>handleEdit(taskId)} >Edit</Button> 
             </Box>
        </ListItem>
  )
}

export default Tasklist