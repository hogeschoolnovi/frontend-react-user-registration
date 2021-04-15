import React from 'react';
import { useHistory } from 'react-router-dom';

function Header() {
  const history = useHistory();

  return (
    <header>
      <div>
        <button
          type="button"
          onClick={() => history.push('/signin')}
        >
          Log in
        </button>
        <button
          type="button"
          onClick={() => history.push('/signup')}
        >
          Registreren
        </button>
      </div>
    </header>
  );
};

export default Header;