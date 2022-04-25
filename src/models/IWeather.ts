export default interface IWeather {
    timezone_offset: number
    current: ICurrent
    hourly: IHourly[]
    daily: IDaily[]
}

interface ICurrent {
    dt: number
    temp: string
    feels_like: number
    weather: IWeatherIconAndDescription[]
}

interface IWeatherIconAndDescription {
    description: string
    icon: string
}

interface IHourly {
    dt: number
    temp: number
    pop: number
    weather: IWeatherIconAndDescription[]
    wind_speed: number
    wind_deg: number
}

interface IDaily {
    dt: number
    sunrise: number
    sunset: number
    temp: ITemp
    pop: number
    weather: IWeatherIconAndDescription[]
    humidity: number
    uvi: number
    wind_speed: number
    wind_deg: number
    pressure: number
    dew_point: number
}

interface ITemp {
    day: number
    night: number
}
