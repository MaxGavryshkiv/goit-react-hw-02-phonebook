import React, { Component } from 'react';
import shortid from 'shortid';
import ContactEditor from './ContactEditor/ContactEditor';
import ContactList from './ContactList/ContactList';
import Finder from './Finder/Finder';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };
  addContact = (name, number) => {
    const contacts = this.state.contacts;

    const contact = {
      id: shortid.generate(),
      name,
      number,
    };

    if (
      contacts.find(
        contact => contact.name.toLowerCase() === name.toLowerCase(),
      )
    ) {
      alert(`${name} is already in contacts.`);
    } else {
      this.setState(({ contacts }) => ({
        contacts: [contact, ...contacts],
      }));
    }
  };
  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };
  getVisibleContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  };
  render() {
    const visibleContacts = this.getVisibleContacts();
    return (
      <>
        <h1>Phonebook </h1>

        <ContactEditor onSubmit={this.addContact} />

        <h2>Contacts</h2>
        <Finder value={this.state.filter} onChange={this.changeFilter} />

        <ContactList contacts={visibleContacts} />
      </>
    );
  }
}

export default App;
