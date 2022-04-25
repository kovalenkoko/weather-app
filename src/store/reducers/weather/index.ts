import {WeatherAction, WeatherActionsEnum, WeatherState} from "./types";
import IWeather from "../../../models/IWeather";

const initialState: WeatherState = {
    weather: {} as IWeather
}

export default function weatherReducer(state = initialState, action: WeatherAction): WeatherState {
    switch (action.type) {
        case WeatherActionsEnum.SET_WEATHER:
            return {...state, weather: action.payload}
        default:
            return state
    }
}