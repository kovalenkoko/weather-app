export interface ICity {
    country: string,
    lat: number,
    lon: number,
    local_names: {[key: string]: string}
}