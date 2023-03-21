import React from 'react'

const DetailMovie = ({item}) => {
  const {original_title,overview,backdrop_path,release_date,poster_path,genres} = item
  return (
    <div className=' flex-col sm:flex-row md:flex lg:flex items-center justify-center'>
       <img className=' h-[400px] rounded-sm mx-10' src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt="" />

       <div className=" text-white mx-10">
          <h1 className=' mb-10 text-2xl font-bold'>{original_title}</h1>
          <div className=" flex mb-6 gap-3">
          <p className=' text-gray-400'>{release_date}</p>
          {genres?.map(genre => <p className=' tracking-wider'> {genre.name},</p> )}
          </div>
          <h3 className=' text-slate-300'>Overview</h3> 
          <h1>{overview}</h1>
       </div>
    </div>
  )
}

export default DetailMovie
