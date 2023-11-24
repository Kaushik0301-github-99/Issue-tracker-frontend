import { legacy_createStore as createStore,applyMiddleware } from "redux";
import thunk from "redux-thunk";
import projectReducer from "./reducer";

const store = createStore(projectReducer,applyMiddleware(thunk));

export default store;