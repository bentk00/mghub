import React, {useContext} from "react";
import AuthContext from "../context/AuthContext";
import Redirect from "react-router-dom";
import Route from "react-router-dom";

const PrivateRoute = ({path, component}) => {
    const {isAuthenticated} = useContext(AuthContext);

    return isAuthenticated
        ? (<Route path={path} component = {component}/>)
        : (<Redirect to="/login"/>)

}

export default PrivateRoute;
