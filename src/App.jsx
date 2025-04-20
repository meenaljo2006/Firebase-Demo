import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import Auth from './components/auth'

function App() {

  return (
    <>
      <div className='App'>
        <h1>Firebase Course</h1>
      </div>
      <div className="credentials">
        <Auth/>
      </div>


      
    </>
  )
}

export default App
