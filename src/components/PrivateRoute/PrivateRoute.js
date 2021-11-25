import React from 'react';
import { Redirect, Route } from 'react-router';
import useAuth from '../../hooks/useAuth';

const PrivateRoute = ({ children, ...rest }) => {
    const {user}=useAuth({})
    return (
        // <Route>
        //     <h1>This is Private Route</h1>
        //     {...rest}
        //     render={({ location }) => user.email ?
        //         children : <Redirect
        //             to={{
        //                 pathname: '/login',
        //                 state: { from: location }
        //         }}
        //         ></Redirect>}
        // </Route>
        <Route
            {...rest}
            render={({ location }) =>
                user.email ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
};

export default PrivateRoute;