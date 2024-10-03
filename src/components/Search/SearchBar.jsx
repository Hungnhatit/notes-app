import React from 'react'
import { FaMagnifyingGlass } from "react-icons/fa6"
import { IoMdClose } from "react-icons/io";

const SearchBar = ({ value, onChange, handleSearch, onClearSearch }) => {
  return (
    <div className='w-96 flex items-center px-4 bg-slate-100 rounded-md xxs:mx-2'>
      <input
        type="text"
        placeholder='Search note...'
        className='w-full text-14px bg-transparent py-[11px] outline-none'
        value={value}
        onChange={onChange}
      />

      {value && (
        <IoMdClose
          className='text-xl text-slate-500 cursor-pointer hover:text-black transition ease-linear duration-100 mr-3'
          onClick={onClearSearch} />)}

      <FaMagnifyingGlass
        className='text-slate-400 cursor-pointer hover:text-black transition ease-linear duration-100'
        onClick={handleSearch}
      />
    </div>
  )
}

export default SearchBar