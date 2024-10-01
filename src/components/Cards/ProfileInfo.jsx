import React from 'react'
import { getInitials } from '../../utils/helper';

const ProfileInfo = ({ userInfo, onLogout }) => {
  return (
    <div className='flex items-center gap-3'>
      <div className='w-12 h-12 flex items-center justify-center rounded-full border-2 border-slate-400 text-slate-950 font-medium bg-slate-100 hover:bg-slate-300 transition ease-linear duration-100 cursor-pointer'>
        {getInitials(userInfo?.fullName)}
      </div>

      <div className='max-sm:hidden'>
        <p className='text-sm font-semibold user-name'>{userInfo?.fullName}</p>
        <button
          className='text-sm text-slate-700 underline'
          onClick={onLogout}>
          Log out
        </button>
      </div>



    </div>
  )
}

export default ProfileInfo