import React, { lazy } from 'react'
import Laptop from '../assets/laptop.jpg'

const Analytics = () =>  {
  return (
    <div className='w-full bg-white py-16 px-4'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
        <img className='w-[500px] mx-auto my-4' src={Laptop} alt="Laptop" />
        <div className='flex flex-col justify-center'>
            <p className='text-[#00df9a] font-bold'>DATA STRUCTURES & ALGORITHMS</p>
            <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Explore Core DSA Topics</h1>
            <p> 
              Enhance your skills in key areas like Trees, Dynamic Programming, Graphs, Linked Lists, and Stacks. Practice on platforms like LeetCode and Codeforces to master these concepts.
            </p>
            <button className='bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3'>Get started</button>
        </div>
      </div>
    </div>
  )
}

export default Analytics