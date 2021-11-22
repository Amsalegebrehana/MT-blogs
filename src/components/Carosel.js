import React from 'react';
import { Link } from 'react-router-dom'; 
import Landing from './Landing';
function Carosel(props) {
    return (
        <div>
            
<div>
  {/* Required font awesome */}
  <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.11.2/css/all.css" />
  <style dangerouslySetInnerHTML={{__html: "\n  .carousel-open:checked + .carousel-item {\n    position: static;\n    opacity: 100;\n  }\n\n  .carousel-item {\n    -webkit-transition: opacity 0.6s ease-out;\n    transition: opacity 0.6s ease-out;\n  }\n\n  #carousel-1:checked ~ .control-1,\n  #carousel-2:checked ~ .control-2,\n  #carousel-3:checked ~ .control-3 {\n    display: block;\n  }\n\n  .carousel-indicators {\n    list-style: none;\n    margin: 0;\n    padding: 0;\n    position: absolute;\n    bottom: 2%;\n    left: 0;\n    right: 0;\n    text-align: center;\n    z-index: 10;\n  }\n\n  #carousel-1:checked\n    ~ .control-1\n    ~ .carousel-indicators\n    li:nth-child(1)\n    .carousel-bullet,\n  #carousel-2:checked\n    ~ .control-2\n    ~ .carousel-indicators\n    li:nth-child(2)\n    .carousel-bullet,\n  #carousel-3:checked\n    ~ .control-3\n    ~ .carousel-indicators\n    li:nth-child(3)\n    .carousel-bullet {\n    color: #2b6cb0;\n    /*Set to match the Tailwind colour you want the active one to be */\n  }\n" }} />
  <div className="carousel relative rounded  overflow-hidden shadow-xl">
    <div className="carousel-inner relative overflow-hidden w-full">
      {/*Slide 1*/}
      <input className="carousel-open" type="radio" id="carousel-1" name="carousel" aria-hidden="true" hidden defaultChecked="checked" />
      <div className="carousel-item absolute opacity-0 bg-center" style={{height: 550, backgroundImage: 'url(https://mdbootstrap.com/img/new/slides/052.jpg)'}} >
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
       
      
      <label htmlFor="carousel-3" className="control-1 carosel">
     
    <i className="fas fa-angle-left mt-3" />
    </label>
    
    
      <label htmlFor="carousel-2" className="next control-1 carosel_points">
          
    <i className="fas fa-angle-right mt-3" /></label>

    
      {/*Slide 2*/}
      <input className="carousel-open" type="radio" id="carousel-2" name="carousel" aria-hidden="true" hidden />
      <div className="carousel-item absolute opacity-0 bg-center" style={{height: 550, backgroundImage: 'url(https://images.ctfassets.net/q8mvene1wzq4/186bjv5JKLo2VYaSLR8YpY/f020623add61ea5f761e96fadee715f1/careers_overview.jpg)'}}
      >
         <Landing/>
      </div>
      
      
      
      <label htmlFor="carousel-1" className="control-2 carosel">
          
          <i className="fas fa-angle-left mt-3" /></label>
      <label htmlFor="carousel-3" className="next control-2 carosel_points">
        <i className="fas fa-angle-right mt-3" /></label>

      {/*Slide 3*/}
      <input className="carousel-open" type="radio" id="carousel-3" name="carousel" aria-hidden="true" hidden />
      <div className="carousel-item absolute opacity-0" style={{height: 550, backgroundImage: 'url(https://s26352.pcdn.co/wp-content/uploads/2019/03/cropped-Careers-Hero-GameRoom.jpg)'}} 
      >
        <Landing/>
      </div>
      <label htmlFor="carousel-2" className="
  control-3
carosel
"><i className="fas fa-angle-left mt-3" /></label>

        
       

     
      
      <label htmlFor="carousel-1" className="
  next
  control-3
  carosel_points
">
    
    <i className="fas fa-angle-right mt-3" /></label>
      {/* Add additional indicators for each slide*/}
     
       
      <ol className="carousel-indicators">
        <li className="inline-block mr-3">
          <label htmlFor="carousel-1" className=" dots carousel-bullet
      
    ">•</label>
        </li>
        <li className="inline-block mr-3">
          <label htmlFor="carousel-2" className=" carousel-bullet
     dots
    ">•</label>
        </li>
        <li className="inline-block mr-3">
          <label htmlFor="carousel-3" className="
      dots carousel-bullet
    ">•</label>
        </li>
      </ol>
    </div>
  </div>
</div>

            
        </div>
    );
}

export default Carosel;
