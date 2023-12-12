import React, { useEffect, useState } from 'react'
import './Adminhome.css'
import { Link } from 'react-router-dom'
// import { Link } from 'react-router-dom'


const Adminhome = () => {
    // const location=useLocation()
    // const username = location.state && location.state.username;
    const [username, setUsername] = useState("");

    useEffect(() => {
      const storedUsername = localStorage.getItem("username");
      if (storedUsername) {
        setUsername(JSON.parse(storedUsername));
      }
    }, []);
  
  return (
    <div>
      <div className="adminhome-main">
        <div className="admin-view-text">
        <h5>Admin : {username}</h5>
        </div>
        <div className="admin-home-details">
          <div className="admin-home-details-left">
            <div className="view-full-staffs">
              <Link className='view-all-staff-btn' to='/allstafflist'>View All Staffs  <i className="fa fa-angle-right" aria-hidden="true"></i></Link>
              <div className="adminhome-reg-staff-btn">
              <Link to='/staffreg' className='adminhome-reg-staff-button'>Register new staff</Link>
              </div>
            </div>
          </div>
          <div className="admin-home-details-right">
          <div className="view-full-students">
          <Link className='view-all-staff-btn' to='/'>View Students <i className="fa fa-angle-right" aria-hidden="true"></i></Link>
              <div className="adminhome-reg-staff-btn">
              <Link to='/Studentview' className='adminhome-reg-staff-button'>Click Here</Link>
              </div>
          </div>
          </div>
        </div>
        {/* <Link to='/staffreg'>Register staff</Link> */}
      </div>
    </div>
  )
}

export default Adminhome
