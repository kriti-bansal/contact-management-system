import React, { useState } from 'react';

const ContactBook = ({ contacts, setContacts }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleDelete = (id) => {
    setContacts(contacts.filter(contact => contact.id !== id));
  };

  const handleFavoriteToggle = (id) => {
    setContacts(contacts.map(contact => 
      contact.id === id ? { ...contact, favorite: !contact.favorite } : contact
    ));
  };

  const handleEdit = (id) => {
    // Handle edit logic here (e.g., open a modal to edit contact details)
  };

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <input 
        type="text" 
        placeholder="Search by name" 
        onChange={(e) => setSearchTerm(e.target.value)} 
      />
      <div className="contact-list">
        {filteredContacts.map(contact => (
          <div key={contact.id} className="contact-card">
            <div>{contact.name}</div>
            <div>{contact.email}</div>
            <div>{contact.phone}</div>
            <div>{contact.address}</div>
            <input 
              type="checkbox" 
              checked={contact.favorite} 
              onChange={() => handleFavoriteToggle(contact.id)} 
            />
            <label>Favorite</label>
            <button onClick={() => handleEdit(contact.id)}>Edit</button>
            <button onClick={() => handleDelete(contact.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactBook;
