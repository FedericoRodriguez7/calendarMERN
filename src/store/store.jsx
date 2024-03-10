import { createStore, compose, applyMiddleware } from "redux";
import { rootReducers } from "../reducers/rootReducers";
import {thunk} from 'redux-thunk'



const composeEnchancers = (typeof window !== "undefined" && window._REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose; 

export const store = createStore(
    rootReducers,
    composeEnchancers(
        applyMiddleware(thunk)
    )


);