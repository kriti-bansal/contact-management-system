import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

// Importing Components
import ContactList from './ContactList';  // Your existing contact list component
import NewUser from './NewUser';  // New user form component
import ContactBook from './ContactBook';  // Contact book page
import AddressBook from './AddressBook';  // Address book page

function App() {
  const [contacts, setContacts] = useState([
    { name: 'John Doe', email: 'john@example.com', phone: '123-456-7890', address: '123 Main St' },
    { name: 'Jane Smith', email: 'jane@example.com', phone: '987-654-3210', address: '456 Elm St' },
  ]);

  return (
    <Router>
      <div className="App">
        {/* Navbar */}
        <nav className="navbar">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/new-user">New User</Link></li>
            <li><Link to="/contact-book">Contact Book</Link></li>
            <li><Link to="/address-book">Address Book</Link></li>
          </ul>
        </nav>

        {/* Routing */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/new-user" element={<NewUser setContacts={setContacts} />} />
          <Route path="/contact-book" element={<ContactBook contacts={contacts} />} />
          <Route path="/address-book" element={<AddressBook contacts={contacts} />} />
        </Routes>
      </div>
    </Router>
  );
}

// Home Component
const Home = () => {
  return (
    <div className="home">
      <h1>Welcome to Contact Management System</h1>
      <div className="home-image">
        <img src="1_ii81kepNwum-fbLNgbMkUA.jpg" alt="Contact Management" />
      </div>
    </div>
  );
}

export default App;
