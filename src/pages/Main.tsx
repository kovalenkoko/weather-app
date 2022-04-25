import React, {ChangeEvent, FC, FormEvent, useEffect, useState} from 'react';
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useActions} from "../hooks/useActions";
import {IFetchWeatherData} from "../store/sagas/weather/types";

const Main: FC = () => {
    const {fetchedCityList, selectedCity, cities, language} = useTypedSelector(state => state.user)
    const {weather} = useTypedSelector(state => state.weather)
    const {fetchCityList, pushCity, deleteCity, selectCity, fetchWeather} = useActions()

    const [city, setCity] = useState<string>('')

    useEffect(() => {
        const fetchWeatherData: IFetchWeatherData = {
            lon: selectedCity.lon,
            lat: selectedCity.lat,
            lang: language
        }
        fetchWeather(fetchWeatherData)
    }, [selectedCity])

    return (
        <div style={{display: "flex"}}>
            <div>
                <form onSubmit={(e: FormEvent<HTMLFormElement>) => {
                    e.preventDefault()
                    fetchCityList(city)
                }}>
                    <input
                        value={city}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => setCity(e.target.value)}
                    />
                    <button type='submit'>GET CITIES</button>
                </form>
                <h1>Fetched cities:</h1>
                {fetchedCityList?.map(city =>
                    <div onClick={() => pushCity(city)}>
                        {city.local_names?.hasOwnProperty('en') && city.local_names['en']}
                    </div>
                )}

                <h1>My Cities:</h1>
                {Object.keys(cities).sort().map(country =>
                    <div>
                        <h2>{country}</h2>
                        <div>
                            {cities[country]?.map(city =>
                                <div style={{display: 'flex'}}>
                                    <div onClick={() => selectCity(city)}>{city.local_names['ru']}</div>
                                    <button onClick={() => deleteCity(city)}>DELETE</button>
                                </div>
                            )}
                        </div>
                    </div>
                )}
                <h1>Selected city is {selectedCity.country && selectedCity.local_names['ru']}</h1>
            </div>

            <div>
                <h2>local time difference: {weather.timezone_offset}</h2>

                <h1>CURRENT WEATHER</h1>
                <h3>{Object.keys(weather.current).map(key =>
                        <div>
                            {key}: {JSON.stringify(weather.current[key])}
                        </div>
                    )}
                </h3>

                <h1>HOURLY WEATHER</h1>
                <h3>{Object.keys(weather.hourly[0]).map(key =>
                        <div>
                            {key}: {JSON.stringify(weather.hourly[0][key])}
                        </div>
                    )}
                </h3>

                <h1>DAILY WEATHER</h1>
                <h3>{Object.keys(weather.daily[0]).map(key =>
                    <div>
                        {key}: {JSON.stringify(weather.daily[0][key])}
                    </div>
                )}
                </h3>
            </div>
        </div>
    )
}

export default Main