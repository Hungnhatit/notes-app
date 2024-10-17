import React, { useState } from 'react';
import { FaRegFolder, FaRegStar } from 'react-icons/fa6';
import { MdOutlineStickyNote2 } from 'react-icons/md';
import { TiDownloadOutline } from "react-icons/ti";
import { FaRegTrashAlt } from "react-icons/fa";
import { IoPricetags } from "react-icons/io5";
import { RiMenuFold2Fill, RiMenuUnfold2Fill } from 'react-icons/ri';
import './LeftSideBar.css';  // CSS riêng cho sidebar
import { Link } from 'react-router-dom';

const LeftSideBar = () => {
  const [isOpen, setIsOpen] = useState(true);  // Mở sidebar mặc định
  const [activeIndex, setActiveIndex] = useState(null);  // Quản lý item đang chọn

  // Toggle mở/đóng sidebar
  const toggleSideBar = () => {
    setIsOpen(!isOpen);
  };

  // Quản lý trạng thái item được chọn
  const handleItemClick = (index) => {
    setActiveIndex(index);
  };

  // Các item trong sidebar
  const sidebarItems = [
    { label: 'Notes', icon: <MdOutlineStickyNote2 size={24} style={{ color: "0A6DD6", }} /> },
    { label: 'Files', icon: <FaRegFolder size={24} style={{ color: "72767E", }} /> },
    { label: 'Starred', icon: <FaRegStar size={24} style={{ color: "EBAD00", }} /> },
    { label: 'Archived', icon: <TiDownloadOutline size={24} style={{ color: "800068", }} /> },
    { label: 'Trash', icon: <FaRegTrashAlt size={24} style={{ color: "0A6DD6", }} /> },
    { label: 'Untagged', icon: <IoPricetags size={24} style={{ color: "350053", }} /> },
  ];

  return (
    <div className={`sidebar-container ${isOpen ? "w-64" : "w-16"} h-full bg-[#EEEFF1] transition-all duration-300 relative`}>
      <div className='flex items-center justify-between px-5 mt-4 mb-4'>
        <h2 className={`text-2xl font-semibold text-black transition-opacity duration-300 ${isOpen ? "" : " hidden"}`}>
          <Link to="/">OneWork</Link>
        </h2>
        <button
          onClick={toggleSideBar}
          className='h-8'>
          {isOpen ? <RiMenuUnfold2Fill className='text-2xl' /> : <RiMenuFold2Fill className='text-2xl leading-8' />}
        </button>
      </div>

      <div className='sidebar-items-body'>
        <ul className="space-y-2">
          {sidebarItems.map((item, index) => (
            <li
              key={index}
              className={`sidebar-item w-full h-12 flex items-center px-4 py-1 cursor-pointer transition-colors duration-200 hover:bg-[#FDFDFD] ${activeIndex === index ? "bg-[#FDFDFD]" : ""}`}
              onClick={() => handleItemClick(index)}
            >
              {item.icon}
              <span className={`ml-4 text-md font-medium transition-opacity duration-300 ${isOpen ? "opacity-100" : "opacity-0 hidden"}`}>
                {item.label}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default LeftSideBar;
