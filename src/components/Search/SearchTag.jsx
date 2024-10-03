// This component is used for left side bar
import React from 'react'
import { HiMagnifyingGlass } from "react-icons/hi2";

const SearchTag = ({ value, onChange, handleSearch, onClearSearch, isOpen }) => {
  return (
    <div className='mx-4 pt-2 mb-4'>
      <div className='w-[180px] flex items-center px-2 bg-[#FFFFFF] rounded-full'>
        <HiMagnifyingGlass
          size={20}
          className='mr-2'
        />
        <input
          type="text"
          placeholder='Search tags ...'
          className={`${isOpen ? "w-full" : "hidden h-full"}  text-14px font-light rounded-full py-[6px] outline-none`}
        />
      </div>
    </div>


  )
}

export default SearchTag