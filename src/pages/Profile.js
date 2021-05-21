import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

// STAPPENPLAN GEBRUIKERSDATA UIT CONTEXT HALEN (7)
// - [x] Importeeer de useContext functie en AuthContext
// - [x] Destucture daar het user object uit
// - [x] Log het user object
// - [x] Als er data is, geef die dan weer op de pagina (dus inclusief impliciete check!)

function Profile() {
  const { user } = useContext(AuthContext);
  console.log(user); // geeft { user: { username: 'string waarde', email: 'string waarde', id: 'string waarde', country: 'string waarde' }

  return (
    <>
      <h1>Profielpagina</h1>
      <section>
        <h2>Gegevens</h2>
        {user &&
          <>
            <p><strong>Gebruikersnaam:</strong> {user.username}</p>
            <p><strong>Email:</strong> {user.email}</p>
          </>
        }
      </section>
      <section>
        <h2>Afgeschermde content voor ingelogde gebruikers</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab alias cum debitis dolor dolore fuga id molestias qui quo unde?</p>
      </section>
      <p>Terug naar de <Link to="/">Homepagina</Link></p>
    </>
  );
}

export default Profile;