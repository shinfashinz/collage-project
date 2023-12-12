import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom'


const Home = () => {
  return (
    <div className='main'>
    <div className="home-main">
      <div className="home-main-left">
       <div className="clg-name">
       {/* <h1>ISS COLLEGE OF ARTS <div>& SCIENCE</div></h1> */}
        {/* <Link className='home-contctus-btn'>Contact Us</Link>
        <Link className='home-aboutus-btn'>About Us</Link> */}
       </div>
        
      </div>
      <div className="home-main-right">
        <div className="home-actype-main-card">
          {/* <h3>Account Type</h3> */}
          <div className='home-btns'><Link className="home-admin-btn" to='/adminlogin'>Admin</Link></div>
          <div className='home-btns'><Link className="home-staff-btn" to='/stafflogin'>Staff</Link></div>
          <div><Link className="home-student-btn" to='/studentreg'>Student</Link></div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Home
