import React, { Children } from "react";

const BlogContext = React.createContext();

export const BlogProvider = ({ children }) => {
    return <BlogContext.Provider value={22}>
        {children}
    </BlogContext.Provider>
};

export default BlogContext;