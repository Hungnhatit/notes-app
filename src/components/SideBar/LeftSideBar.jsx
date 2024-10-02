import React, { useState } from 'react';
import { FaRegFolder, FaRegStar } from 'react-icons/fa6';
import { MdOutlineStickyNote2 } from 'react-icons/md';
import { TiDownloadOutline } from "react-icons/ti";
import { FaRegTrashAlt } from "react-icons/fa";
import { IoPricetags } from "react-icons/io5";
import SearchTag from '../Search/SearchTag';

const LeftSideBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleSideBar = () => {
    setIsOpen(!isOpen);
  }

  return (
    <div className='sidebar-container w-64 h-full bg-[#EEEFF1]'>
      <SearchTag
        
      ></SearchTag>
      <div className='sidebar-heading'>

      </div>
      <div className='sidebar-items-body'>
        <ul>
          <li className='w-full h-8 flex items-center px-4 py-2 hover:bg-[#FDFDFD] cursor-pointer'>
            <MdOutlineStickyNote2
              size={20}
              className='mr-2'
              style={{ color: "0A6DD6" }}
            />
            <span className='text-14px font-medium'>Notes</span>
          </li>
          <li className='w-full h-8 flex items-center px-4 py-2 hover:bg-[#FDFDFD] cursor-pointer'>
            <FaRegFolder
              size={20}
              className='mr-2'
              style={{ color: "72767E" }}
            />
            <span className='text-14px font-medium'>Files</span>
          </li>
          <li className='w-full h-8 flex items-center px-4 py-2 hover:bg-[#FDFDFD] cursor-pointer'>
            <FaRegStar
              size={20}
              className='mr-2'
              style={{ color: "EBAD00" }}
            />
            <span className='text-14px font-medium'>Starred</span>
          </li>
          <li className='w-full h-8 flex items-center px-4 py-2 hover:bg-[#FDFDFD] cursor-pointer'>
            <TiDownloadOutline
              size={20}
              className='mr-2'
              style={{ color: "800068" }}
            />
            <span className='text-14px font-medium'>Archived</span>
          </li>
          <li className='w-full h-8 flex items-center px-4 py-2 hover:bg-[#FDFDFD] cursor-pointer'>
            <FaRegTrashAlt
              size={20}
              className='mr-2'
              style={{ color: "0A6DD6" }}
            />
            <span className='text-14px font-medium'>Trash</span>
          </li>
          <li className='w-full h-8 flex items-center px-4 py-2 hover:bg-[#FDFDFD] cursor-pointer'>
            <IoPricetags
              size={20}
              className='mr-2'
              style={{ color: "350053" }}
            />
            <span className='text-14px font-medium'>Untagged</span>
          </li>
        </ul>
      </div>
    </div>

  )
};
export default LeftSideBar;