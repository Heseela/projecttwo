import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'
import { Route, Router, Routes } from 'react-router-dom'
import Table from "./pageComponent/Table"
import Office from "./Page/Office"
import Add from "./Add/Add"
import Login from './loginSection/Login'

function App() {

return(
  <Routes>
      <Route path="/" element={<Table/>}/>
    <Route path="/:id" element={<Office/>}/>
    <Route path="/add" element={<Add/>}/>
    <Route path="/login" element={<Login/>}/>
  </Routes>
)
}

export default App
