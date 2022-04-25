import {IFetchWeatherData} from "../store/sagas/weather/types";
import {ICity} from "../models/ICity";

const API_KEY = "2443bceb78af5fdd43992db14ed4c5bd"
const WEATHER_BASE_URL = "https://api.openweathermap.org/data/2.5/onecall?"
const CITY_BASE_URL = "http://api.openweathermap.org/geo/1.0/direct?"

export default class Api {
    static async fetchWeather({lat, lon, lang}: IFetchWeatherData): Promise<string> {
        const response = await  fetch(`${WEATHER_BASE_URL}lat=${lat}&lon=${lon}&&exclude=minutely,alerts&units=metric&lang=${lang}&appid=${API_KEY}`)
        return response.json()
    }
    static async fetchCities(city: string): Promise<string> {
        const response = await fetch(`${CITY_BASE_URL}q=${city}&limit=5&appid=${API_KEY}`)
        return response.json()
    }
}

