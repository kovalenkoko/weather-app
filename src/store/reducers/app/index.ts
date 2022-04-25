import {AppAction, AppActionsEnum, AppState} from "./types";

const initialState: AppState = {
    loading: false,
    error: ''
}

export default function appReducer(state = initialState, action: AppAction): AppState {
    switch (action.type) {
        case AppActionsEnum.SET_LOADING:
            return {...state, loading: action.payload}
        case AppActionsEnum.SET_ERROR:
            return {...state, error: action.payload}
        default:
            return state
    }
}