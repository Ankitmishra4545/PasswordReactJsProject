// components/PasswordList.js
import React, { useState } from 'react';
import PasswordItem from './PasswordItem';
import { usePasswordContext } from '../contexts/PasswordContext';

const PasswordList = () => {
  const { passwords, searchPasswords } = usePasswordContext();
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = () => {
    searchPasswords(searchQuery);
  };

  return (
    <div>
      <h2>All Passwords</h2>
      <input
        type="text"
        placeholder="Search..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      {passwords.map((password, index) => (
        <PasswordItem key={index} index={index} title={password.title} password={password.password} />
      ))}
    </div>
  );
};

export default PasswordList;
