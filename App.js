import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import IndexScreen from "./assets/src/screen/IndexScreen";
import { Provider } from "./assets/src/context/BlogContext";
import ShowScreen from "./assets/src/screen/ShowScreen";

// Add all screens to the stack, and the root screen.
const navigator = createStackNavigator(
  {
    Index: IndexScreen,
    Show: ShowScreen,
  },
  {
    initialRouteName: "Index",
    defaultNavigationOptions: {
      title: "Blogs",
    },
  }
);

const App = createAppContainer(navigator);

export default () => {
  // Wrap App in BlogProvider, for navigation throughout the app.
  return (
    <Provider>
      <App />
    </Provider>
  );
};
