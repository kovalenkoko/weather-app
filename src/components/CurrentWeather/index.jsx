import { WEATHER } from "modules/api/endpoints";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { apiActions } from "modules/api/actions";
import { useSelector } from "react-redux";
import { selectApiState } from "modules/api/selectors";

export function CurrentWeather() {
  const dispatch = useDispatch();
  const [input, setInput] = useState("");
  const [usersData, setUsersData] = useState({});
  const apiState = useSelector(selectApiState);
  const { loading, data } = apiState[WEATHER];

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const createRequest = () => {
    dispatch(
      apiActions.fetch(WEATHER, {
        q: input,
        units: "metric",
      })
    );
    setInput("");
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((location) => {
      const { longitude, latitude } = location.coords;
      setUsersData((prevData) => ({
        ...prevData,
        lat: latitude,
        lon: longitude,
      }));
    });
  }, []);

  const handleRequest = () => {
    dispatch(
      apiActions.fetch(WEATHER, {
        lon: usersData.lon,
        lat: usersData.lat,
        units: "metric",
      })
    );
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          value={input}
          onInput={(e) => setInput(e.target.value)}
          type="text"
          placeholder="Enter any city..."
        ></input>
        <button onClick={createRequest}>Search Weather</button>
        <button onClick={handleRequest}>
          Get weather from current location
        </button>
      </form>

      {loading ? (
        <div>Loading...</div>
      ) : data && data.cod !== "404" && data.cod !== "400" ? (
        <div>
          {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
          <div>
            Current weather in {data.name} is - {Math.round(data.main.temp)}
          </div>
          <img
            src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
            alt="weather-icon"
          />
        </div>
      ) : (
        <div>No information, enter the city</div>
      )}
    </>
  );
}
