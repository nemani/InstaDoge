import "regenerator-runtime/runtime";
import { createStore, compose, applyMiddleware } from "redux";
import { syncHistoryWithStore } from "react-router-redux";
import { browserHistory } from "react-router";
import createSagaMiddleware from "redux-saga";

// import the root reducer
import rootReducer from "./reducers/index";
import rootSaga from "./sagas";

const sagaMiddleware = createSagaMiddleware();

import comments from "./data/comments";
import posts from "./data/posts";

// create an object for the default data
const defaultState = {
	posts,
	comments
};
const store = createStore(
	rootReducer,
	defaultState,
	applyMiddleware(sagaMiddleware),
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

sagaMiddleware.run(rootSaga);

const action = type => store.dispatch({ type });

action("POSTS_FETCH_REQUESTED");
action("COMMENTS_FETCH_REQUESTED");

export const history = syncHistoryWithStore(browserHistory, store);

if (module.hot) {
	module.hot.accept("./reducers/", () => {
		const nextRootReducer = require("./reducers/index").default;
		store.replaceReducer(nextRootReducer);
	});
}

export default store;
