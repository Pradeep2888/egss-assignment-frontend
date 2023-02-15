import { Box, Button, Input } from '@chakra-ui/react'
import axios from 'axios'
import React, { useState } from 'react'

function CreateTask({handleTask}) {

    const [task,setTask]=useState()
    


  return (
    <Box>
        <Input onChange={(e)=>setTask(e.target.value)} placeholder='Write Your Task Here' width={"40%"} fontSize="1rem" height={"3rem"}  margin={"1rem 1rem 1rem 1rem"} />
        <Button onClick={()=>handleTask(task)} backgroundColor={"blue"} color="white" width={"20%"} fontSize="1rem" height={"3rem"}  margin={"1rem 1rem 1rem 1rem"} >Add Task</Button>
    </Box>
  )
}

export default CreateTask