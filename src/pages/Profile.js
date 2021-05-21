import React, { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { AuthContext } from '../context/AuthContext';

// STAPPENPLAN GEBRUIKERSDATA UIT CONTEXT HALEN (7)
// - [x] Importeeer de useContext functie en AuthContext
// - [x] Destucture daar het user object uit
// - [x] Log het user object
// - [x] Als er data is, geef die dan weer op de pagina (dus inclusief impliciete check!)

// STAPPENPLAN BESCHERMDE DATA OPHALEN (8)
// - [x] Om de data straks ergens op te slaan hebben we state nodig, dus maak een een stukje state aan
// - [x] De data moet worden opgehaald zodra de pagina geladen is, dus hier hebben we useEffect voor nodig:
//    - [x] Importeer useEffect
//    - [x] Schrijf de useEffect functie en geef de lege dependency array mee
// - [ ] Om data op te halen hebben we een asynchrone functie nodig, dus:
//    - [x] Importeer axios
//    - [x] Maak een asynchrone functie in de useEffect en roep hem ook direct aan
//    - [x] Maak een try / catch blok
//    - [x] Om beschermde data op te halen hebben we de token nodig! Haal 'm uit de local storage
//    - [x] In de try: maak een GET request naar het beveiligde eindpoint: http://localhost:3000/660/private-content
//    - [x] Een GET request krijgt altijd de url en het config object mee (waarin je request headers - de token! - meegeeft)
//    - [x] Bekijk de response. Als het succesvol was, plaats dan de response in de state
// - [ ] Geef de data weer op de pagina (inclusief impliciete check!)
// - Puntjes op de i: error en laad-tijden inplemententeren (maar dit kun je inmiddels zelf!)

function Profile() {
  const [privateContent, setPrivateContent] = useState({});

  const { user } = useContext(AuthContext);
  console.log(user); // geeft { user: { username: 'string waarde', email: 'string waarde', id: 'string waarde', country: 'string waarde' }

  useEffect(() => {
    const token = localStorage.getItem('token');
    
    async function getPrivateContent() {
      try {
        const result = await axios.get('http://localhost:3000/660/private-content', {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          }
        });

        console.log(result.data);
        setPrivateContent(result.data);
      } catch(e) {
        console.error(e);
      }
    }

    getPrivateContent();
  }, []);

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