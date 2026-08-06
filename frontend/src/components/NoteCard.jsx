import React from 'react'
import api from '../services/api';
import { useNavigate } from "react-router-dom";
import { useState } from 'react';

function Notecard({ note,fetchNotes }) {
  const[summary,setSummary] = useState("");
  const[improved,setImproved] = useState("");
  const[generatedTitle,setGeneratedTitle] = useState("");
  const[bulletPoints,setBulletPoints] = useState("");
  const[loading,setLoading] = useState(false);

  const navigate = useNavigate();

  const deleteNote=async()=>{
        await api.delete(
          `/notes/${note._id}`
        );
        fetchNotes();
      }

  const handleSummarize = async()=>{
    try
    {
      setLoading(true);
      const response = await api.post('/ai/summarize',{
        content: note.content
      });
      setSummary(response.data.summary);
    }
    catch(err)
    {
      console.log(err);
    }
    finally
    {
      setLoading(false);
    }
  };

  const handleImprove = async()=>{
    try{
      setLoading(true);
      const response = await api.post("/ai/improve",{
        content:note.content
      });
      setImproved(response.data.corrected);
    }
    catch(err)
    {
      console.log(err);
    }
    finally
    {
      setLoading(false);
    }
  };

  const handleGenerateTitle = async()=>{
    try{
      setLoading(true);
      const response = await api.post("/ai/title",{
        content:note.content
      });
      setGeneratedTitle(response.data.title);
    }
    catch(err)
    {
      console.log(err);
    }
    finally
    {
      setLoading(false);
    }
  };

  const handleBullets = async()=>{
    try{
      setLoading(true);
      const response = await api.post("/ai/bullets",{
        content:note.content
      });
      setBulletPoints(response.data.bulletPoints);
    }
    catch(err)
    {
      console.log(err);
    }
    finally
    {
      setLoading(false);
    }
  };

  return (
    <div className='bg-white shadow rounded-lg p-5'>
      <h2 className='text-xl font-bold'>{note.title}</h2>
      <p className='mt-3 text-gray-700'>{note.content}</p>
      <div className='flex flex-wrap gap-3 mt-5'>
        <button onClick={()=>navigate(`/edit/${note._id}`)} className='bg-green-600 text-white px-4 py-2 rounded'>EDIT</button>
        <button onClick={deleteNote} className='bg-red-600 text-white px-4 py-2 rounded'>DELETE</button>
        <button onClick={handleSummarize} className='bg-purple-600 text-white px-4 py-2 rounded'>SUMMARIZE</button>
        <button onClick={handleImprove} className='bg-purple-600 text-white px-4 py-2 rounded'>GRAMMER</button>
        <button onClick={handleGenerateTitle} className='bg-yellow-500 text-white px-3 py-2 rounded'>GENERATE TITLE</button>
        <button onClick={handleBullets} className='bg-yellow-500 text-white px-3 py-2 rounded'>BULLET POINTS</button>
      </div>
      {loading && (
          <p className='mt-4 text-blue-600'>Loading...</p>
        )}

        {summary && (
          <div className='mt-4 p-3 bg-gray-100 rounded'>
            <h3 className='font-bold'>AI SUMMARY</h3>
            <p>{summary}</p>
          </div>
        )}

        {improved && (
          <div className='mt-4'>
            <h3 className='font-bold'>Improved Version</h3>
            <p>{improved}</p>
          </div>
        )}

        {generatedTitle && (
          <div className='mt-4'>
            <h3 className='font-bold'>Suggested Title</h3>
            <p>{generatedTitle}</p>
          </div>
        )}

        {bulletPoints && (
          <div className='mt-4'>
            <h3 className='font-bold'>Bullet Points</h3>
            <pre className='whitespace-pre-wrap'>{bulletPoints}</pre>
          </div>
        )}
    </div>
  )
}

export default Notecard
