import { Box, Button, ListItem, OrderedList, Text } from '@chakra-ui/react'
import axios from 'axios'
import React from 'react'
import { useNavigate } from 'react-router-dom'

function Tasklist({task,status,taskId,getData}) {

    const handleStatus=(taskId,status)=>{
    
        let obj={
            status:status==="true"?"false":"true"
        }
        axios.patch(`https://backend-test-api-egss.onrender.com/user/changestatus/${taskId}`,obj)
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
      axios.delete(`https://backend-test-api-egss.onrender.com/user/taskdelete/${taskId}`)
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
                  <Button height={"2rem"} backgroundColor={status==="true"?"yellow":"pink"} onClick={()=>handleStatus(taskId,status)} >{status==="true"?"Done":"Not Done"}</Button> 
                  <Button height={"2rem"} backgroundColor="green" onClick={()=>handleEdit(taskId)} >Edit</Button> 
                  <Button height={"2rem"} backgroundColor="red" onClick={()=>handleDelete(taskId)} >Delete</Button> 
             </Box>
        </ListItem>
  )
}

export default Tasklist