// Adding context to the app, to move data around the app.

import React, { useReducer } from "react";

const BlogContext = React.createContext();

// Adding Reducer to change state, and implement CRUD for blog post
const blogReducer = (state, action) => {
    switch (action.type) {
        case "add_blogpost":
            return [...state, { title: `Blog Post #${state.length + 1}` }];
        default:
            return state;
    }
};

export const BlogProvider = ({ children }) => {
    // State variable and rerendering for blog posts, deafult is empty array.
    const [blogPosts, dispatch] = useReducer(blogReducer, []);

    // Helper function to add a blog post
    const addBlogPost = () => {
        dispatch({ type: "add_blogpost" });
    };
    
    // For rendering the whole app when state changes, and getting the blog posts list.
    return <BlogContext.Provider value={{ data: blogPosts, addBlogPost }}>
        {children}
    </BlogContext.Provider>
};

export default BlogContext;