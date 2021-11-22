import React from 'react';
import Author from './Author';
import Subscribe from './Subscribe';

function Bb(props) {
    return (
        <div>
            <div>
  <div className="w-full m-0 p-0 bg-cover bg-bottom" style={{backgroundImage: 'url("https://jobs.giz.de/cust/beesite/images/medialib/Menschen_-_Europa_GIZ_Workshop_runder_Tisch.JPG")', height: '60vh', maxHeight: 460}}>
    <div className="container max-w-4xl  mx-auto pt-16 md:pt-32 text-center break-normal">
      {/*Title*/}
      <div className="bg-red-200 bg-opacity-75 md:bg-opacity-50">
      <p className="text-red-700   uppercase font-extrabold text-5xl md:text-5xl">
        MT Blog
      </p>
      <p className="text-xl md:text-2xl py-4 font-bold text-red-700 uppercase">Welcome to Our Blog</p>
      </div>
      
    </div>
  </div>
  {/*Container*/}
  <div className="container px-4 md:px-0 max-w-6xl mx-auto -mt-32">
    <div className="mx-0 sm:mx-6">
      {/*Nav*/}
      {/*  */}

      {/* nav */}
      <div className="bg-gray-200 w-full text-xl md:text-2xl text-gray-800 leading-normal rounded-t">
        {/*Lead Card*/}
        <div className="flex h-full bg-white rounded overflow-hidden shadow-lg">
          <a href="post.html" className="flex flex-wrap no-underline hover:no-underline">
            <div className="w-full md:w-2/3 rounded-t">	
              <img src="https://source.unsplash.com/collection/494263/800x600" className="h-full w-full shadow" />
            </div>
            <div className="w-full md:w-1/3 flex flex-col flex-grow flex-shrink">
              <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow-lg">
                <p className="w-full min_read pt-6 px-6">GETTING STARTED</p>
                <div className="w-full font-bold text-xl text-gray-900 px-6">👋 Welcome Molto Terfo Blog Page</div>
                <p className="text-gray-800 font-serif text-base px-6 mb-5">
                  This starter Blog is an attempt to replicate the Up coming Job vaccancy Website
                </p>
              </div>
              <div className="author_bottom">
                <div className="flex items-center justify-between">
                  <img className="w-8 h-8 rounded-full mr-4 avatar" data-tippy-content="Author Name" src="http://i.pravatar.cc/300" alt="Avatar of Author" />
                  <p className="min_read">1 MIN READ</p>
                </div>
              </div>
            </div>
          </a>
        </div>
        {/*/Lead Card*/}
        {/*Posts Container*/}
        <div className="flex flex-wrap justify-between pt-12 -mx-6">
          {/*1/3 col */}
          <div className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
            <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow-lg">
              <a href="#" className="flex flex-wrap no-underline hover:no-underline">
                <img src="https://source.unsplash.com/collection/225/800x600" className="h-64 w-full rounded-t pb-6" />
                <p className="w-full min_read px-6">GETTING STARTED</p>
                <div className="w-full font-bold text-xl text-gray-900 px-6">Lorem ipsum dolor sit amet.</div>
                <p className="text-gray-800 font-serif text-base px-6 mb-5">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at ipsum eu nunc commodo posuere et sit amet ligula. 
                </p>
              </a>
            </div>
            <div className="author_bottom">
              <div className="flex items-center justify-between">
                <img className="w-8 h-8 rounded-full mr-4 avatar" data-tippy-content="Author Name" src="http://i.pravatar.cc/300" alt="Avatar of Author" />
                <p className="min_read">1 MIN READ</p>
              </div>
            </div>
          </div>
          {/*1/3 col */}
          <div className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
            <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow-lg">
              <a href="#" className="flex flex-wrap no-underline hover:no-underline">
                <img src="https://source.unsplash.com/collection/3106804/800x600" className="h-64 w-full rounded-t pb-6" />
                <p className="w-full min_read px-6">GETTING STARTED</p>
                <div className="w-full font-bold text-xl text-gray-900 px-6">Lorem ipsum dolor sit amet.</div>
                <p className="text-gray-800 font-serif text-base px-6 mb-5">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at ip Aliquam at ipsum eu nunc commodo posuere et sit amet ligula. 
                </p>
              </a>
            </div>
            <div className="author_bottom">
              <div className="flex items-center justify-between">
                <img className="w-8 h-8 rounded-full mr-4 avatar" data-tippy-content="Author Name" src="http://i.pravatar.cc/300" alt="Avatar of Author" />
                <p className="min_read">1 MIN READ</p>
              </div>
            </div>
          </div>
          {/*1/3 col */}
          <div className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
            <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow-lg">
              <a href="#" className="flex flex-wrap no-underline hover:no-underline">
                <img src="https://source.unsplash.com/collection/539527/800x600" className="h-64 w-full rounded-t pb-6" />
                <p className="w-full min_read px-6">GETTING STARTED</p>
                <div className="w-full  font-bold text-xl text-gray-900 px-6">Lorem ipsum dolor sit amet.</div>
                <p className="text-gray-800 font-serif text-base px-6 mb-5">
                  Lorem ipsum eu nunc commodo posuere et sit amet ligula. 
                </p>
              </a>
            </div>
            <div className="author_bottom">
              <div className="flex items-center justify-between">
                <img className="w-8 h-8 rounded-full mr-4 avatar" data-tippy-content="Author Name" src="http://i.pravatar.cc/300" alt="Avatar of Author" />
                <p className="min_read">1 MIN READ</p>
              </div>
            </div>
          </div>
          {/*1/2 col */}
          <div className="w-full md:w-1/2 p-6 flex flex-col flex-grow flex-shrink">
            <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow-lg">
              <a href="#" className="flex flex-wrap no-underline hover:no-underline">
                <img src="https://source.unsplash.com/collection/3657445/800x600" className="h-full w-full rounded-t pb-6" />
                <p className="w-full min_read px-6">GETTING STARTED</p>
                <div className="w-full font-bold text-xl text-gray-900 px-6">Lorem ipsum dolor sit amet.</div>
                <p className="text-gray-800 font-serif text-base px-6 mb-5">
                  Lorem ipsum eu nunc commodo posuere et sit amet ligula. 
                </p>
              </a>
            </div>
            <div className="author_bottom">
              <div className="flex items-center justify-between">
                <img className="w-8 h-8 rounded-full mr-4 avatar" data-tippy-content="Author Name" src="http://i.pravatar.cc/300" alt="Avatar of Author" />
                <p className="min_read">1 MIN READ</p>
              </div>
            </div>
          </div>
          {/*1/2 col */}
          <div className="w-full md:w-1/2 p-6 flex flex-col flex-grow flex-shrink">
            <div className="flex-1 flex-row bg-white rounded-t rounded-b-none overflow-hidden shadow-lg">
              <a href="#" className="flex flex-wrap no-underline hover:no-underline">	
                <img src="https://source.unsplash.com/collection/764827/800x600" className="h-full w-full rounded-t pb-6" />
                <p className="w-full min_read px-6">GETTING STARTED</p>
                <div className="w-full font-bold text-xl text-gray-900 px-6">Lorem ipsum dolor sit amet.</div>
                <p className="text-gray-800 font-serif text-base px-6 mb-5">
                  Lorem ipsum eu nunc commodo posuere et sit amet ligula. 
                </p>
              </a>
            </div>
            <div className="author_bottom">
              <div className="flex items-center justify-between">
                <img className="w-8 h-8 rounded-full mr-4 avatar" data-tippy-content="Author Name" src="http://i.pravatar.cc/300" alt="Avatar of Author" />
                <p className="min_read">1 MIN READ</p>
              </div>
            </div>
          </div>
          {/*2/3 col */}
          <div className="w-full md:w-2/3 p-6 flex flex-col flex-grow flex-shrink">
            <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow-lg">
              <a href="#" className="flex flex-wrap no-underline hover:no-underline">	
                <img src="https://source.unsplash.com/collection/325867/800x600" className="h-full w-full rounded-t pb-6" />
                <p className="w-full min_read px-6">GETTING STARTED</p>
                <div className="w-full font-bold text-xl text-gray-900 px-6">Lorem ipsum dolor sit amet.</div>
                <p className="text-gray-800 font-serif text-base px-6 mb-5">
                  Lorem ipsum eu nunc commodo posuere et sit amet ligula. 
                </p>
              </a>
            </div>
            <div className="author_bottom">
              <div className="flex items-center justify-between">
                <img className="w-8 h-8 rounded-full mr-4 avatar" data-tippy-content="Author Name" src="http://i.pravatar.cc/300" alt="Avatar of Author" />
                <p className="min_read">1 MIN READ</p>
              </div>
            </div>
          </div>
          {/*1/3 col */}
          <div className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
            <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow-lg">
              <a href="#" className="flex flex-wrap no-underline hover:no-underline">
                <img src="https://source.unsplash.com/collection/1118905/800x600" className="h-full w-full rounded-t pb-6" />
                <p className="w-full min_read px-6">GETTING STARTED</p>
                <div className="w-full font-bold text-xl text-gray-900 px-6">Lorem ipsum dolor sit amet.</div>
                <p className="text-gray-800 font-serif text-base px-6 mb-5">
                  Lorem ipsum eu nunc commodo posuere et sit amet ligula. 
                </p>
              </a>
            </div>
            <div className="author_bottom">
              <div className="flex items-center justify-between">
                <img className="w-8 h-8 rounded-full mr-4 avatar" data-tippy-content="Author Name" src="http://i.pravatar.cc/300" alt="Avatar of Author" />
                <p className="min_read">1 MIN READ</p>
              </div>
            </div>
          </div>
        </div>
        {/*/ Post Content*/}
      </div>
      {/*Subscribe*/}	
      <Subscribe/>
      {/* /Subscribe*/}
      {/*Author*/}
        <Author/>
      {/*/Author*/}
    </div>
  </div>
</div>

        </div>
    );
}

export default Bb;