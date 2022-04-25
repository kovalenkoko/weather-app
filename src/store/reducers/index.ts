import {combineReducers} from "redux";
import appReducer from "./app";
import userReducer from "./user";
import weatherReducer from "./weather";

const rootReducer = combineReducers({
    app: appReducer,
    user: userReducer,
    weather: weatherReducer
})

export default rootReducer