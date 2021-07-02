import {FC} from "react";
import {CityWeather} from "./WeatherInterfaces";
import styled from 'styled-components';

const CitysName = styled.h1`
  height: 64px;
  color: #ffffff;
  font-weight: bold;
  font-size: 25px;
  margin: 10px;
  display:inline;
`;

const TableStyle = styled.h1`
  height: 64px;
  color: #5B3DFF;
  font-weight: 600;
  font-size: 25px;
  margin: 5px;
`;

interface CityListItems {
  TheList: CityWeather[];
  Current: CityWeather | null;
  SetCity: (City: CityWeather) => void;
}

export const CitysList: FC<CityListItems> = ({TheList, SetCity, Current}) =>
  <div>

    <CitysName>Click The City To See Forcast</CitysName>

    <TableStyle>
      <table>
        <tbody>
          {TheList.map(location =>
            <td key={location.id}
                className={Current?.id === location.id ? 'table-primary' : ''}
                onClick={() => SetCity(location)}>
              <td>{location.name} </td>
            </td>
          )}
        </tbody>
      </table>
    </TableStyle>

  </div>;