import { nanoid } from 'nanoid';
import React, { useState, useEffect } from 'react';
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';
import ContactListItem from './ContactList/ContactListItem';
import style from './App.module.css';

const App = () => {
  const savedContacts = localStorage.getItem('savedContacts');
  const [contacts, setContacts] = useState(
    JSON.parse(savedContacts) || [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
      { id: 'id-5', name: 'Memory Five', number: '555-555-555' },
    ]
  );
  const [filter, setFilter] = useState('');

  useEffect(() => {
    // setting contacts to local storage
    localStorage.setItem('savedContacts', JSON.stringify(contacts));
  }, [contacts]);

  const handleSubmit = e => {
    e.preventDefault();
    let nameOntheList = false;
    const name = e.target.name.value;
    const number = e.target.number.value;
    const toLowerCase = name.toLowerCase();

    const newContact = {
      id: nanoid(),
      name: name,
      number: number,
    };

    contacts.forEach(contact => {
      if (contact.name.toLowerCase() === toLowerCase) {
        alert(`${contact.name} is already in contacts`);
        nameOntheList = true;
        e.target.reset();
      }
    });

    if (nameOntheList) return;

    setContacts([...contacts.concat(newContact)]);
    e.target.reset();
  };

  const handleFilterChange = e => {
    setFilter(e.currentTarget.value);
  };

  const filteredContacts = () => {
    return contacts.filter(
      contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase()) ||
        contact.number
          .replace(/-|\s/g, '')
          .includes(filter.replace(/-|\s/g, ''))
    );
  };

  const deleteContact = idToDelete => {
    setContacts([...contacts.filter(contact => contact.id !== idToDelete)]);
  };

  return (
    <div className={style.container}>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={handleSubmit} />
      <h2>Contacts</h2>
      <Filter value={filter} onChange={handleFilterChange} />
      <ContactList>
        <ContactListItem
          contacts={filteredContacts()}
          handleDelete={deleteContact}
        />
      </ContactList>
    </div>
  );
};

export default App;
