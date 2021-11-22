import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import MTlogo from '../assets/MTLogo.png';

function Navbar(props) {
  return (
    <nav className="bg-gray">
      <div className= "max-w-7xl mx-auto border border-red-200">
      <div className="px-12">
      <div className="flex py-2 justify-between">
      <div><Link to="/"><img src = {MTlogo} className="py-2 w-22 h-16"/></Link>  </div>
      <div className="px-44  py-2 float-right flex">
        <div className="px-3 "> <h4 className="t_font a_ele"> <Link to="/blog">Blogs</Link> </h4></div>
        <div className="px-5 "><Link to="/contact"><h4 className="a_ele">Contact</h4> </Link></div>
      </div>
      
      </div>
        
      </div>

  
      </div>

    </nav>
   
     
   
  );
}

export default Navbar;