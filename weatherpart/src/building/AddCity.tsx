import {FC, useState} from "react";
import styled from 'styled-components';
import "./Style.sass"

const SearchInput = styled.input`
  width: 40%;
  border: none;
  background-color: #ffffff;
  font-size: 20px;
  padding: 15px 20px 15px 45px;
  color: #71b3df;
  border-radius: 20px;
`;

interface CityName {
  Searching: (search: string) => void;
}

export const AddCity: FC<CityName> = ({Searching}) => {
  const [CitySearching, SetCity] = useState('');
  const DisableSearch = CitySearching.trim() === '';

  const adding = () => {
    Searching(CitySearching);
    SetCity('');
  };

  
  return (
    <div>

      <SearchInput type="text" value={CitySearching} placeholder="Enter city" onChange={the => SetCity(the.target.value)} />
      
      <span>  </span>
      <button className="SearchButton" onClick={adding} disabled={DisableSearch}>Search</button>
      
    </div>
  );
}