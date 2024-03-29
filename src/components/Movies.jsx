import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom'

const Movies = ({movie}) => {
    const {title,backdrop_path} = movie;
  return (
    <Link to={`/movie/${movie.id}`}>
    <motion.div
    layout
    animate={{opacity : 1}} 
    initial={{opacity : 0}} 
    exit={{opacity : 1}}
    transition={{duration:0.5}}
    className=' mx-auto ml-6 mt-3 relative movie-card cursor-pointer'>
        <div className=" movie-border hidden transiton transition-all duration-300">
          <div className=" absolute w-28 border border-white border-r-0 border-b-0 border-t-2 border-l-2 h-10 top-[-15px] left-[-15px]"></div>
          <div className=" absolute w-28 border border-white border-t-0 border-l-0 border-b-2 border-r-2 h-10 bottom-[30px] right-[-15px]"></div>
        </div>
        <div className="">
            <img className='w-[350px]' src={'https://image.tmdb.org/t/p/w500'+backdrop_path} alt="" />
            <h1 className=' text-white mt-4 font-bold text-2xl'>{title.substring(0,20)}...</h1>
        </div>
    </motion.div>
    </Link>
  )
}

// https://api.themoviedb.org/3/movie/631842?api_key=efb25948ee1a984eb678b7691037a48a&language=en-US

export default Movies
