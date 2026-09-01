import React from 'react'
import Home from './Component/Home'
import Content from './Component/Content'
import About from './Component/About'
import Navbar from './Component/Navbar'
import { Route, Routes } from 'react-router-dom'

export default function App() {
  return (
    <div>
      
      <h1>Welcome to react routing</h1>
      <Navbar/>

      <Routes>
      
      <Route path= "/Home" element = {<Home/>}></Route>
      <Route path= "/Contact" element = {<Content/>}></Route>
      <Route path= "/About" element = {<About/>}></Route>
      </Routes>

    </div>
  )
}
