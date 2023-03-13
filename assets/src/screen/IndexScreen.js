/* 
    Start screen for the app. 
*/

import React, { useContext } from "react";
import { View, Text, StyleSheet, FlatList, Button } from 'react-native';
import { Context } from "../context/BlogContext";

const IndexScreen = () => {
    // Getting data from blog context, and passing it to the Flatlist component.
    const { state, addBlogPost } = useContext(Context);

    return (
        <>
            <Text>Hello</Text>
            <Button title="Add Post" onPress={addBlogPost} />
            <FlatList 
                data={state}
                keyExtractor={(blogPosts) => blogPosts.title}
                renderItem={({ item }) => 
                    <Text>{item.title}</Text>}
            />
        </>
    )
};

const styles = StyleSheet.create({});

export default IndexScreen;