import React from 'react'
import { useGlobalContext } from './Context'
import "./Search.css"

const Search = () => {
  const {query,searchNews}=useGlobalContext()
  return (
    <form className='search-container' onSubmit={(e)=>e.preventDefault()}>
      <h1>Tech News On The GO</h1>
      <input type="text" placeholder='search here' value={query} onChange={(e)=>searchNews(e.target.value)}></input>
    </form>
  )
}

export default Search