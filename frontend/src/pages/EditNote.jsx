import React from 'react'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { useEffect } from 'react'
import api from '../services/api'

function EditNote() {
  const[title,setTitle] = useState("");
  const[content,setContent] = useState("");
  const {id} = useParams();
  const navigate = useNavigate();
  useEffect(()=>{
    fetchNote();
  },[]);
  const fetchNote=async()=>{
    try{
      const response = 
      await api.get(`/notes/${id}`);
      setTitle(response.data.data.title);
      setContent(response.data.data.content);
    }
    catch(err)
    {
      console.log(err);
    }
  }
  const handleSubmit = async(e)=>{
    e.preventDefault();
    try
    {
      await api.put(`/notes/${id}`,{
        title,content
      });
      navigate("/");
    }
    catch(err)
    {
      console.log(err);
    }
  };
  return (
    <div className='max-w-3xl mx-auto mt-10'>
      <form onSubmit={handleSubmit}>
        <input placeholder='Enter Title' className='border p-3 w-full mb-4' type="text" value={title} onChange={(e)=>setTitle(e.target.value)} />
        <textarea placeholder='Write your note...' className='border p-3 w-full mb-4' rows="6" value={content} onChange={(e)=>setContent(e.target.value)}></textarea>
        <button className='bg-blue-600 text-white px-5 py-3 rounded'>UPDATE NOTE</button>
      </form>
    </div>
  )
}

export default EditNote
