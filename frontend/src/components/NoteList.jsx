import React from 'react'
import Notecard from './Notecard'

function NoteList() {
    const notes = [
        {
            id: 1,
            title: "React",
            content: "Learning hooks"
        },
        {
            id: 2,
            title: "Node",
            content: "Learning express"
        },
        {
            id: 3,
            title: "MongoDB",
            content: "Learning documents"
        },
        {
            id: 4,
            title: "API",
            content: "Learning gateways"
        }
    ]
  return (
    <div className='grid md:grid-cols-2 gap-5 mt-6'>
      {notes.map((note)=>(
        <Notecard key={note.id} note={note}/>
      ))}
    </div>
  )
}

export default NoteList
