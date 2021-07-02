export function UnixTimeConverter(utc: number): Date {
    return new Date(utc * 1000);
}