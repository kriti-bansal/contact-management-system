// src/components/ContactForm.js
import React, { useState, useEffect } from 'react';

const ContactForm = ({ onSave, contactToEdit }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  useEffect(() => {
    if (contactToEdit) {
      setName(contactToEdit.name);
      setEmail(contactToEdit.email);
      setPhone(contactToEdit.phone);
    }
  }, [contactToEdit]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({ id: contactToEdit ? contactToEdit.id : Date.now(), name, email, phone });
    setName('');
    setEmail('');
    setPhone('');
  };

  return (
    <form onSubmit={handleSubmit} className="contact-form">
      <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      <input type="tel" placeholder="Phone" value={phone} onChange={(e) => setPhone(e.target.value)} required />
      <button type="submit">{contactToEdit ? 'Update Contact' : 'Add Contact'}</button>
    </form>
  );
};

export default ContactForm;
