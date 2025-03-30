import React from 'react'
import { Link } from 'react-router-dom'

function Banner() {
  return (
    <div>
       <header>
            {/* <!-- header inner --> */}
            <div class="header">
               <div class="container">
                  <div class="row">
                     <div class="col-xl-3 col-lg-3 col-md-3 col-sm-3 col logo_section">
                        <div class="full">
                           <div class="center-desk">
                              <div class="logo"> <a href="index.html"><img src="Assets/images/1j+ojlxEOMkX9Wyqfhe43D6kh...png" alt="#" /></a> </div>
                           </div>
                        </div>
                     </div>
                     <div class="col-xl-9 col-lg-9 col-md-9 col-sm-9">
                        <div class="menu-area">
                           <div class="limit-box">
                              <nav class="main-menu">
                                 
                                 <ul class="menu-area-main">
                                    <li><Link to="/">UserHome</Link></li>
                                    <li><Link to="/about">About</Link></li>
                                    <li><Link to="/plantproduct">PlantProduct</Link></li>
                                    <li><Link to="/gallery">Gallery</Link></li>
                                    {/* <li><Link to="/contact">Contact Us</Link></li> */}
                                    <li><Link to="/epUser">EditProfile</Link></li>
                                    <li><Link to="/logout">logout</Link></li>
                                   {/* <li><Link to="/register">Register</Link></li> */}
                                 </ul>
                              </nav>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            {/* <!-- end header inner --> */}
         </header>
    </div>
  )
}

export default Banner
