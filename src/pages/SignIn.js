import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

function SignIn() {
  const { handleSubmit, register } = useForm();

  function onSubmit(data) {
    console.log(data);
  }

  return (
    <>
      <h1>Inloggen</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab alias cum debitis dolor dolore fuga id molestias qui quo unde?</p>

      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="username-field">
          Gebruikersnaam:
          <input
            type="text"
            id="username-field"
            name="username"
            {...register("username")}
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