import {all} from 'redux-saga/effects'
import {userWatcher} from "./user";
import {weatherWatcher} from "./weather";

export default function* rootWatcher() {
    yield all([
        userWatcher(),
        weatherWatcher()
    ])
}