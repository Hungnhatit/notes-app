import React, { useState } from 'react'
import { IoCloseSharp } from "react-icons/io5";
import TagInput from '../../components/Input/TagInput';
import { MdClose } from 'react-icons/md';
import axiosInstance from '../../utils/axiosInstance';

const AddEditNote = ({ noteData, getAllNotes, type, onClose, showToast }) => {
  const [title, setTitle] = useState(noteData?.title || "");
  const [content, setContent] = useState(noteData?.content || "");
  const [tags, setTags] = useState(noteData?.tags || []);
  const [error, setError] = useState(null);

  const addNewNote = async () => {
    try {
      const res = await axiosInstance.post("/create-note", {
        title,
        content,
        tags
      });

      if (res.data && res.data.note) {
        showToast("Note has been added successfully!");
        getAllNotes();
        onClose();
      }
    } catch (error) {
      if (error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        setError(error.response.data.message);
      }
    }
  }

  const editNote = async () => {
    const noteId = noteData._id;
    try {
      const res = await axiosInstance.put("/edit-note/" + noteId, {
        title, content, tags
      });

      if (res.data && res.data.editNote) {
        showToast("Note has been updated successfully!")
        getAllNotes();
        onClose();
      }
      console.log(res)
    } catch (error) {
      if (error.response && error.response.data && error.response.data.message) {
        setError(error.response.data.message)
      }
    }
  }

  const handleAddNote = () => {
    if (!title) {
      setError("Please enter a title!");
      return;
    }

    if (!content) {
      setError("Please enter the content");
      return;
    }

    setError("");
    if (type === "edit") {
      editNote();
    } else {
      addNewNote();
    }

  }

  return (
    <div className='relative'>
      <button
        className='w-10 h-10 rounded-full flex items-center justify-center absolute -top-3 -right-3 hover:bg-slate-200 transition-all ease-linear'
        onClick={onClose}
      >
        <MdClose
          size={20}
          className='text-slate-400'
        ></MdClose>
      </button>

      <div className='flex flex-col gap-2'>
        <label className="input-label font-semibold text-16px">Title</label>
        <input
          type="text"
          className='text-2xl text-slate-950 outline-none'
          placeholder='Review your phone'
          value={title}
          onChange={({ target }) => setTitle(target.value)}
        />
        <div className='flex flex-col gap-2 mt-4'>
          <label className='input-label'>Content</label>
          <textarea
            type="text"
            className='text-sm text-slate-950 outline-none bg-slate-50 p-2 rounded'
            placeholder='Content'
            value={content}
            onChange={({ target }) => setContent(target.value)}
            rows={10}
          >
          </textarea>
        </div>
        <div className='mt-3'>
          <label className='input-label'>TAGS</label>
          <TagInput tags={tags} setTags={setTags}></TagInput>
        </div>

        {error && <p className='text-red-500 text-xs pt-4'>{error}</p>}

        <button
          className='btn-primary font-medium mt-5 p-3'
          onClick={handleAddNote}>
          {type === "edit" ? "Update" : "Add"}
        </button>
      </div>
    </div>

  )
}

export default AddEditNote