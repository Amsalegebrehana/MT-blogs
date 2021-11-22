import React from 'react';
import PropTypes from  'prop-types';
import logos from '../../assets/logos.jpg';
function BlogItem(props) {
    return (
        <div>
            {/* <p>{props.blog.title}</p> */}
<div className="py max-w-md mx-auto my-2 bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
  <div className="md:flex">
    <div className="md:flex-shrink-0">
      <img className="h-48 w-full object-cover md:h-full md:w-48" src={logos} alt="Man looking at item at a store" />
    </div>
    <div className="p-8">
      <div className="uppercase tracking-wide text-sm text-orange-500 font-semibold">{props.blog.title}</div>
      <a href="#" className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">{props.blog.about}</a>
      <p className="mt-2 text-gray-500">
        {props.blog.description} 
        Getting a new business off the ground is a lot of hard work. 
        Here are five ideas you can use to find your first customers.</p>
    </div>
  </div>
  
</div>
<div></div>
        </div>
    );
}


BlogItem.propTypes = {
    blog:PropTypes.object.isRequired
}
export default BlogItem;