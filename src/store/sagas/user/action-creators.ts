import {DeleteCityAction, FetchCityListAction, PushCityAction, SelectCityAction, UserSagaActionsEnum} from "./types";
import {ICity} from "../../../models/ICity";

export const UserSagaActionCreators = {
    fetchCityList: (cityName: string): FetchCityListAction => ({
        type: UserSagaActionsEnum.FETCH_CITY_LIST,
        payload: cityName
    }),
    pushCity: (city: ICity): PushCityAction => ({
        type: UserSagaActionsEnum.PUSH_CITY,
        payload: city
    }),
    deleteCity: (city: ICity): DeleteCityAction => ({
       type: UserSagaActionsEnum.DELETE_CITY,
       payload: city
    }),
    selectCity: (city: ICity): SelectCityAction => ({
        type: UserSagaActionsEnum.SELECT_CITY,
        payload: city
    }),
}