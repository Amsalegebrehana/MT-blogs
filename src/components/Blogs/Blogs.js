import React from 'react';
import BlogItem from './BlogItem';
import PropTypes from  'prop-types';
function Blogs(props) {
    console.log( props.blogs);
    return props.blogs.map((blog)=>(        
    // <h2>{blog.title}</h2>
    <BlogItem key={blog.id} blog={blog}/>
    ));
}

Blogs.propTypes={
    blogs:PropTypes.array.isRequired

}
export default Blogs;