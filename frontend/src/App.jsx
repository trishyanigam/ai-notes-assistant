import React, { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import EditNote from './pages/EditNote';
import Chatbox from './components/Chatbox';

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

      <Chatbox/>
    </>
  )
}

export default App
