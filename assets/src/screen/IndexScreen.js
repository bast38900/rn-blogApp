import React, { useContext } from "react";
import { View, Text, StyleSheet } from 'react-native';
import BlogContext from "../context/BlogContext";

const IndexScreen = () => {
    const value = useContext(BlogContext);

    return (
        <>
            <Text>Hello</Text>
            <Text>{value}</Text>
        </>
    )
};

const styles = StyleSheet.create({});

export default IndexScreen;