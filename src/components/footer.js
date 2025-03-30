import './footer.css';
import {Link} from 'react-router-dom';
function Footer() {
  return (
    <>
        {/* <!-- footer --> */}
      <footer>
         <div id="contact" class="footer" style={{width:"100%"}}>
            <div class="container">
               <div class="row pdn-top-30">
                  <div class="col-md-12 ">
                     <div class="footer-box">
                        <div class="headinga">
                           <h3>Address</h3>
                           <span>Indore MadhyaPradesh </span>
                           <p>(+91-7869548752)</p>
                        </div>
                        <ul class="location_icon">
                           <li> <a ><img src="./Assets/icon/facebook.png"/></a></li>
                           <li> <a ><img src="./Assets/icon/instagram.png"/></a></li>
                           <li> <a ><img src="./Assets/icon/linkedin.png"/></a></li>
                           <li> <a ><img src="./Assets/icon/Twitter.png"/></a></li>
                        </ul>
                        <div class="menu-bottom">
                           <ul class="link">
                              <li> <a href="#">Home</a></li>
                              <li> <a href="#">About</a></li>
                              <li> <a href="#"> Plant</a></li>
                              <li> <a href="#">Gallery</a></li>
                              <li> <a href="#"> Contact us</a></li>
                           </ul>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div class="copyright">
               <div class="container">
                  <p>Copyright 2025 All Rights Reserved Design By Plantry!!</p>
               </div>
            </div>
         </div>
      </footer>
      {/* <!-- end footer --> */}
    </>
      
     );
}

export default Footer;
