import { combineReducers } from "redux";

import open_closeReducer from "./open_closeReducer.js";
import searcherReducer from "./searcherReducer.js";

const rootReducer = combineReducers({
    burgerButtonState: open_closeReducer,
    searcher: searcherReducer
});

export default rootReducer;