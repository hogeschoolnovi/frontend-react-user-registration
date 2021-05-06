import React, { useState } from 'react';
import axios from 'axios';
import { Link, useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';

// STAPPENPLAN REGISTREREN (1)
// - [x] Installeer axios
// - [x] Importeer axios
// - [x] Maak een asynchrone functie
// - [x] Maak een try / catch blok
// - [x] In de try: maak een POST request naar het eindpoint: http://localhost:3000/register
// - [x] Een POST request krijgt altijd de url en het data object mee (in dit geval minimaal email en wachtwoord)
// - [x] Laat de gebruiker weten dat het registeren is gelukt
// - [x] Stuur de gebruiker na twee seconden door naar het inlog-formulier
// - [ ] Puntjes op de i: error en laad-tijden inplemententeren

function SignUp() {
  const [error, setError] = useState('');
  const [registerSuccess, toggleRegisterSuccess] = useState(false);

  const history = useHistory();
  const { handleSubmit, register } = useForm();

  async function onSubmit(data) {
    // omdat onSubmit meerdere keren kan worden aangeroepen, beginnen we altijd met een "schone" lei (geen errors)
    setError('');

    console.log(data);

    try {
      const result = await axios.post('http://localhost:3000/register', {
        email: data.email,
        password: data.password,
        country: 'Nederland',
        username: data.username,
      });

      // als deze console.log wordt uitgevoerd is alles goedgegaan, want we zijn niet naar het catch blok gesprongen
      // in de console zie je de gebruikelijke respons en daarin ook 'status: 201'
      console.log(result);

      toggleRegisterSuccess(true);

      // we willen even wachten met doorlinken zodat de gebruiker de tijd heeft om de succesmelding ook daadwerkelijk te zien
      setTimeout(() => {
        history.push('/signin');
      }, 2000);
    } catch(e) {
      console.error(e);
      // op het error (e) object zit altijd een message property, maar die kan wat abstract zijn. Daarom extra text:
      setError(`Het registeren is mislukt. Probeer het opnieuw (${e.message})`);

      // TIP: Wanneer er echt iets fout gaat, krijg je een 404 error. Wanneer de gebruikersnaam al bestond,
      // krijg je waarschijnlijk een 400 error.Zo kun je hier ook nog invloed uitoefenen op welke error message je laat zien op de gebruiker!
    }
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
        {registerSuccess === true &&  <p>Registeren is gelukt! Je wordt nu doorgestuurd naar de inlog pagina!</p>}
        {error && <p className="error-message">{error}</p>}
      </form>
      <p>Heb je al een account? Je kunt je <Link to="/signin">hier</Link> inloggen.</p>
    </>
  );
}

export default SignUp;