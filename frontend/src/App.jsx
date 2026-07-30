import React from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import EditNote from './pages/EditNote';

function App() {

  return (
    <>
      <Navbar/>

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/edit/:id' element={<EditNote/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
