import React, { createContext } from 'react';

const AuthContext = createContext({});

function AuthContextProvider({ children }) {
  const data = {};

  return (
    <AuthContext.Provider>
      { children }
    </AuthContext.Provider>
  );
}

// STAPPENPLAN CONTEXT KLAARZETTEN (2)
// 0. [x] AuthContext.js bestand aanmaken
// 1. [x] AuthContext maken met createContext
// 2. [x] AuthContextProvider functie component bouwen met daarin:
//    - [x] De property children
//    - [x] Het echte AuthContext.Provider component
//    - [x] Een leeg data object
// 3. [ ] Geef het data object mee via de value={} property in de .Provider
// 4. [ ] Exporteer zowel de Context als het zelfgemaakte Provider component
// 5. [ ] Importeer het zelfgemaakte Provider component in index.js en wikkel deze om <App> heen