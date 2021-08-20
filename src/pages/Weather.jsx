import { Row, Col, Button, Spinner } from "react-bootstrap";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setWeatherQueryAction,
  getWeatherAction,
  setLoadingWeather,
  setError,
} from "../redux/actions";

const Weather = () => {
  const weather = useSelector((state) => state.weather);
  const dispatch = useDispatch();

  const getWeather = async (query) => {
    dispatch(setLoadingWeather(true));
    dispatch(setWeatherQueryAction(query));
    dispatch(getWeatherAction(query));
  };

  return (
    <>
      {console.log(weather)}
      <header>
        <input type="text" id="query" />
        <Button
          onClick={() => getWeather(document.getElementById("query").value)}
        >
          {weather.isLoading ? (
            <Spinner animation="border" role="status" />
          ) : (
            "Search"
          )}
        </Button>
      </header>
      {weather.weather !== null && (
        <div className="mt-5">
          Right now it's {weather.weather.weather[0].main} (
          {weather.weather.weather[0].description}) in {weather.weather.name},
          thanks.
        </div>
      )}
      {/* <div>{weather.query && <h2>{weather.weather.name}</h2>}</div> */}
    </>
  );
};

export default Weather;

/* 
api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
*/
