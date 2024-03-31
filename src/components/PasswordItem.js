// components/PasswordItem.js
import React, { useState } from 'react';
import { usePasswordContext } from '../contexts/PasswordContext';

const PasswordItem = ({ index, title: initialTitle, password: initialPassword }) => {
  const { deletePassword, editPassword } = usePasswordContext();
  const [title, setTitle] = useState(initialTitle);
  const [password, setPassword] = useState(initialPassword);
  const [isEditing, setIsEditing] = useState(false);

  const handleDelete = () => {
    deletePassword(index);
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    editPassword(index, title, password);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setTitle(initialTitle);
    setPassword(initialPassword);
    setIsEditing(false);
  };

  if (isEditing) {
    return (
      <form onSubmit={handleSubmit}>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        <button type="submit">Save</button>
        <button type="button" onClick={handleCancel}>Cancel</button>
      </form>
    );
  }

  return (
    <div>
      <p>Title: {title}</p>
      <p>Password: {password}</p>
      <button onClick={handleDelete}>Delete</button>
      <button onClick={handleEdit}>Edit</button>
    </div>
  );
};

export default PasswordItem;
