import React, {FC} from 'react';
import {Route, Routes } from 'react-router-dom';
import {routes} from '../router'
import NotFound from "../pages/NotFound";

const AppRouter: FC = () => {
    return (
        <Routes>
            {routes.map(route =>
                <Route
                    key={route.path}
                    path={route.path}
                    element={<route.element/>}
                />
            )}
            <Route
                path="*"
                element={<NotFound/>}
            />
        </Routes>
    );
};

export default AppRouter