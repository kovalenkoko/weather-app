import {UserAction, UserActionsEnum, UserState} from "./types"
import {ICity} from "../../../models/ICity";

const initialState: UserState = {
    degSystem: '°C',
    language: 'en',
    cities: {} as {[key: string]: ICity[]},
    selectedCity: {} as ICity,
    fetchedCityList: [] as ICity[]
}

export default function userReducer(state = initialState, action: UserAction): UserState {
    switch (action.type) {
        case UserActionsEnum.SET_DEG_SYSTEM:
            return {...state, degSystem: action.payload}
        case UserActionsEnum.SET_LANGUAGE:
            return {...state, language: action.payload}
        case UserActionsEnum.SET_CITIES:
            return {...state, cities: action.payload}
        case UserActionsEnum.SET_SELECTED_CITY:
            return {...state, selectedCity: action.payload}
        case UserActionsEnum.SET_FETCHED_CITY_LIST:
            return {...state, fetchedCityList: action.payload}
        default:
            return state
    }
}