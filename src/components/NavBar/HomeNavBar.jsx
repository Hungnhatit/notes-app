import React from 'react'
import TopBarLogo from "../../assets/imgs/note-app-logo.png"
import { Link } from 'react-router-dom'
import { FaArrowRight } from 'react-icons/fa6'

const HomeNavBar = ({ topBarItems }) => {
  return (
      <div className='bg-[#1F2937]'>
        <div className='max-w-7xl h-[72px] mx-auto flex items-center justify-between'>
          <Link to="/" className='flex items-center'>
            <img
              src={TopBarLogo}
              alt="Header Logo"
              className='w-[40px] h-[40px] object-cover'
            />
            <p className='text-2xl font-semibold text-white ml-2'>OneWork</p>
          </Link>

          <div className=''>
            <ul className='flex'>
              {topBarItems.map((item, index) => (
                <li
                  key={index}
                  className='px-8 py-2 mx-4 text-white hover:bg-[#2e2c6d] transition-all rounded-lg cursor-pointer'>{item.label}</li>
              ))}
            </ul>
          </div>

          <div className='flex items-center hover:text-[#5a75b4] transition-all'>
            <Link to="/dashboard"
              className='font-semibold text-white'>Go to web app</Link>
            <FaArrowRight
              className='ml-2 text-white' />
          </div>
        </div>
      </div>

  )
}

export default HomeNavBar