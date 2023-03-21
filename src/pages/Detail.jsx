import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import DetailMovie from '../components/DetailMovie'
import { ApiKey } from '../context/StateContext'

const Detail = () => {
  const {id} = useParams();
  const [detail,setDetail] = useState([]);

  const getMovieDetail = async () => {
    const {data} = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=efb25948ee1a984eb678b7691037a48a&language=en-US`)
   setDetail([...detail,data]);
  }

  useEffect(() => {
    getMovieDetail();
  },[id])

  console.log(detail)
  return (
    <div>
      {detail?.map(item => <DetailMovie key={item.id} item={item}  /> )}
    </div>
  )
}

export default Detail
