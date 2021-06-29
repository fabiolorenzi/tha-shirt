import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers/rootReducer.js";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

let store;

if (process.env.NODE_ENV === "production") {
    store = createStore(rootReducer, applyMiddleware(thunk));
} else {
    store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
};

export default store;