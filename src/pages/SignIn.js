import React, { useContext } from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

// STAPPENPLAN CONTEXT TESTEN (4)
// - [x] Importeer de AuthContext in een component die de data zal gaan gebruiken
// - [x] Bekijk hoe de data in de context eruit ziet doormiddel van alles = useContext(AuthContext) en console.log dit!
// - [x] Welke onderdelen zie je in de console?

// STAPPENPLAN INLOGGEN (5)
// - [x] Importeer axios
// - [ ] Maak een asynchrone functie
// - [ ] Maak een try / catch blok
// - [ ] In de try: maak een POST request naar het eindpoint: http://localhost:3000/login
// - [ ] Een POST request krijgt altijd de url en het data object mee (in dit geval alleen email en wachtwoord)
// - [ ] Bekijk de response. Als het succesvol was, dan:
// - [ ] Moet de JWT worden doorgegeven aan de context vanuit hier:
//    - [ ] Importeeer useContext en AuthContext
//    - [ ] Destructure daar de login functie uit
//    - [ ] Roep deze functie aan als het inloggen succesvol was en geef de JWT token daaraan mee
// - Wanneer alles in de context goed gaat, zullen we ook vanuit daar de gebruiker doorlinken naar de profielpagina.
// - Puntjes op de i: error en laad-tijden inplemententeren (maar dit kun je inmiddels zelf!)

function SignIn() {
  const { handleSubmit, register } = useForm();
  const alles = useContext(AuthContext);
  console.log(alles); // geeft een object met vier keys: login, logout, status en user

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