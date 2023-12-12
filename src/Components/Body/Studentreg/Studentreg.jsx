// import React from 'react'
// import React, { useEffect, useState } from 'react'
// import './Studentreg.css'
// import { Link } from 'react-router-dom'
// import axios from 'axios';
import React, { useEffect, useState } from 'react'
import './Studentreg.css'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { addstudent } from '../../../../controller'


const Studentreg = () => {

  // const [username, setUsername] = useState("");
  // useEffect(() => {
  //   const storedUsername = localStorage.getItem("username");
  //   if (storedUsername) {
  //     setUsername(JSON.parse(storedUsername));
  //   }
  // }, []);

  let Photo="";
  const [val,setVal]=useState({
   
    studentid:"",
    fullname:"",
    username:"",
    password:"",
    course:"",
    batch:"",
    semester:"",
    dob:"",
    bloodgroup:"",
    intphy:"",
    intche:"",
    intmath:"",
    physics:"",
    chemistry:"",
    maths:"",
    attendance:"",
    photo:""
  })
  function convertToBase64(file) {
    return new Promise((resolve, reject) => {
        const fileReader = new FileReader();
        fileReader.readAsDataURL(file);
  
        fileReader.onload = () => {
            resolve(fileReader.result)
        }
        fileReader.onerror = (error) => {
            reject(error)
        }
    })
  }

  const Upload=async(e)=>{
    e.preventDefault()
  
    Photo=await convertToBase64(e.target.files[0])
    console.log(Photo);
  }

 

  
  
    const Getdata=(e)=>{ 
      console.log(e.target.value);
      setVal((pre)=>({...pre,[e.target.name]:e.target.value}))
      // console.log(val);
    }
  
    const addstudent=async(e)=>{
      e.preventDefault()
     try {
      console.log(val);
      const res=await axios.post("http://localhost:3041/college/addstudent",{...val,photo:Photo})
      console.log(res.data);
      if(res.status!==404){
        alert("Seccussfully registerd")
       }
     } catch (error) {
      alert("error",error)
     }
    }
      
   
  

  return (
    <div>
      
       <div className="studentreg-main">
        <div className="studentreg-card">
            <div className="student-reg-card-heading"><h4>Student Register</h4></div>
          <form action="" className='student-reg-form'> 
          <div className="id-name">
          <div>
            <input type="text" name='studentid' placeholder='Student ID'/>
          <input type="text"name='fullname' onChange={Getdata} placeholder='Full Name' />
          </div>
          <div><input type="text" name='username'  placeholder='Username'/>
          <input type="text" name='password' onChange={Getdata}  placeholder='password' /></div>
          
          </div>
           <div className="batch-sem-course">
           <div> <select name="course"  id="" onChange={Getdata} >
            <option value="">Select Course</option>
            <option value="">Computer Science</option>
            <option value="">BCA</option>
            <option value="">BBA</option>
            <option value="">BA English</option>
            <option value=""> B.COM</option>
           </select>
            <input type="text" name='batch' placeholder='Batch'onChange={Getdata}  />
            <input type="text" name='semester' placeholder='Semester' onChange={Getdata} />
           </div>
          
           </div>
            <div className="dob-blood">
            <div><input type="date" name='dob' placeholder='DOB' onChange={Getdata} />
            <input type="text" name='bloodgroup' placeholder='Blood Group' onChange={Getdata} /></div>
           
            <div className="internal">
              <label htmlFor="">Internal Mark</label>
              <input type="text" name='intphy' placeholder='Physics' onChange={Getdata} />
              <input type="text"name='intche' placeholder='Chemisry'onChange={Getdata} />
              <input type="text"name='intmath' placeholder='Maths' onChange={Getdata} />
            </div>
            <div className="exam-score">
              <label htmlFor="">Exam Score :</label>
              <input type="text" name='physics' placeholder='Physics' onChange={Getdata} />
              <input type="text" name='chemistry' placeholder='Chemisry' onChange={Getdata} />
              <input type="text" name='maths' placeholder='Maths' onChange={Getdata} />
            </div>
            </div>
           <div className="photo-attentance">
            <input type="text"name='attendance' placeholder='Attendance'onChange={Getdata}  />
           <input type="file" name='photo' onChange={Upload}/>
           </div>
           <div className="button" onClick={addstudent}> <button>Register</button></div>
            </form>
       
            <div  className='admn-reg-ihave-ac'><Link to='/studentlogin'>I have an account</Link></div>
        </div>
      </div>
    </div>
  )
}

export default Studentreg
