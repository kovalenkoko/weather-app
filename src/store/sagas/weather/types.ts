export enum WeatherSagaActionsEnum {
    FETCH_WEATHER = 'FETCH_WEATHER',
}

export interface IFetchWeatherData {
    lat: number
    lon: number
    lang: string
}

export interface FetchWeatherSagaAction {
    type: WeatherSagaActionsEnum.FETCH_WEATHER,
    payload: IFetchWeatherData
}