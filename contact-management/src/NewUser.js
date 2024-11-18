import React, { useState } from 'react';

const NewUser = ({ setContacts }) => {
  // State for form inputs
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create a new contact object
    const newContact = { name, email, phone, address };

    // Add new contact to the list by updating state in App.js
    setContacts((prevContacts) => [...prevContacts, newContact]);

    // Clear the form
    setName('');
    setEmail('');
    setPhone('');
    setAddress('');
  };

  return (
    <div className="new-user-form">
      <h2>New User</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          required
        />
        <button type="submit">Add User</button>
      </form>
    </div>
  );
}

export default NewUser;
