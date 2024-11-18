import React, { useState } from 'react';

const AddressBook = ({ contacts, setContacts }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleDelete = (id) => {
    setContacts(contacts.filter(contact => contact.id !== id));
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
            <div>{contact.address}</div>
            <button onClick={() => handleEdit(contact.id)}>Edit</button>
            <button onClick={() => handleDelete(contact.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AddressBook;
