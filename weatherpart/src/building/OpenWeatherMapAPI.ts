import {Weather, CityWeather} from './WeatherInterfaces';

const key = 'you-api-key';
const keyQuery = `appid=${key}`
const server = 'http://api.openweathermap.org/data/2.5';

export async function SearchCurrentCity(term: string): Promise<CityWeather | undefined> {
  const Output = await fetch(`${server}/weather?q=${term}&${keyQuery}`);

  if (Output.status === 404) return undefined;
  if (Output.status !== 200) throw new Error('fetch failed');

  return Output.json();
}

export async function WeatherForecast(locationId: number): Promise<Weather[]> {
  const Forecasting = await fetch(`${server}/forecast?id=${locationId}&${keyQuery}&units=metric&cnt=8`);

  if (Forecasting.status !== 200) throw new Error('fetch failed');

  return (await Forecasting.json()).list;
}

export function WeatherIcon(code: string): string {
  return `http://openweathermap.org/img/wn/${code}.png`;
}