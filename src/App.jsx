import React from 'react'
import "./App.css"
import Filtered from './components/Filtered'
import Movies from './components/Movies'
import { useStateContext } from './context/StateContext';
import { motion } from 'framer-motion';
import {BiCameraMovie} from 'react-icons/bi'

const App = () => {
  const {state:{movies}} = useStateContext();
  return (
    <div className=''>

      <div className=" text-white font-simibold text-3xl flex items-center justify-center gap-5 p-2 w-72 rounded shadow-lg shadow-cyan-500 border border-white my-10">
        <h1 className=''>
         AKW-movie-App
        </h1>
        <BiCameraMovie className=''/>
      </div>


      <Filtered />
      <motion.div layout className=" flex flex-wrap gap-2 mt-10">
         {movies.map(movie => <Movies key={movie.id} movie={movie} /> )}
      </motion.div>
    </div>
  )
}

export default App ;
// https://api.themoviedb.org/3/search/multi?api_key=efb25948ee1a984eb678b7691037a48a&language=en-US&page=1&include_adult=false
