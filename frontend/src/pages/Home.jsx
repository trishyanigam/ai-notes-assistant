import React from 'react';
import api from '../services/api';
import { useState,useEffect } from 'react';
import NoteForm from '../components/NoteForm'
import SearchBar from '../components/SearchBar'
import NoteList from '../components/NoteList'

function Home() {
  const[notes,setNotes] = useState([]);
  const fetchNotes = async () =>{
    try
    {
      const response = await api.get('/notes');
      setNotes(response.data.data);
    }
    catch(err)
    {
      console.log(err);
    }
  }
  useEffect(()=>{
    fetchNotes();
  },[]);
  return (
    <div className='max-w-5xl mx-auto p-6'>
        <NoteForm fetchNotes={fetchNotes}/>
        <SearchBar/>
        <NoteList notes={notes} fetchNotes={fetchNotes}/>
    </div>
  )
}

export default Home
