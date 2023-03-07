import React, { useState } from 'react'
import { useStateContext } from '../context/StateContext'

const Filtered = () => {
    const {state:{movies},setGenres,genres} = useStateContext();
    return (
    <div>
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
    </div>
  )
}

export default Filtered
