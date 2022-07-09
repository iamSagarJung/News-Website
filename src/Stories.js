import React from 'react'
import { useGlobalContext } from './Context'
import "./loading.css"



const Stories = () => {

    const {hits,isLoading,removeNews}=useGlobalContext()
    
     if(isLoading){
        return <div className='body'> 
        <div id="loading"></div>
        </div>
    }
     
  return (
    <>
    {hits.map((item)=>{
          const {title,author,objectID,url,num_comments}=item

      return(
        <div className='news-container' key={objectID}>
        <h1>{title}</h1>
        <p className='news-details'>By <span className='author'>{author}</span> |<span className='author'> {item.num_comments} </span>comments</p>
        <div className='btns'>
          <a href={url} target="_blank"className='btn readmore'>Read More</a>
          <button className='btn remove' onClick={()=>removeNews(objectID)}>Remove</button>
        </div>
        </div>
      )
    })}
    </>
  )
  }

export default Stories