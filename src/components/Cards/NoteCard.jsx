import React from 'react'
import { BsPin } from "react-icons/bs";
import { IoIosCreate } from 'react-icons/io';
import { MdDelete, MdOutlinePushPin } from "react-icons/md";
import moment from "moment";
const NoteCard = ({ title, date, content, tags, isPinned, onEdit, onDelete, onPinNote }) => {
  return (
    <div className='border rounded p-4 bg-white hover:shadow-md transition-all ease-linear cursor-pointer'>
      {/* Note Contents */}
      <div className="note-content-container">
        <div className='flex justify-between'>
          <div className=''>
            <span className='text-base font-medium text-slate-500'>{moment(date).format("Do MMM YYYY")}</span>
            <h6 className='text-sm font-medium'>{title}</h6>
          </div>
          <span
            className=''>

            <MdOutlinePushPin
              size={24}
              className={`icon-btn ${isPinned ? "text-primary rotate-45" : "text-slate-300"} hover:rotate-45 transition-all duration-200`}
              onClick={onPinNote}
            />
          </span>
        </div>

        <p className='text-xs text-slate-600 mt-2'>{content?.slice(0, 60)}</p>
      </div>

      {/* Note Actions */}
      <div className='flex items-center justify-between mt-2'>
        <div className='text-xs text-slate-500'>{tags.map((item) => `#${item} `)}</div>

        <div className='flex items-center gap-2'>
          <IoIosCreate
            size={22}
            className='icon-btn hover:text-green-500 cursor-pointer transition-all ease-linear hover:scale-110'
            onClick={onEdit}
          />
          <MdDelete
            size={22}
            className='icon-btn hover:text-red-700 cursor-pointer transition-all ease-linear hover:scale-110'
            onClick={onDelete}
          />
        </div>
      </div>

    </div>


  )
}

export default NoteCard
