import React from 'react'
import NoteForm from '../components/NoteForm'
import SearchBar from '../components/SearchBar'
import NoteList from '../components/NoteList'

function Home() {
  return (
    <div className='max-w-5xl mx-auto p-6'>
        <NoteForm/>
        <SearchBar/>
        <NoteList/>
    </div>
  )
}

export default Home
