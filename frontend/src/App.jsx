import { useState } from 'react'
import Home from './Pages/home'
import Navbar from './components/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Signup from './Pages/Signup'
import Signin from './Pages/Signin'
import Footer from './components/footer'

function App() {
  
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>

      <Route path='/' element={<Home/>}/>
      <Route path='/Signup' element={<Signup/>}/>
      <Route path='/Signin' element={<Signin/>}/>
      
    </Routes>
    <Footer/>
    </BrowserRouter>
  )
}

export default App
