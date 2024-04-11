import { heroes } from '../data/heroes';

export const getHeroesByPublischer = (publisher) => {

    const validPublischers = ['DC Comics', 'Marvel Comics'];

    //Si el publisher proporcionado no esta incluido en el arreglo tira un error.
    if( !validPublischers.includes(publisher) ){
        throw new Error (`${publisher} is not a valid publisher`);
    };

    //Sino retorna el filtro hecho con el pulisher proporcionado
    return heroes.filter( heroe => heroe.publisher === publisher );
};