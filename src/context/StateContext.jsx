import axios from "axios"
import { createContext, useContext, useEffect, useReducer, useState } from "react"
import reducer from "./reducer"

const StateContext = createContext();

export const StateContextProvider = ({children}) => {
    const initialState = {
        movies:[]
    }
      const [movie,setMovie] = useState([]);
      const [genres,setGenres] = useState(0);
  const getmovie = async () => {
    const {data} =await axios.get('https://api.themoviedb.org/3/movie/popular?api_key=efb25948ee1a984eb678b7691037a48a&language=en-US&page=1')
   setMovie(data.results)
  }

  useEffect(() => {
    getmovie();
  },[])

  useEffect(() => {
    if(genres === 0){
      dispatch({type:'GET_MOVIE',payload:movie})
    }else{
      const filteredMovie = movie?.filter(movie => movie.genre_ids.includes(genres))
      dispatch({type:'GET_MOVIE',payload:filteredMovie})
    }
  },[movie,genres])

  const [state,dispatch] = useReducer(reducer,initialState)
  const data = {state,dispatch,genres,setGenres}
  return (
        <StateContext.Provider value={data}>
            {children}
        </StateContext.Provider>
    )
};

export const useStateContext = () =>  useContext(StateContext);