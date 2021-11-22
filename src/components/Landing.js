import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
function Landing(props) {
    return (
        <div className="">
          <h2 className="py-32 text-6xl mx-16 text-white  text-center uppercase">
          Comming Soon <br/>
          <p className="py-2 text-5xl mx-16  text-center ">
          With Exciting Contents
          </p>
          
        </h2>
        
        <div className="px-96  mx-32 ">
          <Link to="/blog">
          <button  className="  items-center btn">
             View blogs
          </button>
          </Link>
         
           
        
      
        </div>
        </div>
        
    );
}

export default Landing;