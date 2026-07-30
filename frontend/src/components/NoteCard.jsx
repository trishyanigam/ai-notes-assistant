import React from 'react'

function Notecard({ note }) {
  return (
    <div className='bg-white shadow rounded-lg p-5'>
      <h2 className='text-xl font-bold'>{note.title}</h2>
      <p className='mt-3 text-gray-700'>{note.content}</p>
      <div className='flex gap-3 mt-5'>
        <button className='bg-green-600 text-white px-4 py-2 rounded'>EDIT</button>
        <button className='bg-red-600 text-white px-4 py-2 rounded'>DELETE</button>
      </div>
    </div>
  )
}

export default Notecard
