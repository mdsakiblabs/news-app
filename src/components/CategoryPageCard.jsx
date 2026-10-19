import React from 'react'
import Image from 'next/image'
const CategoryPageCard = ({data}) => {
    
  return (
    <div className="border border-[#e0d9d9] rounded overflow-hidden">
              <Image
                src={data.imageUrl}
                alt={data.imageAlt}
                width={500}
                height={500}
                className='h-50'
              />
              <div className="px-3 py-2">
                <h2 className="mt-2 font-semibold text-[14px] text-red-600">{data.category}</h2>
                <h3 className="text-xl font-bold my-2">{data.title}</h3>
                <p className="line-clamp-3 text-[14px] font-light">{data.description}</p>
              </div>
            </div>
  )
}

export default CategoryPageCard
