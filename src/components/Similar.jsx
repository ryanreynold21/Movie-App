import React from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom'

const Similar = ({movie}) => {
    const {title,backdrop_path,poster_path} = movie;
    const navigate = useNavigate();
    const goDetail = (e) => {
        e.stopPropagation();
        navigate(`/movie/${movie.id}`)
    }
  return (
   
        <motion.div className=' cursor-pointer mx-5 flex flex-col justify-center items-center'>
            {backdrop_path && <img  className=' pointer-events-none h-[300px] rounded-sm mx-20 object-cover' src={`https://image.tmdb.org/t/p/w500/${backdrop_path}`} alt="" />  }
            {backdrop_path && <h1 onClick={goDetail} className=' text-white mt-5'>{title.substring(0,20)}...</h1> } 
        </motion.div>

  )
}

export default Similar
