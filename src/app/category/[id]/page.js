import CategoryPageCard from '@/components/CategoryPageCard'
import React from 'react'

const page =async ({params}) => {
    let {id} = await params
    
    
    const res = await fetch(`https://news-api-v2.vercel.app/api/category/${id}`)
    const data = await res.json()
    const catagoryData = data.data
    
  return (
    <div className='grid grid-cols-3 gap-5 max-w-270 mx-auto my-10'>
      {catagoryData.map((elem,ind)=>{
        return <CategoryPageCard data={elem} key={ind}/>
      })}
    </div>
  )
}

export default page
