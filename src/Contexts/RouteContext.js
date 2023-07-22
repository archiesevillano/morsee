import React, { useState } from 'react';

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
        <RouteContext.Provider>
            {children}
        </RouteContext.Provider>
    )
}

export default AppRoutes;