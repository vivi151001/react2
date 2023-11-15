import React, { useState } from 'react';
import { useAuth } from '../ruteo/AuthContext'; // (7). Importando contexto
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from "react-toastify";
function LoginForm() {
  
  const { signIn } = useAuth();                 // (7). Usando el contexto

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  
  const navigate = useNavigate();


  const handleSignIn = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError('Por favor, completa ambos campos.');
      return;
    }

    try {
      await signIn(email, password);
      // Inicio de sesión exitoso: limpiar el error
      setError(null);
      navigate('/sistema-crud'); // Redirigir a ruta /sistema-crud
    } catch (error) {
      setError('Error al iniciar sesión: ' + error.message);
    }
  }

  return (

    <div className='container text-center' id='none'>
      <div className='card bs-danger p-3 mt-3'>
        
        <ToastContainer/>

        <div className='col-md-12 p-2'>
          <div className='card mb-4'>
            <h2>Iniciar Sesión</h2>
          </div>
        </div>

        <form className='card card-body' onSubmit={handleSignIn}>

        <div className='form-group input-group'>
          <div className='input-group-text bd-light'>
            <i className='material-icons'>group_add</i>
          </div>
          <input className='form-control float-start' placeholder='Email'  
            type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        
        <div className='form-group input-group'>
          <div className='input-group-text bd-light'>
            <i className='material-icons'>star_half</i>
          </div>
          <input className='form-control float-start' placeholder='Contraseña'  
            type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>

          
        <button className='btn btn-primary btn-block' type="submit">
        Iniciar Sesión
        </button>

        </form>

      </div>
    </div>

  );
}

export default LoginForm;



/*
const handleSignIn = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError('Por favor, completa ambos campos.');
      return;
    }

    try {
      await signIn(email, password);
      // Inicio de sesión exitoso: limpiar el error
      setError(null);
      navigate('/sistema-crud'); // Redirigir a ruta /sistema-crud
    } catch (error) {
      setError('Error al iniciar sesión: ' + error.message);
    }
  }
*/
