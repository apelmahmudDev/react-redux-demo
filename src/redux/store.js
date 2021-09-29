import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
// import cakeReducer from "./cake/cakeReducer";
import rootReducer from "./rootReducer";
import logger from "redux-logger";

const store = createStore(
	rootReducer,
	composeWithDevTools(applyMiddleware(logger, thunk))
);
// const store = createStore(cakeReducer);

export default store;
