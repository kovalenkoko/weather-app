import React from "react";
import Main from "../pages/Main";
import Settings from "../pages/Settings";

export interface IRoute {
    path: string,
    element: React.ComponentType
}

export enum RouteNames {
    MAIN = '/',
    SETTINGS = '/settings',
}

export const routes: IRoute[] = [
    {path: RouteNames.MAIN, element: Main},
    {path: RouteNames.SETTINGS, element: Settings},
]
