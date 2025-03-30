 import React from 'react'
 import { useState,useEffect } from 'react'
import axios from 'axios';
 import { __userApi } from '../apiurl'
import { useNavigate } from 'react-router-dom';
function Manageuser() {
  const navigate = useNavigate();
  const [userDetail, setUserDetail] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/user/fetch?role=user")
      .then((response) => {
        setUserDetail(response.data);
      })
      .catch((error) => {
        console.log("Error fetching users:", error);
      });
  }, []); // Added dependency array

  const changeStatus = async (_id, str) => {
    try {
      if (str === "verify" || str === "block") {
        let updateDetail = {
          condition_obj: { _id: _id },
          content_obj: { status: str === "verify" ? 1 : 0 }
        };

        await axios.patch("http://localhost:5000/user/update", updateDetail);
        

        alert(`User ${str === "verify" ? "Verified" : "Blocked"} Successfully`);


      } else if (str === "delete") {

        await axios.delete("http://localhost:5000/user/delete", {
          data: { _id: _id }
        });

        alert("User deleted successfully");
      }

      // Refresh the user list after update
      axios
        .get("http://localhost:5000/user/fetch?role=user")
        .then((response) => {
          setUserDetail(response.data);
        });

      navigate("/manageuser");
    } catch (error) {
      alert(`Couldn't ${str}`);
      console.error(error);
    }
  };

  return (
    <>
      <div>
        <center>
          <h1>Manage Users</h1>
          <h3>View and manage users</h3>
        </center>
        <table className="table table-bordered" border="2px">
          <thead>
            <tr>
              <th>Reg ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Mobile</th>
              <th>Address</th>
              <th>City</th>
              <th>Gender</th>
              <th>Info</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
            userDetail.map((row) => (
              <tr key={row._id}>
                <td>{row._id}</td>
                <td>{row.name}</td>
                <td>{row.email}</td>
                <td>{row.mobile}</td>
                <td>{row.address}</td>
                <td>{row.city}</td>
                <td>{row.gender}</td>
                <td>{row.info}</td>
                <td>
                  {row.status === 1 ? (
                    <a
                      onClick={() => changeStatus(row._id, "block")}
                      style={{ color: "red", cursor: "pointer" }}
                    >
                      Block
                    </a>
                  ) : (
                    <a
                      onClick={() => changeStatus(row._id, "verify")}
                      style={{ color: "green", cursor: "pointer" }}
                    >
                      Verify
                    </a>
                  )}
                </td>
                <td>
                  <a
                    onClick={() => changeStatus(row._id, "delete")}
                    style={{ color: "blue", cursor: "pointer" }}
                  >
                    Delete
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Manageuser;
 