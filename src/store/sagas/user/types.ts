import {ICity} from "../../../models/ICity";

export enum UserSagaActionsEnum {
    FETCH_CITY_LIST = 'FETCH_CITY',
    PUSH_CITY = 'PUSH_CITY',
    DELETE_CITY = 'DELETE_CITY',
    SELECT_CITY = 'SELECT_CITY'
}

export interface FetchCityListAction {
    type: UserSagaActionsEnum.FETCH_CITY_LIST,
    payload: string
}

export interface PushCityAction {
    type: UserSagaActionsEnum.PUSH_CITY,
    payload: ICity
}

export interface DeleteCityAction {
    type: UserSagaActionsEnum.DELETE_CITY,
    payload: ICity
}

export interface SelectCityAction {
    type: UserSagaActionsEnum.SELECT_CITY,
    payload: ICity
}