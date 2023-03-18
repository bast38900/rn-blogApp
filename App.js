import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import IndexScreen from "./assets/src/screen/IndexScreen";
import { Provider as BlogProvider } from "./assets/src/context/BlogContext";
import ShowScreen from "./assets/src/screen/ShowScreen";
import CreateScreen from "./assets/src/screen/CreateScreen";
import EditScreen from "./assets/src/screen/EditScreen";

// Add all screens to the stack, and the root screen.
const navigator = createStackNavigator(
  {
    Index: IndexScreen,
    Show: ShowScreen,
    Create: CreateScreen,
    Edit: EditScreen,
  },
  {
    initialRouteName: "Index",
    defaultNavigationOptions: {
      title: "Blog",
    },
  }
);

const App = createAppContainer(navigator);

export default () => {
  // Wrap App in BlogProvider, for navigation throughout the app.
  return (
    <BlogProvider>
      <App />
    </BlogProvider>
  );
};
