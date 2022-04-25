import {applyMiddleware, compose, createStore} from "redux";
import createSagaMiddleware from "redux-saga";
import rootReducer from "./reducers";
import rootWatcher from "./sagas";

//@ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose;

const sagaMiddleware = createSagaMiddleware()

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(sagaMiddleware)))

sagaMiddleware.run(rootWatcher)

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch