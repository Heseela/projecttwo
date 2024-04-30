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
import ProtectedRoute from './HOC/protectedRoute'

function App() {

return(
  <Routes>
    <Route element={<ProtectedRoute/>}>
    <Route path="/" element={<Table/>}/>
    <Route path="/:id" element={<Office/>}/>
    <Route path="/add" element={<Add/>}/>
    <Route path="/login" element={<Login/>}/>
    </Route>
  </Routes>
)
}

export default App

