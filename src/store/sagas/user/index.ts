import {takeEvery, put} from 'redux-saga/effects'
import {FetchCityListAction, PushCityAction, SelectCityAction, UserSagaActionsEnum} from "./types";
import {AppActionCreators} from "../../reducers/app/action-creators";
import Api from "../../../api/api";
import {UserActionsCreators} from "../../reducers/user/action-creators";
import {ICity} from "../../../models/ICity";

function* fetchCityListWorker(action: FetchCityListAction ) {
    try {
        yield put(AppActionCreators.setLoading(true))
        const response: ICity[] = yield Api.fetchCities(action.payload)
        yield put(UserActionsCreators.setFetchedCityList(response))
    } catch (e: any) {
        yield put(AppActionCreators.setError(e.response.data.message))
    } finally {
        yield put(AppActionCreators.setLoading(false))
    }
}

function* pushCityWorker(action: PushCityAction) {
    yield put(AppActionCreators.setLoading(true))

    const key = action.payload.country
    const cities: {[key: string]: ICity[]} = localStorage.getItem('cities')
        ? JSON.parse(localStorage.getItem('cities') || '')
        : {}
    if (!cities[key]) cities[key] = []
    cities[key].push(action.payload)
    localStorage.setItem('cities', JSON.stringify(cities))

    yield put(UserActionsCreators.setCities(cities))
    yield put(AppActionCreators.setLoading(false))
}

function* deleteCityWorker(action: PushCityAction) {
    yield put(AppActionCreators.setLoading(true))

    const key = action.payload.country
    const cities: {[key: string]: ICity[]} = localStorage.getItem('cities')
        ? JSON.parse(localStorage.getItem('cities') || '')
        : {}
    cities[key].length === 1
        ? delete cities[key]
        : cities[key] = cities[key].filter(city => city.lat === action.payload.lat && city.lon === action.payload.lon)
    localStorage.setItem('cities', JSON.stringify(cities))

    yield put(UserActionsCreators.setCities(cities))
    yield put(AppActionCreators.setLoading(false))
}

function* selectCityWorker(action: SelectCityAction) {
    yield put(AppActionCreators.setLoading(true))
    localStorage.setItem('selectedCity', JSON.stringify(action.payload))
    yield put(UserActionsCreators.setSelectedCity(action.payload))
    yield put(AppActionCreators.setLoading(false))
}

export function* userWatcher() {
    yield takeEvery(UserSagaActionsEnum.FETCH_CITY_LIST, fetchCityListWorker)
    yield takeEvery(UserSagaActionsEnum.PUSH_CITY, pushCityWorker)
    yield takeEvery(UserSagaActionsEnum.DELETE_CITY, deleteCityWorker)
    yield takeEvery(UserSagaActionsEnum.SELECT_CITY, selectCityWorker)
}