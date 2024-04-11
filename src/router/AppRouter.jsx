import { Routes, Route } from "react-router-dom";

import { LoginPage } from "../auth";
import { HeroesRoutes } from "../heroes";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";


export const AppRouter = () => {
    return (
        <>
            <Routes>

                {/* Rutas Publicas  */}
                <Route path="/login" element={
                    <PublicRoute>
                        <LoginPage />
                    </PublicRoute>
                } />

                {/* <Route path="login" element={<LoginPage />} /> */}

                {/* De esta forma hacemos que lo que este dentro de <HeroesRoutes />>
                sea una ruta privada 'ver el PrivateRoute component' */}
                <Route path="/*" element={
                    <PrivateRoute>
                        <HeroesRoutes />
                    </PrivateRoute>
                } />

                {/* Si no existe un path predefinido que redireccione a HeroesRoutes */}
                {/* <Route path="/*" element={<HeroesRoutes/>} /> */}

            </Routes>

        </>
    )
}
