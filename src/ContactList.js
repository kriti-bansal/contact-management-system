// src/components/ContactList.js
import React, { useState } from 'react';
import ContactCard from './ContactCard';
import ContactForm from './ContactForm';

const ContactList = () => {
  const [contacts, setContacts] = useState([]);
  const [contactToEdit, setContactToEdit] = useState(null);

  const addOrUpdateContact = (contact) => {
    if (contactToEdit) {
      setContacts(contacts.map((c) => (c.id === contact.id ? contact : c)));
      setContactToEdit(null);
    } else {
      setContacts([...contacts, contact]);
    }
  };

  const deleteContact = (id) => {
    setContacts(contacts.filter((contact) => contact.id !== id));
  };

  const editContact = (contact) => {
    setContactToEdit(contact);
  };

  return (
    <div className="contact-list">
      <ContactForm onSave={addOrUpdateContact} contactToEdit={contactToEdit} />
      {contacts.map((contact) => (
        <ContactCard key={contact.id} contact={contact} onDelete={deleteContact} onEdit={editContact} />
      ))}
    </div>
  );
};

export default ContactList;
