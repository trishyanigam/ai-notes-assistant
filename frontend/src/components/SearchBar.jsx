import React from 'react'

function SearchBar({search,setSearch}) {
  return (
    <input type="text" placeholder='Search Notes...' value={search} onChange={(e)=>setSearch(e.target.value)} className='w-full border rounded-lg p-3 mt-6'/>
  )
}

export default SearchBar
