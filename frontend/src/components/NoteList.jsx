import React from 'react'
import Notecard from './Notecard'
import api from '../services/api'

function NoteList({notes,fetchNotes}) {
  return (
    <div className='grid md:grid-cols-2 gap-5 mt-6'>
      {notes.map((note)=>(
        <Notecard key={note._id} note={note} fetchNotes={fetchNotes}/>
      ))}
    </div>
  )
}

export default NoteList
