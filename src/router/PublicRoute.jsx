import { useContext } from "react";
import { Navigate } from 'react-router-dom';

import { AuthContext } from "../auth";


export const PublicRoute = ({ children }) => {

    //? Extrae el logged del useContext
    const { logged } = useContext(AuthContext);

    return (!logged)
        ? children
        : <Navigate to="/marvel" />
}
