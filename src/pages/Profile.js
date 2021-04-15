import React from 'react';
import { Link } from 'react-router-dom';

function Profile() {
  return (
    <>
      <h1>Profielpagina</h1>
      <h2>Gegevens</h2>
      <p><strong>Gebruikersnaam:</strong> novaeeken</p>
      <p><strong>Email:</strong> nova@gmail.com</p>
      <h2>Afgeschermde content voor ingelogde gebruikers</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab alias cum debitis dolor dolore fuga id molestias qui quo unde?</p>
      <p>Terug naar de <Link to="/">Homepagina</Link></p>
    </>
  );
}

export default Profile;