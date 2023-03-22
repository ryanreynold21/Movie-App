import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router-dom'
import DetailMovie from '../components/DetailMovie'
import Similar from '../components/Similar';
import { motion } from 'framer-motion';

const Detail = () => {
  const {id} = useParams();
  const [detail,setDetail] = useState([]);
  const [similarMovies,setSimilarMovie] = useState([]);
  const [width,setWidth] = useState(1200);

  const getMovieDetail = async () => {
    const {data} = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=efb25948ee1a984eb678b7691037a48a&language=en-US`)
    const similar =await axios.get(`https://api.themoviedb.org/3/movie/${id}/similar?api_key=efb25948ee1a984eb678b7691037a48a&language=en-US&page=1`)
   setDetail([data]);
   setSimilarMovie(similar.data.results)
  }

  console.log(detail)
  useEffect(() => {
    getMovieDetail();    
  },[id])
  return (
    <div>
      {detail?.map(item => <DetailMovie key={item.id} item={item}  /> )}
        <div className=" w-[1200px] overflow-hidden">
          <motion.div
          dragConstraints={{right:0,left:-3300}}
          drag='x'
           className=" mx-10 my-20 flex justify-between items-center">
              {similarMovies?.map(movie => <Similar key={movie.id} movie={movie} /> )}
          </motion.div>
        </div>
    </div>
  )
}

export default Detail
