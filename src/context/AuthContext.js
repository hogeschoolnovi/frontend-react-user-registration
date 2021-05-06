import React, { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext({});

// STAPPENPLAN CONTEXT INRICHTEN (3)
// - [x] Bedenk welke data je in de context beschikbaar moet stellen
// - [x] Maak de lege functies voor login en logOut
// - [x] Maak de state aan voor de gebruikersdata en de statusdata (user => null en status => 'pending')
// - [x] Maak ook alvast een useEffect functie die de status op 'done' zet als de app gerefreshed wordt (mounting cycle)
// - [x] Zorg ervoor dat we alleen de applicatie (dus de children) laten zien als de status op 'done' staat
// - [x] Plaats de state en lege functies in het data object

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

  // STAPPENPLAN CONTEXT LOGIN LOGICA (6)
  // 1. [x] Zorg ervoor dat de inlogfunctie uit de context de JWT token kan ontvangen
  // 2. [x] Zet de token in de local storage
  // 3. [ ] Haal alle belangrijke informatie uit de token (dit is voor iedere situatie anders! Sommige backends sturen direct de gebruikersdata mee terug!)
  //    - [ ] Installeer jwt-decode
  //    - [ ] Importeer jwt-decode
  //    - [ ] Decode de token en en haal de user id eruit (die hebben we in ons geval nodig voor de gebruikersdata)
  // 4. [ ] Haal de gebruikersgegevens op
  //    - [ ] Importeer axios
  //    - [ ] Maak een aparte asynchrone functie (deze hebben we straks vaker nodig!)
  //    - [ ] Roep die functie aan vanuit de login functie
  //    - [ ] Maak een try / catch blok
  //    - [ ] In de try: maak een axios GET request naar het eindpoint http://localhost:3000/600/users/${id} en stuur de token mee
  //    - [ ] De data die we terugkrijgen zetten we in de state, en daarmee ook in de context (user: al die data en status: 'done')
  //    - [ ] Link gebruiker door naar de profielpagina

  function login(jwtToken) {
    localStorage.setItem('token', jwtToken);
  }

  function logout() {
    console.log('logout!');
  }

  // We hebben de gebruikersdata nodig, functies voor in- en uitloggen, de status van data-ophalen en, mocht het fout gaan, errors!
  // Omdat authState onderdeel willen maken van het data object (en geen object in een object) gebruiken we de spread-operator (...)
  const data = {
    ...authState,
    login: login,
    logout: logout,
  };

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