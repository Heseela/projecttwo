import axios from 'axios'
import React, { useEffect, useState } from 'react'
import{Link}from 'react-router-dom'

function Table() {
    const [countries, setCountries] = useState([])

    const getcountries=()=>{
    try{
    axios.get("https://hubmainback.hubit.com.np/courses").then(res=>{
      console.log(res.data)
      setCountries([...res.data.data])
    }).catch(error=>{
      console.log(error)
    })
    
    }
    
    
    catch(error){
      console.log(error)
    }
    }
    
    // getcountries();
useEffect(() => {
  getcountries()
}, [])

      return (
        <div>
    {
      console.log(countries)
    }
    <table className='w-full mx-auto border'>
      <thead>
        <tr className='border bg-blue-500 py-4'>
          <th className='py-4 px-3 capitalize text-white'>S.N.</th>
          <th className='py-4 px-3 capitalize text-white'>Title</th>
          <th className='py-4 px-3 capitalize text-white'>Duration</th>
          <th className='py-4 px-3 capitalize text-white'>Instructor</th>
          <th className='py-4 px-3 capitalize text-white'>Course Category</th>
          <th className='py-4 px-3 capitalize text-white'>Action</th>
    
    
        </tr>
    
      </thead>
      <tbody>
      {
      countries.map((val,i)=>{
        return(
          <tr className={`${(i%2)!=0?'bg-gray-200':'bg-white'}`}>
            <td align='center' className='py-4 px-4'>{i+1}</td>
            <td align='center' className='py-4 px-4'>
                <Link to={`/${val.id}`}>
                {val?.title}
                </Link>
                
                
                </td>
            <td align='center' className='py-4 px-4'>{val?.duration}</td>
            <td className='px-3 py-3'>
              <ol type='1'>
                {val.instructor.map((item,ind)=>{
                  return(
                    <li>{item.name}</li>
                  )
                })}
              </ol>
            </td>
            {/* <td align='center' className='py-4 px-4'>{val?.name}</td> */}
            <td align='center' className='py-4 px-4'>{val?.category.name}</td>
            <td className='px-3 py-3'>
              <div className='flex gap-4'>
                <button className='text-white capitalize bg-blue-400 px-6 py-2 rounded-full text-sm'>edit</button>
                <button className='text-white capitalize bg-red-400 px-6 py-2 rounded-full text-sm'>delete</button>
    
              </div>
            </td>
    
          </tr>
        
        )
      })
    }
    
    
    
      </tbody>
    
    </table>
    </div>
    )
}

export default Table