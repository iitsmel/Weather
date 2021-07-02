import {FC, useEffect, useState} from "react";
import {WeatherNow} from "./WeatherNow";
import {Weather, CityWeather} from "./WeatherInterfaces";
import {WeatherForecast} from "./OpenWeatherMapAPI";
import styled from 'styled-components';

const WeatherDetailsWrapper = styled.div`
  flex-basis: 100%;
  flex-wrap: wrap;
  padding: 10px 20px 10px 10px;
  margin: 6px;
  background-color: rgb(177, 18, 38);
  border-radius: 15px;
  list-style-type: none;
  align-self: flex-start;
  display: inline-block;
`;

interface TheCitysWeather {
  location: CityWeather | null;
}

export const ShowWeather: FC<TheCitysWeather> = ({location}) => {
  const [Forecasting, SetForecasting] = useState<Weather[] | null>(null);

  useEffect(() => {
    (async function () {
      if (location) {
        const [ForecastingNow] = await Promise.all([
          WeatherForecast(location.id)
        ]);
        SetForecasting(ForecastingNow);
      }
    })()
  }, [location]);

  if (!location || !Forecasting) return null;

  return (
    <div>

        <ol style={({whiteSpace: 'nowrap'})}>

          {Forecasting.map(stamp =>
            <WeatherDetailsWrapper>
            <li key={stamp.dt}>
              <WeatherNow weather={stamp}/>
            </li>
            </WeatherDetailsWrapper>
          )}

        </ol>

    </div>
  );
};