import React from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = props => {
    if (props.guard()) {
        return <Route {...props} />;
    } else {
        return <Redirect to={props.redirect} />
    }
};

export default PrivateRoute;
