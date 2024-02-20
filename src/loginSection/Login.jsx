import React from 'react'
import { FaUser } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";


function Login() {
  
  return (
   <div>
     <div className='border bg-white shadow-2xl  h-[480px] w-[420px] m-auto text-left p-16 mt-20 rounded-lg'>
      <div>
        <div className='text-3xl font-semibold '>Hello HubItians!</div>
        <div className='text-lg font-light'>Welcome Back</div>
      </div>
     
<div>
      <div className='flex flex-row items-center mt-8 bg-white h-12 border rounded-xl'>
        <div className='text-2xl px-5 '><FaUser /></div>
       <div> 
        <input type="text" placeholder='Username' className='w-full outline-none' />
       </div>
      </div>

      <div className='flex flex-row items-center my-6 bg-white h-12 border rounded-xl'>
        <div className='text-2xl px-5 '><RiLockPasswordFill /></div>
       <div> 
        <input type="password" placeholder='Password' className='w-full outline-none' />
       </div>
      </div>
    </div>

    <div>
    <button
          type="button"
          className="bg-indigo-500 h-10 w-full text-lg rounded-lg text-center text-white hover:bg-indigo-400"
        >
         Cancel
        </button>
    </div>

    <div className='mt-4'>Forgot Password?</div>
    </div>
   </div>
  )
}

export default Login