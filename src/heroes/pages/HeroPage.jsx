import { useMemo } from "react";
import { useParams, Navigate, useNavigate } from "react-router-dom"
import { getHeroById } from "../helpers";


export const HeroPage = () => {

  const { id } = useParams();
  const navigate = useNavigate();

  //Cuando el id cambia se ejecuta el useMemo
  //Esto evital a redibujacion de los componentes
  const hero =  useMemo (() => getHeroById(id), [id]);
  

  const onNavigateBack = () => {
    //Regresa a la pestaña anterior
    navigate(-1)
  };

  if (!hero) {
    return <Navigate to={"/"} />
    // return <>404 Not Found</>
  };


  // console.log(hero)

  //El id viene de hero/id del AppRouter
  // console.log(params);

  return (
    <div className="row mt-5">
      <div className="col-4">

        <img
          src={`/assets/heroes/${id}.jpg`}
          alt={hero.superhero}
          className="img-thumbnail animate__animated animate__fadeInLeft"
        />

      </div>

      <div className="col-8 animate__animated animate__fadeInRight">
        <h3>{hero.superhero}</h3>

        <ul className="list-group list-group-flush">

          <li className="list-group-item"><b>Alter Ego: </b>{hero.alter_ego}</li>
          <li className="list-group-item"><b>Publisher: </b>{hero.publisher}</li>
          <li className="list-group-item"><b>First appearance: </b>{hero.first_appearance}</li>

        </ul>

        <h5 className="mt-3">Characters</h5>
        <p>{hero.characters}</p>

        <button
          className="btn btn-outline-danger"
          onClick={onNavigateBack}
        >
          Back
        </button>
      </div>

    </div>
  )
}
