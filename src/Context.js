import React, { createContext, useContext, useReducer, useState ,useEffect} from 'react'
import reducer from './reducer'



export const AppContext=createContext()

 
let API=`http://hn.algolia.com/api/v1/search?`


const initialState={
    isLoading:true,
    query:"",
    nbPages:0,
    page:48,
    hits:[],
}

export const AppProvider = ({children}) => {


    const [state,dispatch]=useReducer(reducer,initialState)

    const  fetchedData= async (url)=>{

      dispatch({type:"LOADING"});

        const response =await fetch(url)
        const  data = await response.json()
        dispatch({
          type:"GET_STORIES",
          payload:{
            hits:data.hits,
            nbPages:data.nbPages,
          }
        })
 }

//  to remove post
const removeNews=(id)=>{
  dispatch({
    type:"REMOVE_POST",payload:id})
}

// search button

const searchNews=(searchNews)=>{
  dispatch({
    type:"SEARCH_NEWS",
    payload:searchNews
  })
}


//change page
const prevPage=()=>{
  dispatch({
          type:"PREV_PAGE",
  })
}

const nextPage=()=>{
  dispatch({
          type:"NEXT_PAGE",

  })
}

 useEffect(() => {
   fetchedData(`${API}query=${state.query}&page=${state.page}`)
   return () => {
   }
 }, [state.query,state.page])


  return (
    <AppContext.Provider value={{...state,removeNews,searchNews,prevPage,nextPage}}>
        {children}
    </AppContext.Provider>
  )
}

// custom hook

export const useGlobalContext=()=>{
  return  useContext(AppContext)
}

