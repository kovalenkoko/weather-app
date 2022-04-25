import IWeather from "../../../models/IWeather";

export interface WeatherState {
    weather: IWeather
}

export enum WeatherActionsEnum {
    SET_WEATHER = 'SET_WEATHER'
}

export interface SetWeatherAction {
    type: WeatherActionsEnum.SET_WEATHER,
    payload: IWeather
}

export type WeatherAction = SetWeatherAction