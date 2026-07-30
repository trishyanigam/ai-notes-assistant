import React from 'react'

function NoteForm() {
  return (
    <div className='bg-white shadow-lg rounded-lg p-6 mt-6'>
      <h2 className='text-2xl font-semibold mb-5'>Add New Note</h2>
      <input type="text" placeholder='Enter Title' className='w-full border p-3 rounded-lg mb-4' />
      <textarea rows='5' placeholder='Write your note...' className='w-full border p-3 rounded-lg mb-4'/>
      <button className='bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700'>ADD NOTE</button>
    </div>
  )
}

export default NoteForm
