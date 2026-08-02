import React from 'react'
import api from '../services/api';
import { useNavigate } from "react-router-dom";

function Notecard({ note,fetchNotes }) {
  const navigate = useNavigate();
  const deleteNote=async()=>{
        await api.delete(
          `/notes/${note._id}`
        );
        fetchNotes();
      }
  return (
    <div className='bg-white shadow rounded-lg p-5'>
      <h2 className='text-xl font-bold'>{note.title}</h2>
      <p className='mt-3 text-gray-700'>{note.content}</p>
      <div className='flex gap-3 mt-5'>
        <button onClick={()=>navigate(`/edit/${note._id}`)} className='bg-green-600 text-white px-4 py-2 rounded'>EDIT</button>
        <button onClick={deleteNote} className='bg-red-600 text-white px-4 py-2 rounded'>DELETE</button>
      </div>
    </div>
  )
}

export default Notecard
