import React, { useState } from 'react';
import './UserForn.css';

const UserForm = ({ user, onSave, onCancel }) => {
  const [formData, setFormData] = useState(user || {});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData); // Pass the formData to the parent
    setFormData({})
    alert("Data submitted successfully")
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <label>
        First Name:
        <input
          type="text"
          name="firstName"
          value={formData.firstName || ''}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Last Name:
        <input
          type="text"
          name="lastName"
          value={formData.lastName || ''}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Email:
        <input
          type="email"
          name="email"
          value={formData.email || ''}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Department:
        <input
          type="text"
          name="department"
          value={formData.department || ''}
          onChange={handleChange}
        />
      </label>

      <div>
        <button type="submit">Save</button>
        <button type="button" onClick={onCancel}>
          Cancel
        </button>
      </div>
    </form>
  );
};

export default UserForm;
