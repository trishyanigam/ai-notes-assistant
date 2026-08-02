import React from 'react'
import { useState } from 'react';
import api from '../services/api';

function NoteForm({fetchNotes}) {
  const [title,setTitle] = useState("");
  const [content,setContent] = useState("");
  const handleSubmit = async(e)=>{
    e.preventDefault();
    try{
      await api.post('/notes',{
        title,
        content
      });
      fetchNotes();
    }
    catch(err)
    {
      console.log(err);
    }
  }
  return (
    <div className='bg-white shadow-lg rounded-lg p-6 mt-6'>
      <h2 className='text-2xl font-semibold mb-5'>Add New Note</h2>
      <form onSubmit={handleSubmit}>
          <input type="text" placeholder='Enter Title' value={title} onChange={(e)=>setTitle(e.target.value)} className='w-full border p-3 rounded-lg mb-4' />
          <textarea rows='5' placeholder='Write your note...' value={content} onChange={(e)=>setContent(e.target.value)} className='w-full border p-3 rounded-lg mb-4'/>
          <button type='submit' className='bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700'>ADD NOTE</button>
      </form>
    </div>
  )
}

export default NoteForm
