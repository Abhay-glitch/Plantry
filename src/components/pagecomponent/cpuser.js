import React, { useState,useEffect, use } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


function CpUser() {
    const [Opass,setOldpass]=useState("");
    const [npass,setnpass]=useState("");
    const [cnpass,setCnpass]=useState("");
    const [output,setOutput]=useState("");
    const navigate=useNavigate();


    const onhandleSubmit = async () => {
        const email = localStorage.getItem("email");
    
        if (!email) {
            setOutput("User email not found. Please log in again.");
            return;
        }
    
        if (!Opass || !npass || !cnpass) {  
            setOutput("Password fields cannot be empty.");
            return;
        }
    
        if (npass !== cnpass) {
            setOutput("Password mismatch. Please try again.");
            return;
        }
    
        try {
            
            const response = await axios.get("http://localhost:5000/user/fetch?email=" + email + "&password=" + Opass);
            if (response.data) { 
                let updateDetail = {
                    condition_obj: { email },
                    content_obj: { password: cnpass },
                };
    
                await axios.patch("http://localhost:5000/user/update", updateDetail);
                setOutput("Profile updated successfully!");
                
                alert("Password Updated Successfully!");
                // navigate("/userHome");
            } else {
                setOutput("Incorrect old password. Please try again.");
            }
        } catch (error) {
            setOutput("Error updating profile. Please try again.");
            console.error(error);
        }
    };
    
    
  return (
    <center>
    <div style={{width:"30%",height:"450px",border:"2px solid green",borderRadius:"10px",boxShadow:"2px 5px 2px 2px green"}}>
      <h1>Change Password Here!!</h1>
      <h3 style={{color:"red"}} >{output}</h3>
      <div className="form-group"  >
          <label htmlFor="exampleInputPassword" style={{ color: "black" }}>
            Old Password 
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputName"
            placeholder="Enter Old Password"
            value={Opass}
            onChange={(e) => setOldpass(e.target.value)}
           
          />
        </div>

        <div className="form-group">
          <label htmlFor="exampleInputEmail1" style={{ color: "black" }}>
           New Password 
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            placeholder="Enter New Password"
            value={npass}
            onChange={(e) => setnpass(e.target.value)}
          />
          
        </div>

        <div className="form-group">
          <label htmlFor="exampleInputPassword1" style={{ color: "black" }}>
           Confirm Password: 
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Enter Password"
            value={cnpass}
            onChange={(e) => setCnpass(e.target.value)}
          />
          
        </div>
        <button type="button" className="btn btn-primary" onClick={onhandleSubmit}
         style={{border:"2px solid gray"}}
        >
    Change Password 
   </button>
    </div>
    </center>  
  )
}

export default CpUser
