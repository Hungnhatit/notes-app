import React, { useEffect, useState } from 'react'
import NavBar from '../../components/NavBar/NavBar'
import NoteCard from '../../components/Cards/NoteCard'
import { RiStickyNoteAddFill } from "react-icons/ri";
import AddEditNote from './AddEditNote';
import Modal from "react-modal";
import moment from "moment";
import LeftSideBar from '../../components/SideBar/LeftSideBar';
import axiosInstance from '../../utils/axiosInstance';
import { useNavigate } from 'react-router-dom';
import Toast from '../../components/ToastMessage/Toast.jsx';
import EmptyCard from '../../components/Empty/EmptyCard.jsx';
import NotesImg from "../../assets/imgs/sticky-note.png"

const Home = () => {
  const [opendEditModal, setOpenAddEditModal] = useState({
    isShown: false,
    type: "add",
    data: null
  });
  const [showToastMessage, setShowToastMessage] = useState({
    isShown: false,
    message: "",
    type: "add",
  });
  const [userInfo, setUserInfo] = useState(null);
  const [allNotes, setAllNote] = useState([]);
  const [isSearch, setIsSearch] = useState(false);

  const navigate = useNavigate();

  const handleEdit = (noteDetails) => {
    setOpenAddEditModal({
      isShown: true,
      data: noteDetails,
      type: "edit",
    })
  }

  const handleDeleteNote = async (data) => {
    const noteId = data._id;
    try {
      const res = await axiosInstance.delete("/delete-note/" + noteId);
      if (res.data && !res.data.error) {
        showToast("Note has been deleted successfully!", "delete");
        getAllNotes();
      }

    } catch (error) {
      if (error.response && error.response.data && error.response.data.message) {
        console.log("An unexpected error occured. Please try again!");
      }
    }
  }

  const onSearchNote = async (query) => {
    try {
      const res = await axiosInstance.get('/search-note', {
        params: { query },
      });

      if (res.data && res.data.notes) {
        setIsSearch(true);
        setAllNote(res.data.notes);
      }
    } catch (error) {
      console.log(error);
    }
  }

  const handlePinNote = async (item) => {

    try {
      const res = await axiosInstance.put("/update-pinned-note/" + item._id, {
        isPinned: !item.isPinned,
      });
      if (res.data && res.data.note) {
        showToast("Note has already been update!");
        getAllNotes();
      }
      console.log(item)
    } catch (error) {
      console.log(error);
    }
  }

  const handleClearSearch = () => {
    setIsSearch(false);
    getAllNotes();
  }

  const showToast = (message, type) => {
    setShowToastMessage({
      isShown: true,
      message,
      type
    })
  }

  const handleCloseToast = () => {
    setShowToastMessage({
      isShown: false,
      message: ""
    })
  }

  const getUserInfo = async () => {
    try {
      const res = await axiosInstance.get('/get-user');
      if (res.data && res.data.user) {
        setUserInfo(res.data.user);
      }

    } catch (error) {
      console.log(error);
      if (error.response.status === 401) {
        localStorage.clear();
        navigate("/login");
      }
    }
  }

  const getAllNotes = async () => {
    try {
      const res = await axiosInstance.get("/get-all-notes");
      if (res.data && res.data.notes) {
        setAllNote(res.data.notes);
      }
    } catch (error) {
      console.log(error);
    }
  }



  useEffect(() => {
    getUserInfo();
    getAllNotes();
    return () => { };
  }, []);




  // JSX
  return (
    <div className='h-screen'>
      <div className='w-full h-full flex'>
        <LeftSideBar></LeftSideBar>

        <div className='w-full'>
          <NavBar userInfo={userInfo} onSearchNote={onSearchNote} handleClearSearch={handleClearSearch}></NavBar>
          {allNotes.length > 0 ? (<div className='w-full grid 2xl:grid-cols-4 2xl:px-8 gap-4 mt-8 xxs:grid-cols-1 xxs:px-2 sm:grid-cols-3'>
            {allNotes.map((item, index) => (
              // Note Card Item
              <NoteCard
                key={item._id}
                title={item.title}
                date={item.createdOn}
                content={item.content}
                tags={item.tags}
                isPinned={item.isPinned}
                onEdit={() => { handleEdit(item) }}
                onDelete={() => { handleDeleteNote(item) }}
                onPinNote={() => { handlePinNote(item) }}
              />
            ))}
          </div>) : (
            <EmptyCard imgSrc={NotesImg} message={`Start creating your first note! Click the "Add" button to jot down your thoughts, ideas, and reminders. Let's get started!`} />
          )}
        </div>
        <button
          className='w-16 h-16 flex items-center justify-center rounded-2xl bg-primary hover:bg-blue-600 hover:scale-105 transition-all fixed right-8 bottom-6'
          onClick={() => {
            setOpenAddEditModal({
              isShown: true,
              type: 'add',
              data: null
            })
          }}
        >
          <RiStickyNoteAddFill
            className='text-white'
            size={28}
          />
        </button>

        <Modal
          isOpen={opendEditModal.isShown}
          onRequestClose={() => { }}
          style={{
            overlay: {
              backgroundColor: "rgba(0,0,0,0.4)",
            }
          }}
          ariaHideApp={false}
          contentLable=""
          className="2xl:w-[40%] xxs:w-3/4 max-h-3/4 bg-white rounded-md mx-auto mt-14 p-5"
        >
          <AddEditNote
            type={opendEditModal.type}
            noteData={opendEditModal.data}
            onClose={() => {
              setOpenAddEditModal({
                isShown: false,
                type: "add",
                data: null
              })
            }}
            getAllNotes={getAllNotes}
            showToast={showToast}
          />
        </Modal>

        <Toast
          isShown={showToastMessage.isShown}
          message={showToastMessage.message}
          type={showToastMessage.type}
          onClose={handleCloseToast}
        >
        </Toast>
      </div>
    </div>
  )
}

export default Home