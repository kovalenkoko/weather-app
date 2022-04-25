import {put, takeEvery} from "redux-saga/effects";
import {FetchWeatherSagaAction, WeatherSagaActionsEnum} from "./types";
import {AppActionCreators} from "../../reducers/app/action-creators";
import Api from "../../../api/api";
import IWeather from "../../../models/IWeather";
import {WeatherActionCreators} from "../../reducers/weather/action-creators";


function* fetchWeatherWorker(action: FetchWeatherSagaAction) {
    try {
        yield put(AppActionCreators.setLoading(true))
        const response: IWeather = yield Api.fetchWeather(action.payload)
        yield put(WeatherActionCreators.setWeather(response))
    } catch (e: any) {
        yield put(AppActionCreators.setError(e.response.data.message))
    } finally {
        yield put(AppActionCreators.setLoading(false))
    }
}

export function* weatherWatcher() {
    yield takeEvery(WeatherSagaActionsEnum.FETCH_WEATHER, fetchWeatherWorker)
}