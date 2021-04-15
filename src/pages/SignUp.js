import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

function SignUp() {
  const { handleSubmit, register } = useForm();

  function onSubmit(data) {
    console.log(data);
  }

  return (
    <>
      <h1>Registreren</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab alias cum debitis dolor dolore fuga id molestias qui quo unde?</p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="email-field">
          Email:
          <input
            type="email"
            id="email-field"
            name="email"
            {...register("email")}
          />
        </label>

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
          Maak account aan
        </button>
      </form>
      <p>Heb je al een account? Je kunt je <Link to="/signin">hier</Link> inloggen.</p>
    </>
  );
}

export default SignUp;