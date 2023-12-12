import React from 'react'
import { useLocation } from 'react-router-dom';
import './staffhome.css'

const Staffhome = () => {
  const location=useLocation()
  const username = location.state && location.state.username;
  return (
    <div>
     {/* <div className="staffhome-heading"><h5>Staff : {username}</h5></div> */}
     <h1 className='mypara'>helloooooooooo</h1>

    </div>
  )
}

export default Staffhome
