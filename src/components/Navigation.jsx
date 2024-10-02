import React from 'react'

const Navigation = () => {
  return (
    <div>
       <nav className='flex gap-[32px] text-[#5C5F6A] text-[14px] text-center items-center'>
        <a href=''>Home</a>
        <a className='flex items-center' href=''>Categories
        <img src="/images/Chevron Down.svg" alt="icon" /></a>
        <a href=''>About</a>
        <a href=''>Contact</a>
        
        </nav> 
    </div>
  )
}

export default Navigation;