import React from 'react'
import { FaUser } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import ReCAPTCHA from 'react-google-recaptcha';

function Login() {
  
  return (
   <div className='grid grid-cols-2 h-screen fixed w-screen top-0 left-0'>
    <div className="bg-purple-600 w-full relative flex overflow-hidden  flex-col gap-2 justify-center items-start px-40">
        <div className="h-72 absolute -top-24 right-24 w-72  bg-transparent border-ds  border-4 rounded-full">
          
        </div>
        <div className="h-80 absolute -top-20  -right-10 w-80  bg-transparent border-ds  border-4 rounded-full">
          
          </div>
          <div className="h-72 absolute -bottom-24 left-32 w-72  bg-transparent border-ds  border-4 rounded-full">
          
          </div>
          <div className="h-80 absolute -bottom-20 -left-10 w-80  bg-transparent border-ds  border-4 rounded-full">
            
            </div>
        <div className="text-3xl font-bold flex justify-start text-white">HUB IT</div>
        <div className="text-xm font-normal text-white">TRAINING AND SOLUTION (Computer Institute)</div>
        <button className="border-2 rounded-lg h-[40px] bg-white fot-bold mt-2 text-blue-500 w-[100px]">Read more</button>
      </div>

    <div className='bg-gray-100'>
    <div className='border bg-white shadow-2xl  h-[550px] w-[420px] m-auto text-left p-16 mt-20 rounded-lg'>
      
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

    <ReCAPTCHA
    sitekey="6LchM3opAAAAAHWkhV51LOB3nzEd4jPYKhx_Fd47"
    />

    <div>
    <button
          type="button"
          className="bg-indigo-500 mt-6 h-10 w-full text-lg rounded-lg text-center text-white hover:bg-indigo-400"
        >
         Cancel
        </button>
    </div>

    <div className='mt-4'>Forgot Password?</div>
    </div>
    </div>
   </div>
  )
}

export default Login