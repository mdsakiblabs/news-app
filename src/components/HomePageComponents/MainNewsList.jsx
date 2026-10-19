import React from 'react'

const MainNewsList = ({data}) => {
    
  return (
    <div className=' flex flex-col gap-2 '>
      {data.slice(0,4).map((elem,ind)=>{
        return (
            <div key={ind} className='border border-[#e0d9d9] px-4 py-3 rounded cursor-pointer'>
                <h4 className='text-[12px] font-semibold text-red-600 '>{elem.category}</h4>
                <h2 className='text-[17px] font-semibold'>{elem.title}</h2>
            </div>
        )
      })}
    </div>
  )
}

export default MainNewsList
