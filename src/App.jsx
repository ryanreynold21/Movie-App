import React from 'react'
import "./App.css"

import {BiCameraMovie} from 'react-icons/bi'
import Home from './pages/Home'
import { Link, Route, Routes } from 'react-router-dom'
import Detail from './pages/Detail'

const App = () => {
  return (
    <div className=''>
      <Link to={'/'}>
        <div className=" text-white font-simibold text-3xl flex items-center justify-center gap-5 p-2 w-72 rounded shadow-lg shadow-cyan-500 border border-white my-10 mx-auto sm:mx-auto md:mx-auto lg:mx-auto">
          <h1 className=' '>
          AKW-movie-App
          </h1>
          <BiCameraMovie className=''/>
        </div>
      </Link>
      <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='/movie/:id' element={ <Detail /> } />
      </Routes>
    </div>
  )
}

export default App ;
