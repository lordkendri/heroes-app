import { Routes, Route, Navigate } from 'react-router-dom';

import { DcPage, MarvelPage, HeroPage, SearchPage, } from "../pages";
import { Navbar } from "../../ui"   

//Se hace de esta manera para que el Login page no tenga el Navbar, esta es una forma de
//Dividir el direccionamiento sin tener que compartir todos los elementos en el Router principal
export const HeroesRoutes = () => {
    return (
        <>
            <Navbar />

            <div className='container'>

                <Routes>
                    <Route path="marvel" element={<MarvelPage />} />
                    <Route path="dc" element={<DcPage />} />

                    <Route path="search" element={<SearchPage />} />
                    {/*despues de /: se puede mandar un argumento por URL */}
                    <Route path="hero/:id" element={<HeroPage />} />

                    {/* Si no existe un path predefinido que redireccione a Marvel */}
                    <Route path="/" element={<Navigate to='/marvel' />} />


                </Routes>

            </div>

        </>
    )
}
