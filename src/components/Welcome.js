import React from 'react';

const Welcome = ({ username }) => {
  return (
    <div>
      <h1>Bienvenido, {username}!</h1>
      <p>Has iniciado sesión correctamente.</p>
    </div>
  );
};

export default Welcome;
