import {ICity} from "../../../models/ICity";

export interface UserState {
    degSystem: string,
    language: string,
    cities: {[key: string]: ICity[]},
    selectedCity: ICity,
    fetchedCityList: ICity[]
}

export enum UserActionsEnum {
    SET_DEG_SYSTEM = 'SET_DEG_SYSTEM',
    SET_LANGUAGE = 'SET_LANGUAGE',
    SET_CITIES = 'SET_CITIES',
    SET_SELECTED_CITY = 'SET_SELECTED_CITY',
    SET_FETCHED_CITY_LIST = 'SET_FETCHED_CITY_LIST',
}

export interface SetDegSystemAction {
    type: UserActionsEnum.SET_DEG_SYSTEM,
    payload: string
}

export interface SetLanguageAction {
    type: UserActionsEnum.SET_LANGUAGE,
    payload: string
}

export interface SetCitiesAction {
    type: UserActionsEnum.SET_CITIES,
    payload: {[key: string]: ICity[]}
}

export interface SetSelectedCityAction {
    type: UserActionsEnum.SET_SELECTED_CITY,
    payload: ICity
}

export interface SetFetchedCityListAction {
    type: UserActionsEnum.SET_FETCHED_CITY_LIST,
    payload: ICity[]
}

export type UserAction =
    SetDegSystemAction |
    SetLanguageAction |
    SetCitiesAction |
    SetSelectedCityAction |
    SetFetchedCityListAction