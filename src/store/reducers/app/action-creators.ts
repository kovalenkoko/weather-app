import {AppActionsEnum, SetErrorAction, SetLoadingAction} from "./types";

export const AppActionCreators = {
    setLoading: (loading: boolean): SetLoadingAction => ({
        type: AppActionsEnum.SET_LOADING,
        payload: loading
    }),
    setError: (error: string): SetErrorAction => ({
        type: AppActionsEnum.SET_ERROR,
        payload: error
    }),
}
