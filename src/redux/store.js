import { applyMiddleware, createStore } from "redux";
import rootReducer from "./root.reducer";
import thunk from "redux-thunk";

export default createStore(rootReducer, applyMiddleware(thunk));
