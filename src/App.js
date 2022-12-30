import React from 'react'
import './App.css'
import {BrowserRouter, Route,Routes} from 'react-router-dom'
import { Box } from '@mui/material'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ExerciseDetail from './pages/ExerciseDetail'
import Home from './pages/Home'
import Exercises from './components/Exercises'

const App = () => {
  return (
    <div>
        <Box width="400px" sx={{ width: { xl: '1488px'}}} m="auto">
       
             <Navbar/>
             <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/exercisedetail' element={<ExerciseDetail/>}/>
             </Routes>
             <Footer/>
          
        </Box>
       
        </div>
  )
}

export default App