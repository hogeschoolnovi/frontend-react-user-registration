import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

// STAPPENPLAN CONTEXT TESTEN (4)
// - [x] Importeer de AuthContext in een component die de data zal gaan gebruiken
// - [x] Bekijk hoe de data in de context eruit ziet doormiddel van alles = useContext(AuthContext) en console.log dit!
// - [ ] Welke onderdelen zie je in de console?

function SignIn() {
  const { handleSubmit, register } = useForm();
  const alles = useContext(AuthContext);
  console.log(alles);

  function onSubmit(data) {
    console.log(data);
  }

  return (
    <>
      <h1>Inloggen</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab alias cum debitis dolor dolore fuga id molestias qui quo unde?</p>

      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="email-field">
          Emailadres:
          <input
            type="email"
            id="email-field"
            name="email"
            {...register("email")}
          />
        </label>

        <label htmlFor="password-field">
          Wachtwoord:
          <input
            type="password"
            id="password-field"
            name="password"
            {...register("password")}
          />
        </label>
        <button
          type="submit"
          className="form-button"
        >
          Inloggen
        </button>
      </form>
      <p>Heb je nog geen account? <Link to="/signup">Registreer</Link> je dan eerst.</p>
    </>
  );
}

export default SignIn;