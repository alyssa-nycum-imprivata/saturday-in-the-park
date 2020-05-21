import { Route, Redirect } from 'react-router-dom';
import React from 'react';
import Home from './home/Home';
import Register from './auth/Register';
import '../index.css';
import Login from './auth/Login';

const ApplicationViews = (props) => {
    const hasUser = props.hasUser;
    const setUser = props.setUser;

    return (
        <>
            <Route
                exact
                path='/'
                render={(props) => {
                    if (hasUser) {
                        return <Home {...props} />
                    } else {
                        return <Redirect to="/login" />
                    }
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
                render={(props) => {
                    return <Login setUser={setUser} {...props} />;
                }}
            />
            <Route
                exact
                path='/register'
                render={props => {
                    return <Register setUser={setUser} {...props} />;
                }}
            />
        </>
    );
};

export default ApplicationViews;