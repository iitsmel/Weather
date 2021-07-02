export interface Coordinates {
    longitude: number;
    latitude: number;
}

export interface CityWeather {
    coord: Coordinates;
    id: number;
    name: string;
}

export interface WeatherConditions {
    id: number;
    main: string;
    description: string;
    icon: string;
}

export interface CurrentWeatherData {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
}

export interface Weather {
    weather: WeatherConditions[];
    main: CurrentWeatherData;
    dt: number;
}