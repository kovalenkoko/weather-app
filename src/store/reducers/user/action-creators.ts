import {
    SetCitiesAction,
    SetDegSystemAction,
    SetFetchedCityListAction,
    SetLanguageAction,
    SetSelectedCityAction,
    UserActionsEnum
} from "./types";
import {ICity} from "../../../models/ICity";

export const UserActionsCreators = {
    setDegSystem: (degSystem: string): SetDegSystemAction => ({
        type: UserActionsEnum.SET_DEG_SYSTEM,
        payload: degSystem
    }),
    setLanguage: (language: string): SetLanguageAction => ({
        type: UserActionsEnum.SET_LANGUAGE,
        payload: language
    }),
    setCities: (cities: {[key: string]: ICity[]}): SetCitiesAction => ({
        type: UserActionsEnum.SET_CITIES,
        payload: cities
    }),
    setSelectedCity: (city: ICity): SetSelectedCityAction => ({
        type: UserActionsEnum.SET_SELECTED_CITY,
        payload: city
    }),
    setFetchedCityList: (cities: ICity[]): SetFetchedCityListAction => ({
        type: UserActionsEnum.SET_FETCHED_CITY_LIST,
        payload: cities
    })
}