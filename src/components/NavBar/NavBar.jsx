import React, { useState } from 'react'
import ProfileInfo from '../Cards/ProfileInfo.jsx'
import { useNavigate } from 'react-router-dom';
import Search from '../Search/SearchBar';

const NavBar = ({ userInfo, onSearchNote, handleClearSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const navigate = useNavigate();


  const onLogout = (e) => {
    localStorage.clear();
    navigate("/login");
  }

  const handleSearch = () => {
    if (searchQuery) {
      onSearchNote(searchQuery);
    }
  }

  const onClearSearch = () => {
    setSearchQuery("");
    handleClearSearch();
  }

  return (
    <div className='bg-white flex items-center justify-between px-6 py-2 drop-shadow'>
      <Search
        value={searchQuery}
        onChange={({ target }) => {
          setSearchQuery(target.value);
        }}
        handleSearch={handleSearch}
        onClearSearch={onClearSearch}
      ></Search>

      <ProfileInfo userInfo={userInfo} onLogout={onLogout}></ProfileInfo>


    </div>
  )
}

export default NavBar