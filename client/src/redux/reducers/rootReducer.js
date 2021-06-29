import { combineReducers } from "redux";

import open_closeReducer from "./open_closeReducer.js";

const rootReducer = combineReducers({
    burgerButtonState: open_closeReducer
});

export default rootReducer;