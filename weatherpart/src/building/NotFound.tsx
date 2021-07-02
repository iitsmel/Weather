import {FC} from "react";

interface Warning {
    message: string
}

export function Warn(className: string): FC<Warning> {
    return ({message}) => message ? <div className={`alert ${className}`}>{message}</div> : null;
}

export const NotFound = Warn('city-not-found');
export const InList = Warn('city-already-in-list');