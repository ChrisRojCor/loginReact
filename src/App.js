import React, { useState } from 'react';
import LoginForm from './components/LoginForm';
import Welcome from './components/Welcome';

const App = () => {
  const [token, setToken] = useState('');

  const handleLogin = (token) => {
    setToken(token);
  };

  return (
    <div class="login" className="App">
      <h1>Inicio de Sesión</h1>
      {token ? (
        <Welcome username="Usuario" />
      ) : (
        <LoginForm onLogin={handleLogin} />
      )}
    </div>
  );
};

export default App;
