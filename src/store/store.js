import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunkMiddleware from "redux-thunk";

const exampleInitialState = {
  user: null
};

// export const actionTypes = {
//   SET_USER: "SET_USER"
// };

// REDUCERS
export const reducer = (state = exampleInitialState, action) => {
  switch (action.type) {
    case "SET_USER":
      // return console.log("action.payload : ", action.payload);
      return {
        ...state,
        user: action.payload
      };
    default:
      return state;
  }
};

// ACTIONS
export const setUser = userObj => {
  return { type: "SET_USER", payload: userObj };
};

export function initializeStore(initialState = exampleInitialState) {
  return createStore(reducer, initialState, composeWithDevTools(applyMiddleware(thunkMiddleware)));
}
