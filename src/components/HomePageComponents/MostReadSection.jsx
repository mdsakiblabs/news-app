import React from 'react'

const MostReadSection = ({ data }) => {
  return (
    <div className='border border-[#e0d9d9] rounded px-4 py-3 '>
      <h1 className='text-[19px] mb-2 font-semibold '>{data[0].category}</h1>

      <ol className="list-decimal marker:text-red-600 marker:text-[18px] list-inside">
        {data.map((elem) => {
          return <li 
          key={elem.id}
          className='my-4 text-[16px] font-semibold cursor-pointer hover:text-red-600'
          >
            {elem.title}
          
            </li>
        })}
      </ol>
    </div>
  )
}

export default MostReadSection