import React, { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext({});

// STAPPENPLAN CONTEXT INRICHTEN (3)
// - [x] Bedenk welke data je in de context beschikbaar moet stellen
// - [x] Maak de lege functies voor login en logOut
// - [x] Maak de state aan voor de gebruikersdata en de statusdata (user => null en status => 'pending')
// - [x] Maak ook alvast een useEffect functie die de status op 'done' zet als de app gerefreshed wordt (mounting cycle)
// - [x] Zorg ervoor dat we alleen de applicatie (dus de children) laten zien als de status op 'done' staat
// - [ ] Plaats de state en lege functies in het data object

function AuthContextProvider({ children }) {
  const [ authState, setAuthState ] = useState({
    user: null,
    status: 'pending',
  })

  useEffect(() => {
    // hier gaan we later checken of er toevallig nog een ingelogde gebruiker is, zodat we opnieuw gegevens kunnen ophalen
    // maar voor doen we dat niet, dus zetten we de status op 'done'
    setAuthState({
      user: null,
      status: 'done',
    })
  }, []);

  function login() {
    console.log('login!');
  }

  function logout() {
    console.log('logout!');
  }

  // We hebben de gebruikersdata nodig, functies voor in- en uitloggen, de status van data-ophalen en, mocht het fout gaan, errors!
  const data = {};

  return (
    <AuthContext.Provider value={data}>
      {authState.status === 'pending'
        ? <p>Loading...</p>
        : children
      }
    </AuthContext.Provider>
  );
}

export default AuthContextProvider;

// STAPPENPLAN CONTEXT KLAARZETTEN (2)
// 0. [x] AuthContext.js bestand aanmaken
// 1. [x] AuthContext maken met createContext
// 2. [x] AuthContextProvider functie component bouwen met daarin:
//    - [x] De property children
//    - [x] Het echte AuthContext.Provider component
//    - [x] Een leeg data object
// 3. [x] Geef het data object mee via de value={} property in de .Provider
// 4. [x] Exporteer zowel de Context als het zelfgemaakte Provider component
// 5. [x] Importeer het zelfgemaakte Provider component in index.js en wikkel deze om <App> heen