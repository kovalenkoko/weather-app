import useFetch from "hooks/useFetch";
import { WEATHER } from "modules/api/endpoints";
import React, { useState } from "react";

export function CurrentWeather() {
  const [input, setInput] = useState("");
  const { response, performFetch } = useFetch(WEATHER, {
    q: input,
    units: "metric",
  });
  const { loading, data } = response;

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const createRequest = () => {
    performFetch();
    setInput("");
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
      </form>
      {loading ? (
        <div>Loading...</div>
      ) : data ? (
        <pre>{JSON.stringify(data, null, 2)}</pre>
      ) : (
        <div>No information, enter the city</div>
      )}
    </>
  );
}
