import { applyMiddleware, createStore, compose, combineReducers } from "redux";
import thunk from "redux-thunk";
import { streamReducer } from "./reducers/streamReducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
    streamModule: streamReducer
})

export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));
window.myStore = store;
