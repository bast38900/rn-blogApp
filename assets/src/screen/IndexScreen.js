/* 
    Start screen for the app. 
*/

import React, { useContext, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Button,
  TouchableOpacity,
} from "react-native";
import { Context } from "../context/BlogContext";
import { Feather } from "@expo/vector-icons";

const IndexScreen = ({ navigation }) => {
  /*   
  Getting data and functions from blog context
  , and passing it to the Flatlist component. 
*/
  const { state, deleteBlogPost, getBlogPosts } = useContext(Context);

  //Function to get getBlogPost function to run 1 time,
  useEffect(() => {
    getBlogPosts();

    // Function to run getBlogPost, when navigating to index screen.
    const listener = navigation.addListener("didFocus", () => {
      getBlogPosts();
    });

    return () => {
      listener.remove();
    };
  }, []);

  return (
    <>
      <FlatList
        data={state}
        keyExtractor={(blogPosts) => blogPosts.title}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => navigation.navigate("Show", { id: item.id })}
            >
              <View style={styles.row}>
                <Text style={styles.title}>
                  {item.title} - {item.id}
                </Text>
                <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
                  <Feather style={styles.icon} name="trash-2" />
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </>
  );
};

// Add plus symbol to header, to create a new blog post.
IndexScreen.navigationOptions = ({ navigation }) => {
  return {
    headerRight: () => (
      <TouchableOpacity onPress={() => navigation.navigate("Create")}>
        <Feather name="plus" size={30} />
      </TouchableOpacity>
    ),
  };
};

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    backgroundColor: "white",
    borderColor: "gray",
    borderTopWidth: 1,
  },
  title: {
    fontSize: 20,
  },
  icon: {
    fontSize: 24,
  },
});

export default IndexScreen;
