import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

export const LoginPage = () => {

  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const onLogin = () => {

    // ! Obtiene el valor en lastpath del localStorage
    const lastpath = localStorage.getItem('lastpath') || '/';

    login('Kendri Valdez');
  
    //? Navega al ultimo path
    navigate(lastpath, {
      // Reemplaza la ruta actual por login.
      replace: true
    });
  }

  return (
    <div className='container mt-5'>
      <h1>Login Page</h1>
      <hr />

      <button
        className='btn btn-primary'
        onClick={onLogin}
      >
        Login
      </button>
    </div>
  )
}
