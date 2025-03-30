import './testComponent.css';
import React from 'react';
import { useState,useEffect } from 'react';

function Test(props) {

    return (
      <>
       <div id="service">
        <h1> Welcome to test Component</h1> <hr/>
        <p>a={props.A}</p>
        <p>b={props.B}</p>
       
      </div>
     
      </>
        
       );
  }
  
  export default Test;