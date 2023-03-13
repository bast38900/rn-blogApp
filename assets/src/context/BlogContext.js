// Adding context to the app, to move data around the app.

import React, { useState } from "react";

const BlogContext = React.createContext();

export const BlogProvider = ({ children }) => {
    // state variable for blog posts
    const [blogPosts, setBlogPosts] = useState([]);

    // Create helperfunction to add a blog post, and update the state.
    const addBlogPost = () => {
        setBlogPosts([
            ...blogPosts, 
            { title: `Blog Post #${blogPosts.length + 1}` }
        ]);
    };
    
    // For rendering when state changes, and getting the blog posts list.
    return <BlogContext.Provider value={{ data: blogPosts, addBlogPost }}>
        {children}
    </BlogContext.Provider>
};

export default BlogContext;