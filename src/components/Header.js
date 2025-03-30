import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import { useState,useEffect } from 'react';
import Auth from './pagecomponent/auth';
function Header() {

   const [Header,setHeaderContent]=useState([]) ;

   useEffect(()=>{
      setInterval(()=>{
      if(localStorage.getItem('role')=='admin'){
         setHeaderContent(
            <>
      
     <div id='header'>
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
                                    <li><Link to="/admin">AdminHome</Link></li>
                                 <li><Link to="/manageuser">ManageUser</Link></li>
                                      <li><Link to="/epadmin">EditProfile</Link></li>
                                     <li><Link to="/cpadmin">Change Password</Link></li>
                                    <li><Link to="/addcat">Add Cat.</Link></li>
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
         <section >
            <div id="main_slider" class="carousel slide banner-main" data-ride="carousel">
               <ol class="carousel-indicators">
                  <li data-target="#main_slider" data-slide-to="0" class="active"></li>
                  <li data-target="#main_slider" data-slide-to="1"></li>
                  <li data-target="#main_slider" data-slide-to="2"></li>
               </ol>
               <div class="carousel-inner">
                  <div class="carousel-item active">
                     <div class="container">
                        <div class="row marginii">
                           <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                              <div class="carousel-caption ">
                                 <h1>Welcome To The <strong class="color">Admin Page!!</strong></h1>
                                 <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using</p>
                                 <a class="btn btn-lg btn-primary" href="/manageuser" role="button">Management</a>
                                 <a class="btn btn-lg btn-primary" href="/logout" role="button">See Ya</a> 
                              </div>
                           </div>
                           <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                              <div class="img-box">
                                 <figure><img src="Assets/images/imaGE.png" alt="img" /></figure>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                {/* <div class="carousel-item">
                     <div class="container">
                        <div class="row marginii">
                           <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                              <div class="carousel-caption ">
                                 <h1>Welcome To The <strong class="color">Indoor Plants </strong></h1>
                                 <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using</p>
                                 <a class="btn btn-lg btn-primary" href="#" role="button">About</a>
                                 <a class="btn btn-lg btn-primary" href="#" role="button">Contact US</a>
                              </div>
                           </div>
                           <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                              <div class="img-box ">
                                 <figure><img src="./Assets/images/imagep.png" alt="img" /></figure>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>  */}
                   {/* <div class="carousel-item">
                     <div class="container">
                        <div class="row marginii">
                           <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                              <div class="carousel-caption ">
                                 <h1>Welcome To The <strong class="color"> Plants</strong></h1>
                                 <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using</p>
                                 <a class="btn btn-lg btn-primary" role="button">About</a>
                                 <a class="btn btn-lg btn-primary" role="button">Contact US</a>
                              </div>
                           </div>
                         
                           <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                              <div class="img-box">
                                 <figure><img src="./Assets/images/3d-illustration-palm-trees-houseplant-white-background_180922-441-modified.png" alt="img" /></figure>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>  */}
               </div>
               <a class="carousel-control-prev" href="#main_slider" role="button" data-slide="prev">
                  <i class='fa fa-angle-left'></i></a>
               <a class="carousel-control-next" href="#main_slider" role="button" data-slide="next">
                  <i class='fa fa-angle-right'></i>
               </a>
            </div>
         </section>
      </div>
      </>
         );

      }else if(localStorage.getItem('role')==='user'){
         setHeaderContent(
         <>
         <div id='header'>
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
                                                 <li><Link to="/cpuser">Change Password</Link></li> 
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
         
         <section >
            <div id="main_slider" class="carousel slide banner-main" data-ride="carousel">
               <ol class="carousel-indicators">
                  <li data-target="#main_slider" data-slide-to="0" class="active"></li>
                  <li data-target="#main_slider" data-slide-to="1"></li>
                  <li data-target="#main_slider" data-slide-to="2"></li>
               </ol>
               <div class="carousel-inner">
                  <div class="carousel-item active">
                     <div class="container">
                        <div class="row marginii">
                           <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                              <div class="carousel-caption ">
                                 <h1>Welcome To The <strong class="color">User Page!!</strong></h1>
                                 <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using</p>
                                 <a class="btn btn-lg btn-primary" href="#" role="button">About</a>
                                 <a class="btn btn-lg btn-primary" href="#" role="button">Contact US</a> 
                              </div>
                           </div>
                           <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                              <div class="img-box">
                                 <figure><img src="Assets/images/imaGE.png" alt="img" /></figure>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                <div class="carousel-item">
                     <div class="container">
                        <div class="row marginii">
                           <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                              <div class="carousel-caption ">
                                 <h1>Welcome To The <strong class="color">Indoor Plants </strong></h1>
                                 <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using</p>
                                 <a class="btn btn-lg btn-primary" href="#" role="button">About</a>
                                 <a class="btn btn-lg btn-primary" href="#" role="button">Contact US</a>
                              </div>
                           </div>
                           <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                              <div class="img-box ">
                                 <figure><img src="./Assets/images/imagep.png" alt="img" /></figure>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div class="carousel-item">
                     <div class="container">
                        <div class="row marginii">
                           <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                              <div class="carousel-caption ">
                                 <h1>Welcome To The <strong class="color"> Plants</strong></h1>
                                 <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using</p>
                                 <a class="btn btn-lg btn-primary" role="button">About</a>
                                 <a class="btn btn-lg btn-primary" role="button">Contact US</a>
                              </div>
                           </div>
                         
                           <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                              <div class="img-box">
                                 <figure><img src="./Assets/images/3d-illustration-palm-trees-houseplant-white-background_180922-441-modified.png" alt="img" /></figure>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <a class="carousel-control-prev" href="#main_slider" role="button" data-slide="prev">
                  <i class='fa fa-angle-left'></i></a>
               <a class="carousel-control-next" href="#main_slider" role="button" data-slide="next">
                  <i class='fa fa-angle-right'></i>
               </a>
            </div>
         </section>
      </div>
      </>
         )
      }
      else
      {
         setHeaderContent(
            <div id='header'>
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
                                    <li><Link to="/">Home</Link></li>
                                    <li><Link to="/about">About</Link></li>
                                    <li><Link to="/plant">Plant</Link></li>
                                    <li><Link to="/gallery">Gallery</Link></li>
                                    <li><Link to="/contact">Contact Us</Link></li>
                                    <li><Link to="/login">Login</Link></li>
                                    <li><Link to="/register">Register</Link></li>
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
         <section >
            <div id="main_slider" class="carousel slide banner-main" data-ride="carousel">
               <ol class="carousel-indicators">
                  <li data-target="#main_slider" data-slide-to="0" class="active"></li>
                  <li data-target="#main_slider" data-slide-to="1"></li>
                  <li data-target="#main_slider" data-slide-to="2"></li>
               </ol>
               <div class="carousel-inner">
                  <div class="carousel-item active">
                     <div class="container">
                        <div class="row marginii">
                           <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                              <div class="carousel-caption ">
                                 <h1>Welcome To The <strong class="color">Nutrients Plants</strong></h1>
                                 <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using</p>
                                 <a class="btn btn-lg btn-primary" href="#" role="button">About</a>
                                 <a class="btn btn-lg btn-primary" href="#" role="button">Contact US</a>
                              </div>
                           </div>
                           <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                              <div class="img-box">
                                 <figure><img src="Assets/images/imaGE.png" alt="img" /></figure>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div class="carousel-item">
                     <div class="container">
                        <div class="row marginii">
                           <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                              <div class="carousel-caption ">
                                 <h1>Welcome To The <strong class="color">Indoor Plants </strong></h1>
                                 <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using</p>
                                 <a class="btn btn-lg btn-primary" href="#" role="button">About</a>
                                 <a class="btn btn-lg btn-primary" href="#" role="button">Contact US</a>
                              </div>
                           </div>
                           <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                              <div class="img-box ">
                                 <figure><img src="./Assets/images/imagep.png" alt="img" /></figure>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div class="carousel-item">
                     <div class="container">
                        <div class="row marginii">
                           <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                              <div class="carousel-caption ">
                                 <h1>Welcome To The <strong class="color"> Plants</strong></h1>
                                 <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using</p>
                                 <a class="btn btn-lg btn-primary" role="button">About</a>
                                 <a class="btn btn-lg btn-primary" role="button">Contact US</a>
                              </div>
                           </div>
                           <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                              <div class="img-box">
                                 <figure><img src="./Assets/images/3d-illustration-palm-trees-houseplant-white-background_180922-441-modified.png" alt="img" /></figure>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <a class="carousel-control-prev" href="#main_slider" role="button" data-slide="prev">
                  <i class='fa fa-angle-left'></i></a>
               <a class="carousel-control-next" href="#main_slider" role="button" data-slide="next">
                  <i class='fa fa-angle-right'></i>
               </a>
            </div>
         </section>
      </div>
         );
      }
   },1)
   },[]);

   return (
    <>
   <Auth/>
    {Header}
    
    </>
   )

}


export default Header
