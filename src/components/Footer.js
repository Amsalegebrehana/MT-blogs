import React from 'react';

import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import MTlogo from '../assets/MTLogo.png';
function Footer(props) {
  return (
<footer className="text-gray-800 body-font">
  <div className="bg-gray-800">
    <div className="
  container
  mx-auto
  py-4
  px-5
  flex flex-wrap flex-col
  sm:flex-row
">
      <p className="text-gray-500 text-sm text-center sm:text-left a_ele">
      
        <Link to="/"><img src = {logo} className="py-2 w-10 h-10"/></Link>
        © 2021 Copyright:
      </p>
      <span className="
    inline-flex
    sm:ml-auto sm:mt-0
    mt-2
    justify-center
    sm:justify-start
  ">
        <a href className="text-gray-500 a_ele">
          <i className="fab fa-facebook-f" />
        </a>
        <a href className="ml-3 text-gray-500 a_ele">
          <i className="fab fa-twitter" />
        </a>
        <a href className="ml-3 text-gray-500 a_ele">
          <i className="fab fa-linkedin-in" />
        </a>
        <a href className="ml-3 text-gray-500 a_ele">
          <i className="fab fa-youtube" />
        </a>
        <a href className="ml-3 text-gray-500 a_ele">
          <i className="fab fa-instagram" />
        </a>
      </span>
    </div>
  </div>
</footer>

  );
}

export default Footer;