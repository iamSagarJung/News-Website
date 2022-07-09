import React, { useState } from 'react'
import { useGlobalContext } from './Context'

const Page = () => {
  const {nbPages,prevPage,page,nextPage}=useGlobalContext()
  return (
    <div className='pagination-container'>
      <button className='btn prev' onClick={prevPage}>PREV</button>
      <p><span>{page+1}</span> of <span>{nbPages}</span></p>
      <button className='btn next'onClick={nextPage}>NEXT</button>
    </div>
  )
}

export default Page