import React, { useState,useEffect } from 'react';
import "../assets/css/about.css"
import axios from 'axios';
function Cards(props) {
    console.log(props,"props")
   const [courseData , setcourseData] = useState([])
  useEffect(() => {
    axios.get('http://localhost:3000/api/course')
    .then(res => {
      console.log(res.data,"courses")
      setcourseData(res.data)
    })
    .catch(err => {
      console.log(err)
    })

  },[])
    return (
   <>
    <div className='card-wrapper'>
   {courseData.map((item) => 
    <div className="card">
           <img src={item.thumbnail} alt="Avatar" />
        <div className="container">
          <h3><b>{item.title}</b></h3> 
          <p>{item.description}</p> 
           <h3>Rs {item.price}</h3>
       <span> <button onClick = {() => props.onPayment(item.price)}>Try it!</button></span>
        </div>
      </div>
    )}
    
     </div>
   </>
    )
}

export default Cards;