import './service.css';
import React from 'react';
import Test from '../testComponent';
import { useState,useEffect } from 'react';

function Service() {
  const [a,setA]=useState("Hello");
  const [b,setB]=useState(20);
    return (
      <>
       <div id="service">
        <h1>Service Page</h1>
        <hr/>

        <p>A={a}</p>
        <p>B={b}</p>
        <hr/>
        <Test A={a} B={b}/>
      </div>
     
      </>
        
       );
  }
  
  export default Service;