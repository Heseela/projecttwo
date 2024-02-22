import React, { useEffect, useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'



function ProtectedRoute() {

    const navigation=useNavigate()
const [token,setToken]=useState(false)

useEffect(() => {
 if(!localStorage.getItem("token")){
    setToken(false)
    navigation("/login")
 }  else {
    setToken(true)
 }
}, [localStorage])




  return (
    <div>
        <Outlet>

        </Outlet>
    </div>
  )
}

export default ProtectedRoute