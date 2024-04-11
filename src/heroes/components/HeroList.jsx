import { useMemo } from 'react';
import { getHeroesByPublischer } from '../helpers';
import { HeroCard } from './HeroCard';


export const HeroList = ({ publisher }) => {

    const heroes = useMemo(() => getHeroesByPublischer(publisher), [publisher]);

    return (
        <div className='row rows-cols 1 row-cols-md-3 g-3'>
            {/* Aqui tuve un error interesante al usar {} en la funcion de flecha no retorna pero al usar () si lo hace....  */}
            {heroes.map((hero) => (
                //console.log(hero),
                <HeroCard
                    key={hero.id}
                    // Toma cada una de las properties de hero y las manda 
                    //sin tener que desestructurar
                    {...hero}
                />
            ))}
        </div>
    )
}
