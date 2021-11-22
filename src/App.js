import './App.css';
import React, { Component } from 'react';
import { render } from 'react-dom';
import Blogs from './components/Blogs/Blogs';
import Navbar from './components/Navbar';
import Landing from './components/Landing';
import Carosel from './components/Carosel';
import Bb from './components/Bb';

import Footer from './components/Footer';

import logo from "./assets/logo.png";
import { BrowserRouter as Router, Switch, Route, Routes, Link } from "react-router-dom";
import Contact from './components/Contact';
class App extends Component {
    state = {
        blogs:[
            {
                id:1,
            title:" Tech",
            about:"Tech these days",
            description:"Tech of the year"
            }, 
            {
                id:2,
                title:" New coming",
                about:"19 days left",
                description:"best of the year"
                },
                {
                    id:3,
                    title:" Who we are",
                    about:"19 days left",
                    description:"best of the year"
                    },
                    {
                        id:4,
                        title:" Additionals",
                        about:"19 days left",
                        description:"best of the year"
                        }
        ]
       
    }
    render() {
        console.log(this.state.blogs);
        // console.log(this.state.user.email);
        return (
            <Router>
            <div>
                
                <Navbar />

                <Routes>
                <Route exact path='/' element = { <Carosel/>  
                    }/>
              
                   
              
                </Routes>
                {/* <Bb/> */}
               
                <Routes>
                    <Route  exact path="/blog" element={<Bb/>}/>
                    <Route exact path = "/contact" element={<Contact/>}/>
                </Routes>
                     
              
                {/* <Landing/> */}
                
                {/* <Blogs blogs={this.state.blogs}/> */}
                <Footer />
            </div>
            </Router> 
        );
    }
};

export default App;