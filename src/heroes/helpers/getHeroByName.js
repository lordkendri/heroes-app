import { heroes } from "../data/heroes";

export const getHeroByName = (name = '') => {

    name = name.toLocaleLowerCase().trim();

    if (name.length === 0) return []

    return heroes.filter(

        //Todos los superheroes incluidos en name, hacerles un localelowercase
        hero => hero.superhero.toLocaleLowerCase().includes(name)
    );
};