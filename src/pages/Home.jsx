import React from 'react'
import Filtered from '../components/Filtered';
import { motion } from 'framer-motion';
import { useStateContext } from '../context/StateContext'
import Movies from '../components/Movies'

const Home = () => {
      const {state:{movies}} = useStateContext();
  return (
    <div>
        <Filtered />
      <motion.div layout className=" flex flex-wrap gap-4 mt-10">
         {movies.map(movie => <Movies key={movie.id} movie={movie} /> )}
      </motion.div>
    </div>
  )
}

export default Home
