import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Pager from '../components/Pager/Pager';
import GetStarted from '../pages/Get Started/GetStarted';

export const RouteContext = React.createContext();

const AppRoutes = ({ children }) => {

    // list of pages
    const pages = [
        {
            name: "Get Started",
            path: "/",
            element: <GetStarted />,
        },
        {
            name: "Morsee Translator",
            path: "/translator",
            element: null,
        },
        {
            name: "API Documentation",
            path: "/api-documentation",
            element: null,
        },
    ]

    return (
        <RouteContext.Provider value={{ pages }}>
            <Router>
                {children}
                <Pager>
                    <Routes>
                        {pages.map(page => <Route path={page.path} element={page.element} />)}
                    </Routes>
                </Pager>
            </Router>
        </RouteContext.Provider>
    )
}

export default AppRoutes;