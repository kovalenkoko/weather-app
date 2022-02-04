import useFetch from "hooks/useFetch";
import { WEATHER } from "modules/api/endpoints";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import api from "modules/api/api";
import { apiActions } from "modules/api/actions";

export function CurrentWeather() {
  const { response, performFetch } = useFetch(WEATHER, {});
  const { loading, data } = response;

  // useEffect(() => {
  //   performFetch();
  // }, [performFetch]);

  const dispatch = useDispatch();

  useEffect(async () => {
    const data = await api.fetch(WEATHER, {
      lat: "23",
      lon: "21",
      units: "metric",
    });
    dispatch(apiActions.fetchSuccess(WEATHER, {}, data));
  }, [dispatch]);
  return (
    <>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <pre>{JSON.stringify(data, null, 2)}</pre>
      )}
    </>
  );
}
