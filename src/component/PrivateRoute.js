import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import {useStore} from "../utils/useStore";
// import { isLogin } from '../utils';

export const PrivateRoute = ({component: Component, ...rest}) => {
  const store = useStore();
  return (

    // Show the component only when the user is logged in
    // Otherwise, redirect the user to /signin page
    <Route {...rest} render={props => (
        store.isLoggedIn ?
        <Component {...props} />
        : <Redirect to="/login" />
    )} />
  );
};
