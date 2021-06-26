import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers/rootReducer.js";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
var sys;

if (process.env.NODE_ENV === "production") {
    sys = (rootReducer, applyMiddleware(thunk));
} else {
    sys = (rootReducer, composeWithDevTools(applyMiddleware(thunk)));
};

const store = createStore(sys);

export default store;