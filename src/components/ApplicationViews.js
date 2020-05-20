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
            <Route
                exact
                path='/myitinerary'
                render={() => {
                    return "My itinerary";
                }}
            />
            <Route
                exact
                path='/login'
                render={() => {
                    return "Login";
                }}
            />
            <Route
                exact
                path='/register'
                render={() => {
                    return "Register";
                }}
            />
            <Route
                exact
                path='/logout'
                render={() => {
                    return "Logout";
                }}
            />
        </>
    )
}

export default ApplicationViews