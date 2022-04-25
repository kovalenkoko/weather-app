import {FetchWeatherSagaAction, IFetchWeatherData, WeatherSagaActionsEnum} from "./types";

export const WeatherSagaActionCreators = {
    fetchWeather: (fetchWeatherData: IFetchWeatherData): FetchWeatherSagaAction => ({
        type: WeatherSagaActionsEnum.FETCH_WEATHER,
        payload: fetchWeatherData
    }),
}
