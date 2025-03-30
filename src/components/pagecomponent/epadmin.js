import React, { useState,useEffect, use } from "react";
import axios from "axios";


function Epadmin() {
     const [name, setName] = useState("");
      const [email, setEmail] = useState("");
      const [mobile, setMobile] = useState("");
      const [address, setAddress] = useState("");
      const [city, setCity] = useState("");
      const [gender, setGender] = useState("");
      const [male,setM]=useState("");
      const [female,setF]=useState("");
      const [output, setOutput] = useState("");

      useEffect(()=>{

        axios.get
        ("http://localhost:5000/user/fetch?email="+localStorage.getItem('email'))
        .then
        ((response)=>
            {
            var userss=response.data[0];
            setName(userss.name)
            setEmail(userss.email)
            setMobile(userss.mobile)
            setAddress(userss.address)
            setCity(userss.city)
            if(userss.gender=='male'){
                setM("checked")
            }
            else{
                setF("checked")
            }
        })
      },[]);

      //validation 
      const validation=(()=>{
        if (!name || !email || !mobile || !address || !city || !gender) {
            setOutput("All fields are required!");
            return false;
          }
          if(name.trim().length==0){
            setOutput("Invalid name please enter a valid name!");
            return false;
          }
          if(isNaN(mobile)||mobile.length !==10){
            setOutput("Invalid Mobile Number !!");
            return false;
          }
          return true;
      })

      //updation 
      const handleSubmit = () => {
        if(!validation())return;
        let updateDetail = {
          condition_obj: { email: localStorage.getItem("email") },
          content_obj: { name, mobile, address, city, gender },
        };
    
        axios
          .patch("http://localhost:5000/user/update", updateDetail)
          .then((res) => setOutput("Profile updated successfully!"))
          .catch((err) => setOutput("Error updating profile!"));
      };

  return (
    <div>
        <center>
      <h1>Edit profile here!!!</h1>
      <font style={{ color: "blue" }}>{output}</font>
      
      <form  style={{width:"50%",height:"100%",border:"2px solid green",borderRadius:"10px",boxShadow:"2px 5px 2px 2px grey",backgroundColor:"teal"}}>
  <div className="form-group" >
          <label htmlFor="exampleInputName" style={{ color: "black" }}>
            Name:
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputName"
            placeholder="Enter Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="exampleInputEmail1" style={{ color: "black" }}>
            Email:
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <small className="form-text text-muted" style={{ color: "red" }}>
            We'll never share your email with anyone else.
          </small>
        </div>

       

        <div className="form-group">
          <label htmlFor="exampleInputMobile" style={{ color: "black" }}>
            Mobile:
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputMobile"
            placeholder="Enter Mobile"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="Address" style={{ color: "black" }}>
            Address:
          </label>
          <textarea
            rows={10}
            cols={20}
            className="form-control"
            placeholder="Enter your Address!"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="citySelection" style={{ color: "black" }}>
            Select City:
          </label>
          <br />
          <select value={city} onChange={(e) => setCity(e.target.value)}>
            <option value="">Select City</option>
            <option value="Indore">Indore</option>
            <option value="Bhopal">Bhopal</option>
            <option value="Dewas">Dewas</option>
            <option value="Jabalpur">Jabalpur</option>
            <option value="Ujjain">Ujjain</option>
          </select>
        </div>

        <div className="form-group">
          <label style={{color:"black"}}>Gender:</label> <br />
          <input  style={{color:"black"}}
           type="radio" 
           name="gender" 
           value="male" 
           checked={gender === "male"} 
           onChange={() => setGender("male")} /> Male &nbsp;
          <input  style={{color:"black"}}
           type="radio" 
           name="gender" 
           value="female" 
           checked={gender === "female"} 
           onChange={() => setGender("female")} /> Female
        </div>

        <br />
        <button type="button" className="btn btn-primary" onClick={handleSubmit}>
          Edit Profile 
        </button>
      </form>
</center>
    </div>
  )
}

export default Epadmin;
