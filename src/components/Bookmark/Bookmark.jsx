import React from 'react'

const Bookmark = ({ bookmark }) => {
  return (
    <div className="bg-gray-100 p-4 rounded-lg m-4">
      <h1 className='text-xl font-semibold'>{bookmark.title}</h1>
    </div>
  )
}

export default Bookmark