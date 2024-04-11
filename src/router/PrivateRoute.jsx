import { useContext } from "react";
import { Navigate, useLocation } from 'react-router-dom';

import { AuthContext } from "../auth";


export const PrivateRoute = ({ children }) => {

    //? Extrae el logged del useContext
    const { logged } = useContext(AuthContext);

    const {pathname, search} = useLocation();
    // console.log(location);

    // * almacena en el local storage en una variable llamada lastpath que contenga
    // *la ultima busqueda 
    const lastPath = pathname + search;
    localStorage.setItem('lastpath', lastPath)

    // *Si esta logeado entra en los componentes hijos, sino navega de vuetla a logging
    return (logged)
        ? children
        : <Navigate to="/login" />
}

