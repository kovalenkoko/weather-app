import {SetWeatherAction, WeatherActionsEnum} from "./types";
import IWeather from "../../../models/IWeather";

export const WeatherActionCreators = {
    setWeather: (weather: IWeather): SetWeatherAction => ({
        type: WeatherActionsEnum.SET_WEATHER,
        payload: weather
    })
}