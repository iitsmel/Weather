import React, {FC} from "react";
import {Weather} from "./WeatherInterfaces";
import {WeatherIcon} from "./OpenWeatherMapAPI";
import {UnixTimeConverter} from "./UnixTimeConverter";

import styled from 'styled-components';

const DisplayItems = styled.div`
  font-size: 12px;
`;

interface WeatherNowItem {
  weather: Weather;
}

export const WeatherNow: FC<WeatherNowItem> = ({weather}) =>
  <DisplayItems>

    {UnixTimeConverter(weather.dt).toLocaleTimeString()}
    
    <p>
      <strong>{weather.main.temp}°C</strong>
      <p>({weather.main.temp_min}°C / {weather.main.temp_max}°C)</p>
    </p>

    <p>Humidity : {weather.main.humidity}%</p>

    {weather.weather.map(condition =>
      <p key={condition.id}>
        <img src={WeatherIcon(condition.icon)} alt={condition.main}/> {condition.main} {condition.description}
      </p>)
    }

  </DisplayItems>;