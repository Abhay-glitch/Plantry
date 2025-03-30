import './App.css';
import { Route,Routes} from 'react-router-dom';
import React from 'react';
import Header from './components/Header';
import Gallery from './components/pagecomponent/gallery.js';
import Footer from './components/footer.js';
import About from './components/pagecomponent/about.js';
import Contact from './components/pagecomponent/contact.js';
import Plant from './components/pagecomponent/plant.js';
import Login from './components/pagecomponent/login.js'
import Register from './components/pagecomponent/register.js';
import Home from './components/pagecomponent/home.js';
import Adminhome from './components/pagecomponent/adminhome.js';
import Logout from './components/pagecomponent/logout.js';
import UserHome from './components/pagecomponent/userHome.js';
import Manageuser from './components/pagecomponent/manageuser.js';
import Plantproduct from './components/pagecomponent/plantproduct.js';
import Epadmin from './components/pagecomponent/epadmin.js';
import EpUser from './components/pagecomponent/epuser.js';
import Cpadmin from './components/pagecomponent/Cpadmin.js';
import CpUser from './components/pagecomponent/cpuser.js';
import Addcategory from './components/pagecomponent/Addcategory.js';
function App() {
  return (
   <>
   <div id='container'>
      <Header />
     
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/plant" element={<Plant />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path='/admin' element={<Adminhome />} />
        <Route path='/logout' element={<Logout />} />
        <Route path='/user' element={<UserHome/> }/>
        <Route path='/manageuser' element={<Manageuser/>}/>
        <Route path='/plantproduct' element={<Plantproduct/>}/>
        <Route path='/epadmin' element={<Epadmin/>}/>
        <Route path='/epUser' element={<EpUser/>}/>
        <Route path='/cpadmin' element={<Cpadmin/>}/>
        <Route path='/cpuser' element={<CpUser/>}/>
        <Route path='/addcat' element={<Addcategory/>}/>

      </Routes>  
      <Footer/>
   </div>
   </>
  );
}
export default App;
