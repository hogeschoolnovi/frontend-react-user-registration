import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

// STAPPENPLAN REGISTREREN (1)
// - [x] Installeer axios
// - [x] Importeer axios
// - [ ] Maak een asynchrone functie
// - [ ] Maak een try / catch blok
// - [ ] In de try: maak een POST request naar het eindpoint: http://localhost:3000/register
// - [ ] Een POST request krijgt altijd de url en het data object mee (in dit geval minimaal email en wachtwoord)
// - [ ] Laat de gebruiker weten dat het registeren is gelukt
// - [ ] Stuur de gebruiker na twee seconden door naar het inlog-formulier
// - [ ] Puntjes op de i: error en laad-tijden inplemententeren

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