import './contact.css';


function Contact() {
    return (
      <>
       {/* <!--contact --> */}
      <div id="contact" class="contact" style={{width: "100%"}}>
         <div class="container">
            <div class="row">
               <div class="col-md-12">
                  <div class="titlepage">
                     <h2>Contact Us</h2>
                  </div>
               </div>
            </div>
            <div class="row">
               <div class="col-xl-4 col-lg-4 col-md-12 col-sm-12 paddimg-right">
                  <div class="row">
                     <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                       
                     </div>
                     <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                        <div class="map_section">
                           <figure><img src="./Assets/images/map.jpg" alt="map"/></figure>
                        </div>
                     </div>
                  </div>
               </div>
               <div class="col-xl-8 col-lg-8 col-md-12 col-sm-12 paddimg-left">
                  <div class="Nursery-img">
                     <figure>
                        <img src="./Assets/images/contactimg.jpg" alt="img"/>
                        <div class="text-box">
                           <h3>We All Need A Green Nursery </h3>
                        </div>
                     </figure>
                  </div>
               </div>
            </div>
         </div>
      </div>
      {/* <!-- end contact --> */}
     
      </>
        
       );
  }
  
  export default Contact;