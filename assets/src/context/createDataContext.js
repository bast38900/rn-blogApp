/*  
    Automating Context Creation, via reusable function.
*/

import React, { useReducer } from "react";

export default (reducer, actions, initialState) => {
  // Calling the context creator function
  const Context = React.createContext();

  // Setting up the provider
  const Provider = ({ children }) => {
    // State variable and rerendering components on state change, and setting initial state.
    const [state, dispatch] = useReducer(reducer, initialState);

    // Function to handle actions with dispatch
    const boundActions = {};
    for (let key in actions) {
      boundActions[key] = actions[key](dispatch);
    }

    // For rendering the whole app when state changes.
    return (
      <Context.Provider value={{ state, ...boundActions }}>
        {children}
      </Context.Provider>
    );
  };

  return { Context, Provider };
};
