import React from 'react'
import "./App.css"
import Filtered from './components/Filtered'
import Movies from './components/Movies'
import { useStateContext } from './context/StateContext';
import { motion } from 'framer-motion';

const App = () => {
  const {state:{movies}} = useStateContext();
  return (
    <div className=''>
      <Filtered />
      <motion.div layout className=" flex flex-wrap gap-2 mt-10">
         {movies.map(movie => <Movies key={movie.id} movie={movie} /> )}
      </motion.div>
    </div>
  )
}

export default App