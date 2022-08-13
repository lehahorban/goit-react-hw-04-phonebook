import React, { Component } from 'react';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import shortid from 'shortid';
import style from '../components/Style.module.css';

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

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const contactsParse = JSON.parse(contacts);

    if (contactsParse) {
      this.setState({
        contacts: contactsParse,
      });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  addContacts = getContact => {
    const { contacts } = this.state;
    const { name, number } = getContact;
    const contact = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
    if (contact) {
      alert(`Contact ${name} already exists`);
      return;
    }
    return this.setState({
      contacts: [
        ...contacts,
        { id: shortid.generate(), name: name, number: number },
      ],
    });
  };

  filterContacts = event => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };

  deleteUser = user => {
    this.setState({
      contacts: this.state.contacts.filter(userName => userName !== user),
    });
  };

  render() {
    const { filter } = this.state;

    const filterContact = this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(this.state.filter.toLowerCase())
    );

    return (
      <div className={style.app}>
        <p>Phonebook</p>
        <ContactForm onAddContact={this.addContacts} />

        <Filter filter={filter} onChange={this.filterContacts} />

        <ContactList
          filterContact={filterContact}
          deleteUser={this.deleteUser}
        />
      </div>
    );
  }
}

export default App;
