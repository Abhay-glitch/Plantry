import React, { useState } from "react";
import axios from "axios";


function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mobile, setMobile] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [gender, setGender] = useState("");
  const [output, setOutput] = useState("");
  const [errors, setErrors] = useState({});


   //validation 
   const validateForm = () => {
    let newErrors = {};
    if (!name) newErrors.name = "Name is required!";
    else if (name.length < 2) newErrors.name = "Name must be at least 2 characters!";

    if(!email) newErrors.email="Email is required!!"
    if (!mobile) newErrors.mobile = "Mobile number is required!";
    else if (isNaN(mobile) || mobile.length !== 10) newErrors.mobile = "Mobile number must be 10 digits!";

    if (!address) newErrors.address = "Address is required!";
    if (!city) newErrors.city = "City selection is required!";
    if (!gender) newErrors.gender = "Gender selection is required!";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if(!validateForm())return;
    const user = { name, email, password, mobile, address, city, gender };

    axios
      .post("http://localhost:5000/user/save", user)
      .then((response) => {
        setOutput("User registered successfully!");
        setName("");
        setEmail("");
        setPassword("");
        setMobile("");
        setCity("");
        setAddress("");
        setGender("");
      })
      .catch((error) => {
        setOutput("Something went wrong! Please try again.");
      });
  };

  return (<center>
    <div id="register">
      <form  style={{width:"50%",height:"100%",border:"2px solid green",borderRadius:"10px",boxShadow:"2px 5px 2px 2px green"}}>
        
        <h1>Register Here</h1>
       <h6> <font style={{ color: "red" }}>{output}</font></h6>
       
        <div className="form-group">
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
           {errors.name && <small style={{ color: "red" }}>{errors.name}</small>}
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
          {errors.email && <small style={{ color: "red" }}>{errors.email}</small>}
        </div>

        <div className="form-group">
          <label htmlFor="exampleInputPassword1" style={{ color: "black" }}>
            Password: 
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
           {errors.password && <small style={{ color: "red" }}>{errors.password}</small>}
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
           {errors.mobile && <small style={{ color: "red" }}>{errors.mobile}</small>}
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
           {errors.address && <small style={{ color: "red" }}>{errors.address}</small>}
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
          {errors.city && <small style={{ color: "red" }}>{errors.city}</small>}
        </div>

        <div className="form-group" style={{ color: "black" }}>
          <label htmlFor="gender">Gender:</label> <br />
          Male{" "}
          <input
            type="radio"
            name="gender"
            value="male"
            onChange={(e) => setGender(e.target.value)}
          />
          &nbsp;&nbsp;&nbsp;&nbsp;
          Female{" "}
          <input
            type="radio"
            name="gender"
            value="female"
            onChange={(e) => setGender(e.target.value)}
          />
          {errors.gender && <small style={{ color: "red" }}>{errors.gender}</small>}
        </div>

        <br />
        <button type="button" className="btn btn-primary" onClick={handleSubmit}>
          Register Here
        </button>
      </form>
    </div>
    </center>
  );
}

export default Register;
