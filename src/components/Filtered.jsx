import React, { useState } from 'react'
import { useStateContext } from '../context/StateContext'

const Filtered = () => {
    const {state:{movies},setGenres,genres} = useStateContext();
    return (
    <div className=''>
      <button 
        className={genres === 0 ? "active-filtered-btn" : ' filtered-btn'}
        onClick={() => setGenres(0)}
       >Popular</button>

      <button 
        className={genres === 28 ? "active-filtered-btn" : ' filtered-btn'}
        onClick={() => setGenres(28)}
       >Action</button>

      <button 
        className={genres === 35 ? "active-filtered-btn" : ' filtered-btn'}
        onClick={() => setGenres(35)}
       >Comedy</button>

       <button 
        className={genres === 12 ? "active-filtered-btn" : ' filtered-btn'}
        onClick={() => setGenres(12)}
       >Adventure</button>

        <button 
        className={genres === 16 ? "active-filtered-btn" : ' filtered-btn'}
        onClick={() => setGenres(16)}
       >Animation</button>

        <button 
        className={genres === 80 ? "active-filtered-btn" : ' filtered-btn'}
        onClick={() => setGenres(80)}
       >Crime</button>

        <button 
        className={genres === 18 ? "active-filtered-btn" : ' filtered-btn'}
        onClick={() => setGenres(18)}
       >Drama</button>

          <button 
        className={genres === 878 ? "active-filtered-btn" : ' filtered-btn'}
        onClick={() => setGenres(878)}
       >Scifi</button>

        <button 
        className={genres === 36 ? "active-filtered-btn" : ' filtered-btn'}
        onClick={() => setGenres(36)}
       >Histoty</button>
    </div>
  )
}

export default Filtered
