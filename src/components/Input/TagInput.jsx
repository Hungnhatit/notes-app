import React, { useState } from 'react'
import { MdAdd, MdClose } from 'react-icons/md'

const TagInput = ({ tags, setTags }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  }

  const addNewTag = () => {
    if (inputValue.trim() !== "") {
      setTags([...tags, inputValue.trim()]);
      setInputValue("");
    }
  }

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      addNewTag();
    }
  }

  const handleRemoveTag = (tagToRemove) => {
    setTags(tags.filter((tag) => tag !== tagToRemove))
  }

  return (
    <div>
      {tags?.length > 0 && (
        <div className='flex items-center gap-2 flex-wrap mt-2'>
          {tags.map((tag, index) => (
            <span key={index} className='flex items-center gap-2 text-sm bg-slate-200 text-slate-900 px-3 py-1 rounded'>
              # {tag}
              <button
                onClick={() => handleRemoveTag(tag)}
              >
                <MdClose></MdClose>
              </button>
            </span>
          ))}
        </div>
      )}

      <div className='flex items-center gap-4 mt-3'>
        <input
          type="text"
          value={inputValue}
          className='text-sm bg-transparent border px-3 py-2 rounded'
          placeholder='Add a tag ...'
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
        />

        <button
          className='w-8 h-8 flex items-center justify-center rounded-md border border-blue-700 hover:bg-blue-400 transition-all ease-linear'
          onClick={addNewTag}
        >
          <MdAdd
            size={20}
            className='text-blue-500 hover:text-white'
          />
        </button>
      </div>
    </div>
  )
}

export default TagInput