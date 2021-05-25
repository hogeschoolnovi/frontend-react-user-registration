# Opdrachtbeschrijving

## Inleiding
Tot nu waren al jouw apps openlijk toegankelijk en daar ga je nu maar eens verandering in brengen. Het is tijd om authenticatie te implementeren! Dit kun je doen met behulp van jouw eigen project, of door dit project als basis te gebruiken.

Dit project bevat vier pagina's met routing:
* Home pagina - bereikbaar op `/`
* Profiel pagina - bereikbaar op `/profile`
* Registratiepagina (met daarop een react-hook-form registratieformulier) - bereikbaar op `/signup`
* Inlog pagina (met daarop een react-hook-form inlog-formulier) - bereikbaar op `/signin`

Om het gebruik van een backend te veinsen, gebruiken we een nep database server. Dit is niets meer dan een javascript projectje die zich, doormiddel van een npm package genaamd `json-server-auth`, gedraagt als een backend met REST endpoints wanneer je het project runt. 
Je kunt deze nep-server [hier](https://github.com/hogeschoolnovi/frontend-fake-server) clonen. In de README staat beschreven hoe je de server kunt starten en welke endpoints er beschikbaar zijn.

![screenshot](./src/assets/screenshot.png)

## De applicatie starten
**_Let op_: zorg eerst dat je de nep-server hebt draaien voor je deze applicatie start.**

Als je het project gecloned hebt naar jouw locale machine, installeer je eerst de node_modules door het volgende commando in de terminal te runnen:

`npm install`

Wanneer dit klaar is, kun je de applicatie starten met behulp van:

`npm start`

of gebruik de WebStorm knop (npm start). Open http://localhost:3001 om de pagina in de browser te bekijken. Elke keer als je een bestand opslaat, zullen de wijzigingen te zien zijn op de webpagina.

## Functionaliteit
Het implementeren van authenticatie vereist de volgende stappen:
1. Het implementeren van registratie doormiddel van het registratieformulier
2. Het _aanmaken_ van de Context en ContextProvider
3. Het _inrichten_ van de Context met de benodigde functies en state variabelen
4. Het _testen_ van de Context
5. Het implementeren van inloggen doormiddel van het inlogformulier
6. Het implementeren van login-logica in de context
7. Gebruikersdata uit de context gebruiken
8. Beschermde data ophalen
9. Data uit de context persisten op refresh

**Bonus**: het implementeren van uitloggen en het afschermen van routes kun je zelf maken!

## Uitgewerkte stappenplannen en antwoordbranches
Het is mogelijk om onderstaande stappenplannen te volgen, maar het is uitdagender om je eigen stappenplan te maken!

### 1. Registreren
Bekijk hier de [Githistory](https://github.githistory.xyz/hogeschoolnovi/frontend-react-user-registration/blob/uitwerkingen-1-registreren/src/pages/SignUp.js) of de volledige [antwoordbranch](https://github.com/hogeschoolnovi/frontend-react-user-registration/tree/uitwerkingen-1-registreren).

```
- [ ] Installeer axios
- [ ] Importeer axios
- [ ] Maak een asynchrone functie
- [ ] Maak een try / catch blok
- [ ] In de try: maak een POST request naar het eindpoint: http://localhost:3000/register
- [ ] Een POST request krijgt altijd de url en het data object mee (in dit geval minimaal email en wachtwoord)
- [ ] Laat de gebruiker weten dat het registeren is gelukt
- [ ] Stuur de gebruiker na twee seconden door naar het inlog-formulier
- [ ] Puntjes op de i: error en laad-tijden implemententeren
```

### 2. Context en ContextProvider aanmaken
Bekijk hier de [Githistory](https://github.githistory.xyz/hogeschoolnovi/frontend-react-user-registration/blob/uitwerkingen-2-context-aanmaken/src/context/AuthContext.js) of de volledige [antwoordbranch](https://github.com/hogeschoolnovi/frontend-react-user-registration/tree/uitwerkingen-2-context-aanmaken).

```
- [ ] AuthContext.js bestand aanmaken
- [ ] AuthContext maken met createContext
- [ ] AuthContextProvider functie component bouwen met daarin:
   - [ ] De property children
   - [ ] Het echte AuthContext.Provider component
   - [ ] Een leeg data object
- [ ] Geef het data object mee via de value={} property in de .Provider
- [ ] Exporteer zowel de Context als het zelfgemaakte Provider component
- [ ] Importeer het zelfgemaakte Provider component in index.js en wikkel deze om <App> heen
```

### 3. Context inrichten
Bekijk hier de [Githistory](https://github.githistory.xyz/hogeschoolnovi/frontend-react-user-registration/blob/uitwerkingen-3-context-inrichten/src/context/AuthContext.js) of de volledige [antwoordbranch](https://github.com/hogeschoolnovi/frontend-react-user-registration/tree/uitwerkingen-3-context-inrichten).

```
- [ ] Bedenk welke data je in de context beschikbaar moet stellen
- [ ] Maak de lege functies voor login en logOut
- [ ] Maak de state aan voor de gebruikersdata en de statusdata (user => null en status => 'pending')
- [ ] Maak ook alvast een useEffect functie die de status op 'done' zet als de app gerefreshed wordt (mounting cycle)
- [ ] Zorg ervoor dat we alleen de applicatie (dus de children) laten zien als de status op 'done' staat
- [ ] Plaats de state en lege functies in het data object
```

### 4. Context testen
Bekijk hier de [Githistory](https://github.githistory.xyz/hogeschoolnovi/frontend-react-user-registration/blob/uitwerkingen-4-context-testen/src/pages/SignIn.js) of de volledige [antwoordbranch](https://github.com/hogeschoolnovi/frontend-react-user-registration/tree/uitwerkingen-4-context-testen).

```
- [ ] Importeer de AuthContext in een component die de data zal gaan gebruiken
- [ ] Bekijk hoe de data in de context eruit ziet doormiddel van alles = useContext(AuthContext) en console.log dit!
- [ ] Welke onderdelen zie je in de console?
```

### 5. Inloggen
Bekijk hier de [Githistory](https://github.githistory.xyz/hogeschoolnovi/frontend-react-user-registration/blob/uitwerkingen-5-inloggen/src/pages/SignIn.js) of de volledige [antwoordbranch](https://github.com/hogeschoolnovi/frontend-react-user-registration/tree/uitwerkingen-5-inloggen).

```
- [ ] Importeer axios
- [ ] Maak een asynchrone functie
- [ ] Maak een try / catch blok
- [ ] In de try: maak een POST request naar het eindpoint: http://localhost:3000/login
- [ ] Een POST request krijgt altijd de url en het data object mee (in dit geval alleen email en wachtwoord)
- [ ] Bekijk de response. Als het succesvol was, dan:
- [ ] Moet de JWT worden doorgegeven aan de context vanuit hier:
   - [ ] Importeeer useContext en AuthContext
   - [ ] Destructure daar de login functie uit
   - [ ] Roep deze functie aan als het inloggen succesvol was en geef de JWT token daaraan mee
- Wanneer alles in de context goed gaat, zullen we ook vanuit daar de gebruiker doorlinken naar de profielpagina.
- Puntjes op de i: error en laad-tijden inplemententeren (maar dit kun je inmiddels zelf!)
```

### 6. Context logica voor inloggen
Bekijk hier de [Githistory](https://github.githistory.xyz/hogeschoolnovi/frontend-react-user-registration/blob/uitwerkingen-6-context-logica-inloggen/src/context/AuthContext.js) of de volledige [antwoordbranch](https://github.com/hogeschoolnovi/frontend-react-user-registration/tree/uitwerkingen-6-context-logica-inloggen).

```
- [ ] Zorg ervoor dat de inlogfunctie uit de context de JWT token kan ontvangen
- [ ] Zet de token in de local storage
- [ ] Haal alle belangrijke informatie uit de token (dit is voor iedere situatie anders! Sommige backends sturen direct de gebruikersdata mee terug!)
   - [ ] Installeer jwt-decode
   - [ ] Importeer jwt-decode
   - [ ] Decode de token en en haal de user id eruit (die hebben we in ons geval nodig voor de gebruikersdata)
-  [ ] Haal de gebruikersgegevens op
   - [ ] Importeer axios
   - [ ] Maak een aparte asynchrone functie (deze hebben we straks vaker nodig!)
   - [ ] Roep die functie aan vanuit de login functie
   - [ ] Maak een try / catch blok
   - [ ] In de try: maak een axios GET request naar het eindpoint http://localhost:3000/600/users/${id} en stuur de token mee
   - [ ] De data die we terugkrijgen zetten we in de state, en daarmee ook in de context (user: al die data en status: 'done')
   - [ ] Link gebruiker door naar de profielpagina
```

### 7. Gebruikersdata uit Context gebruiken
Bekijk hier de [Githistory](https://github.githistory.xyz/hogeschoolnovi/frontend-react-user-registration/blob/uitwerkingen-7-gebruikersdata-uit-context/src/pages/Profile.js) of de volledige [antwoordbranch](https://github.com/hogeschoolnovi/frontend-react-user-registration/tree/uitwerkingen-7-gebruikersdata-uit-context).

```
- [ ] Importeeer de useContext functie en AuthContext
- [ ] Destucture daar het user object uit
- [ ] Log het user object
- [ ] Als er data is, geef die dan weer op de pagina (dus inclusief impliciete check!)
```

### 8. Beschermde data ophalen
Bekijk hier de [Githistory](https://github.githistory.xyz/hogeschoolnovi/frontend-react-user-registration/blob/uitwerkingen-8-beschermde-data-ophalen/src/pages/Profile.js) of de volledige [antwoordbranch](https://github.com/hogeschoolnovi/frontend-react-user-registration/tree/uitwerkingen-8-beschermde-data-ophalen).

```
- [ ] Om de data straks ergens op te slaan hebben we state nodig, dus maak een een stukje state aan
- [ ] De data moet worden opgehaald zodra de pagina geladen is, dus hier hebben we useEffect voor nodig:
   - [ ] Importeer useEffect
   - [ ] Schrijf de useEffect functie en geef de lege dependency array mee
- [ ] Om data op te halen hebben we een asynchrone functie nodig, dus:
   - [ ] Importeer axios
   - [ ] Maak een asynchrone functie in de useEffect en roep hem ook direct aan
   - [ ] Maak een try / catch blok
   - [ ] Om beschermde data op te halen hebben we de token nodig! Haal 'm uit de local storage
   - [ ] In de try: maak een GET request naar het beveiligde eindpoint: http://localhost:3000/660/private-content
   - [ ] Een GET request krijgt altijd de url en het config object mee (waarin je request headers - de token! - meegeeft)
   - [ ] Bekijk de response. Als het succesvol was, plaats dan de response in de state
- [ ] Geef de data weer op de pagina (inclusief impliciete check!)
- Puntjes op de i: error en laad-tijden inplemententeren (maar dit kun je inmiddels zelf!)
```

### 9. Gebruikersdata uit context persisten op refresh
Bekijk hier de [Githistory](https://github.githistory.xyz/hogeschoolnovi/frontend-react-user-registration/blob/uitwerkingen-9-persist-op-refresh/src/context/AuthContext.js) of de volledige [antwoordbranch](https://github.com/hogeschoolnovi/frontend-react-user-registration/tree/uitwerkingen-9-persist-op-refresh).

```
- [ ] Om de data straks ergens op te slaan hebben we state nodig, dus maak een een stukje state aan
- [ ] De data moet worden opgehaald zodra de pagina geladen is, dus hier hebben we useEffect voor nodig:
   - [ ] Importeer useEffect
   - [ ] Schrijf de useEffect functie en geef de lege dependency array mee
- [ ] Om data op te halen hebben we een asynchrone functie nodig, dus:
   - [ ] Importeer axios
   - [ ] Maak een asynchrone functie in de useEffect en roep hem ook direct aan
   - [ ] Maak een try / catch blok
   - [ ] Om beschermde data op te halen hebben we de token nodig! Haal 'm uit de local storage
   - [ ] In de try: maak een GET request naar het beveiligde eindpoint: http://localhost:3000/660/private-content
   - [ ] Een GET request krijgt altijd de url en het config object mee (waarin je request headers - de token! - meegeeft)
   - [ ] Bekijk de response. Als het succesvol was, plaats dan de response in de state
- [ ] Geef de data weer op de pagina (inclusief impliciete check!)
- Puntjes op de i: error en laad-tijden inplemententeren (maar dit kun je inmiddels zelf!)
```