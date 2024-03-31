// components/PasswordForm.js
import React, { useState } from 'react';
import { usePasswordContext } from '../contexts/PasswordContext';

const PasswordForm = () => {
  const { addPassword } = usePasswordContext();
  const [title, setTitle] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addPassword(title, password);
    setTitle('');
    setPassword('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} required />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
      <button type="submit">Add Password</button>
    </form>
  );
};

export default PasswordForm;
