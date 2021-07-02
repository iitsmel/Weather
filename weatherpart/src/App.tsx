import React, {FC, useState} from 'react';
import styled from 'styled-components';
import {AddCity} from "./building/AddCity";
import {CitysList} from "./building/CityList";
import {CityWeather} from "./building/WeatherInterfaces";
import {SearchCurrentCity} from "./building/OpenWeatherMapAPI";
import {ShowWeather} from "./building/ShowWeather";
import {NotFound, InList} from "./building/NotFound";

const Title = styled.h1`
  height: 64px;
  color: #ffffff;
  font-weight: 400;
  text-align: center;
  font-size: 70px;
`;

const CityName = styled.h2`
  text-align: center;
`;

const Error = styled.h3`
  color: #ffffff;
  font-weight: bold;
  text-align: center;
  font-size: 40px;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: black;
`;

const Show = styled.h4`
  color: #ffffff;
  text-align: left;
  font-size: 12px;
`;


const App: FC = () => {
  const [Cities, SetCities] = useState<CityWeather[]>([]);
  const [CurrentCity, SetCurrentCity] = useState<CityWeather | null>(null);
  const [CityNameError, SetNotFound] = useState('');
  const [CityNameRepeated, SetRepeated] = useState('');


  const ResetAlerts = () => {
    SetNotFound('');
    SetRepeated('');
  }

  let Adding = async (term: string) => {
    ResetAlerts();
    const City = await SearchCurrentCity(term);

    if (!City) {
      SetNotFound(`Unable to find '${term}'.`);
    } else if (Cities.find(item => item.id === City.id)) {
      SetRepeated(`The city '${term}' is already in the list.`);
    } else {
      SetCities([City, ...Cities]);
    }
  };

  return (
    <div className="california">

      <Title>Weather App</Title>

      <CityName>
        <AddCity Searching={Adding}/>
      </CityName>

      <Error>
        <NotFound message={CityNameError}/>
        <InList message={CityNameRepeated}/>
      </Error>

        <CitysList TheList={Cities}
                  Current={CurrentCity}
                  SetCity={location => SetCurrentCity(location)}/>

      <Show>
       <ShowWeather location={CurrentCity}/>
      </Show>

    </div>
  );
};

export default App;