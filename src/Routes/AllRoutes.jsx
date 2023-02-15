import React from 'react'
import { Route, Routes } from 'react-router-dom'
import EditTask from '../Components/EditTask'
import Home from '../Pages/Home'
import Task from '../Pages/Task'

function AllRoutes() {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/task' element={<Task/>} />
            <Route path='/edittask/:taskId' element={<EditTask/>}/>
        </Routes>
    </div>
  )
}

export default AllRoutes