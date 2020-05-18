import { Route } from "react-router-dom";
import React from "react";
import Home from "./home/Home";
import '../index.css'

const ApplicationViews = () => {
    return (
        <>
            <Route
                exact
                path='/'
                render={() => {
                    return <Home />;
                }}
            />
        </>
    )
}

export default ApplicationViews