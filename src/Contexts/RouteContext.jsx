import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

export const RouteContext = React.createContext();

const AppRoutes = ({ children }) => {

    // list of pages
    const pages = [
        {
            name: "Get Started",
            path: "/get-started",
            element: null,
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
                <Routes>
                    {pages.map(page => <Route path={page.path} element={page.element} />)}
                </Routes>
            </Router>
        </RouteContext.Provider>
    )
}

export default AppRoutes;