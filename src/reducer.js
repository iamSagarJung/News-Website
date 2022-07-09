
const reducer = (state, action) => {
  switch (action.type) {
    case "SET_LOADING":
      return {
        ...state,
        isLoading: true,
      };

    case "GET_STORIES":
      return {
        ...state,
        isLoading: false,
        hits: action.payload.hits,
        nbPages: action.payload.nbPages,
      };

    case "REMOVE_POST":
      return {
        ...state,
        hits: state.hits.filter(
          (curElem) => curElem.objectID !== action.payload
        ),
      };

    case "SEARCH_NEWS":
      return {
        ...state,
        query: action.payload,
      };

      case "PREV_PAGE":
        let pageNext=state.page-1
       if(pageNext<=0){
          pageNext=0
        }
        return{
          ...state,
          page:pageNext
        };

        case "NEXT_PAGE":
          let pageNum=state.page+1;
          if(pageNum>=state.nbPages){
            pageNum=0
          }
          return{
            ...state,
            page:pageNum
            
          }
  }

  return state;
};

export default reducer;