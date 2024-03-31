
import React from 'react';
import PasswordContextProvider from './contexts/PasswordContext';
import PasswordForm from './components/PasswordForm';
import PasswordList from './components/PasswordList';

function App() {
  return (
    <div className="App">
      <PasswordContextProvider>
        <h1>Password Manager</h1>
        <PasswordForm />
        <PasswordList />
      </PasswordContextProvider>
    </div>
  );
}

export default App;

