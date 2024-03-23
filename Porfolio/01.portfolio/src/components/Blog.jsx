import React from 'react';


const Blog = (props)  => {

        window.onpopstate = () => {
            console.log(props.pressed);
        }
    return (
            <div>Blog</div>
        );
};

export default Blog;

