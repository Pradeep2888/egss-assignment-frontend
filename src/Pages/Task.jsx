import { OrderedList } from '@chakra-ui/react'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import CreateTask from '../Components/CreateTask'
import Navbar from '../Components/Navbar'
import Tasklist from '../Components/Tasklist'

function Task() {

    const [data,setData]=useState()
 
    const getData=()=>{
        const token=JSON.parse(localStorage.getItem("token"))
        
        axios.get(`https://backend-test-api-egss.onrender.com/user/gettask/${token}`)
        .then((r)=>{
            // console.log("hi")
            setData(r.data.data)
        })
        .catch((e)=>{
            console.log(e)
        })
    }

    const handleTask=(task)=>{
        console.log(task)
        const token=JSON.parse(localStorage.getItem("token"))
         let obj={
            "task":task,
            "token":token
        }
        // console.log(obj)
         axios.post("https://backend-test-api-egss.onrender.com/user/addtask",obj)
         .then((r)=>{
            // console.log(r)
            getData()
            alert("Task Added Successfully")
         })
         .catch((e)=>{
            // console.log(e)
            alert("Some Thing Went Wrong")
         })
    }

    useEffect(()=>{
     getData()
    },[])

  return (
    <div>
        <Navbar/>
        <CreateTask handleTask={handleTask} />
        <OrderedList>
        {
            data?.map((item)=>(
                <Tasklist key={item._id} taskId={item._id} task={item.task} status={item.status} getData={getData}  />
            ))
        }
        </OrderedList>
    </div>
  )
}

export default Task