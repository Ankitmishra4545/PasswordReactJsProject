// contexts/PasswordContext.js
import React, { createContext, useState, useContext } from 'react';

const PasswordContext = createContext();

export const usePasswordContext = () => useContext(PasswordContext);

const PasswordContextProvider = ({ children }) => {
  const [passwords, setPasswords] = useState([]);

  const addPassword = (title, password) => {
    setPasswords([...passwords, { title, password }]);
  };

  const deletePassword = (index) => {
    const updatedPasswords = [...passwords];
    updatedPasswords.splice(index, 1);
    setPasswords(updatedPasswords);
  };

  const editPassword = (index, newTitle, newPassword) => {
    const updatedPasswords = [...passwords];
    updatedPasswords[index] = { title: newTitle, password: newPassword };
    setPasswords(updatedPasswords);
  };

  const searchPasswords = (query) => {
    // Filter passwords based on the search query
    // For simplicity, we'll just filter by title
    const filteredPasswords = passwords.filter(password =>
      password.title.toLowerCase().includes(query.toLowerCase())
    );
    // Set the filtered passwords as the new state
    setPasswords(filteredPasswords);
  };

  return (
    <PasswordContext.Provider value={{ passwords, addPassword, deletePassword, editPassword, searchPasswords }}>
      {children}
    </PasswordContext.Provider>
  );
};

export default PasswordContextProvider;
