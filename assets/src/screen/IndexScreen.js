/* 
    Start screen for the app. 
*/

import React, { useContext } from "react";
import { View, Text, StyleSheet, FlatList, Button } from "react-native";
import { Context } from "../context/BlogContext";
import { Feather } from "@expo/vector-icons";

const IndexScreen = () => {
  // Getting data from blog context, and passing it to the Flatlist component.
  const { state, addBlogPost } = useContext(Context);

  return (
    <>
      <Button title="Add Post" onPress={addBlogPost} />
      <FlatList
        data={state}
        keyExtractor={(blogPosts) => blogPosts.title}
        renderItem={({ item }) => {
          return (
            <View style={styles.row}>
              <Text style={styles.title}>{item.title}</Text>
              <Feather style={styles.icon} name="trash-2" />
            </View>
          );
        }}
      />
    </>
  );
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
    size: 20,
  },
});

export default IndexScreen;
