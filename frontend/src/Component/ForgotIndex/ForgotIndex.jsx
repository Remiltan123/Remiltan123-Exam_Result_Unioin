import React, { useState } from 'react'
import findimage from  '../../Assets/Find.png'
import { FaSearch } from "react-icons/fa";
import './ForgotIndex.css'
import { Link } from 'react-router-dom';


export const ForgotIndex = () => {

  const [index,SetIndex]= useState();
  const [NIC,SetNIC]= useState();

  const HandleEvent = (event)=>{
       if(event.key === 'Enter'){
         FindIndex();
       }
  }

  const FindIndex = async(req,res)=>{
    try{
      const response = await fetch("http://localhost:3001/FindIndex",{
        method:"POST",
        headers:{
          'Content-Type':'application/json'
        },
        body:JSON.stringify({Nic:NIC})
      })
      const ResData = await response.json();
      
      
      if(ResData.success){
        SetIndex(ResData.data[0].IndexNumber);
        console.log(ResData )
        alert("Your Index number is " + ResData.data[0].IndexNumber)
      }else{
        alert(ResData.message)
      }
    }catch(err){
      console.error(err)
    }
 
  }
  return (
    <div className="container mt-3">
    
      <div className="row">
        
        <div className="col-md-6 d-flex flex-column justify-content-center">
          <h1 className='mb-3'>Find Your Index Number</h1>
          <p className='mb-4'>Enter your NIC Number to find your Index Number.</p>
          <input type="text" className="form-control mb-3" placeholder="NIC Number" value={NIC} onChange={(e)=>{SetNIC(e.target.value)}} onKeyDown={HandleEvent}/>
          
          <button className="btn btn-primary d-flex align-items-center justify-content-center" onClick={FindIndex} >
            <FaSearch className='me-2' />
            <span>Search</span>
          </button>

          <Link to='/ResultPage' className='mt-2'>Click Find Result</Link>
        </div>

    
        <div className="col-md-4 d-flex justify-content-center">
          <img src={ findimage } alt="Find your index" className="img-fluid" style={{ maxWidth: '90%', height: 'auto' }} />
        </div>

      </div>
    </div>
  )
}
