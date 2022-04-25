export const WEATHER = '/data/2.5/weather'
export const CITY = '/geo/1.0/direct'

export interface IEndpoint {
    uri: string,
    method: string
}

const ENDPOINTS: {[key: string]: IEndpoint} = {
    [WEATHER]: {
        uri: '/data/2.5/weather',
        method: 'GET',
    },
    [CITY]: {
        uri: '/geo/1.0/direct',
        method: 'GET',
    },
    // [CITY]: {
    //     uri: '/geo/1.0/direct',
    //     method: 'POST',
    // },
}

export default ENDPOINTS