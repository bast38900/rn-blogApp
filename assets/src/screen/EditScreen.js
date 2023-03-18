/* 
    Edit screen for a specific post 
*/

import React, { useContext } from "react";
import { StyleSheet } from "react-native";
import { Context } from "../context/BlogContext";
import BlogPostForm from "../component/BlogPostForm";

const EditScreen = ({ navigation }) => {
  // Naming an id parameter
  const id = navigation.getParam("id");

  // Getting the blog post from the context, and the edit function
  const { state, editBlogPost } = useContext(Context);

  // Find the blog post by id
  const blogPost = state.find((blogPost) => blogPost.id === id);

  return (
    <BlogPostForm
      initialValues={{ title: blogPost.title, content: blogPost.content }}
      onSubmit={(title, content) => {
        editBlogPost(id, title, content, () => navigation.pop());
      }}
    />
  );
};

const styles = StyleSheet.create({});

export default EditScreen;
