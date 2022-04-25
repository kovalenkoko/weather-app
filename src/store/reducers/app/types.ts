export interface AppState {
    loading: boolean,
    error: string
}

export enum AppActionsEnum {
    SET_LOADING = 'SET_LOADING',
    SET_ERROR = 'SET_ERROR'
}

export interface SetLoadingAction {
    type: AppActionsEnum.SET_LOADING,
    payload: boolean
}

export interface SetErrorAction {
    type: AppActionsEnum.SET_ERROR,
    payload: string
}

export type AppAction = SetLoadingAction | SetErrorAction
