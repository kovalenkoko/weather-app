import {useDispatch} from "react-redux";
import {bindActionCreators} from "redux";
import {UserSagaActionCreators} from "../store/sagas/user/action-creators";
import {WeatherSagaActionCreators} from "../store/sagas/weather/action-creators";

export const useActions = () => {
    const dispatch = useDispatch()
    return bindActionCreators({...UserSagaActionCreators, ...WeatherSagaActionCreators}, dispatch)
}