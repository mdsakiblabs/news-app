import React from 'react'
import LatestHeadlineScrollLinks from '../LatestHeadlineScrollLinks'

const LatestHeadlinesScrollBar = () => {
  return (
    <div className='parent w-full bg-red-600 text-white mt-5'>
      <div className='wrapper max-w-270 mx-auto flex  justify-center items-center'>
        <span className='px-4 py-2 bg-red-900 font-semibold'>সর্বশেষ</span>
           <LatestHeadlineScrollLinks/> 
      </div>
    </div>
  )
}

export default LatestHeadlinesScrollBar
