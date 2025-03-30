
import React from 'react';
import { useState } from 'react';
import {__userApi} from '../apiurl'
import axios from 'axios';
import {useNavigate} from 'react-router-dom';

function Login() {
  const navigate=useNavigate();
   const [password,setPassword]=useState();
    const [email,setEmail]=useState();
    const [output,setoutput]=useState();



    const handleSubmit=()=>{
      const users={"email":email,"password":password};

      axios.post(__userApi+"login",users).then((response)=>{
       
       var userss=response.data.userdetails;
      localStorage.setItem("_id",userss._id);
       localStorage.setItem("token",response.data.token);
       
       localStorage.setItem("name",userss.name);
       localStorage.setItem("email",userss.email);
       localStorage.setItem("password",userss.password);
       localStorage.setItem("mobile",userss.mobile);
       localStorage.setItem("address",userss.address);
       localStorage.setItem("city",userss.city);
       localStorage.setItem("gender",userss.gender);
       localStorage.setItem("role",userss.role);
       localStorage.setItem("status",userss.status);
       localStorage.setItem("info",userss.info);
       

       (userss.role=="admin")?navigate("/admin"):navigate("/user");
      }).catch((error)=>{
        setoutput("Invalid User!!");
      })
    }
    return (
      <>
      <center>
       <div id="login" style={{width:"50%",height:"100%",border:"2px solid green",borderRadius:"10px",boxShadow:"2px 5px 2px 2px green"}}>
        
        <h1>Login Page!!</h1>
        
        <font style={{ color: "red" }}>{output}</font>
        <form>
        <div class="form-group">
    
    <label for="exampleInputPassword1"  style={{color:"black"}}>Email:</label>
    <input type="email" class="form-control" id="exampleInputPassword1" placeholder="Enter Email " value={email} onChange={e=>setEmail(e.target.value)}/>
    <small id="emailHelp"  style={{color:"white"}}>We'll never share your email with anyone else.</small>
  </div>
  <div class="form-group">
    
    <label for="exampleInputEmail1" style={{color:"black"}}>Password:</label>
    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Password" value={password} onChange={e=>setPassword(e.target.value)}/>
 
  </div>
  
  <button type="button" class="btn btn-primary" onClick={handleSubmit}>Login </button>
</form>
      </div>
      </center>
       </>
        
       );
  }
  
  export default Login;