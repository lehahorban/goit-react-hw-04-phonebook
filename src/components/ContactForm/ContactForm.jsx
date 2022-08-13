import React, { Component } from 'react';
import PropTypes from 'prop-types';
import style from './ContactForm.module.css';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  onSubmit = event => {
    event.preventDefault();
    const { onAddContact } = this.props;
    // const { name, number} = this.state
    onAddContact(this.state);
    // onAddContact({ name, number });
    this.setState({ name: '', number: '' });
  };

  onChange = event => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };

  render() {
    const { name, number } = this.state;

    return (
      <form className={style.form} onSubmit={this.onSubmit}>
        <label>Name</label>
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={this.onChange}
          value={name}
        />

        <label>Number</label>
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={this.onChange}
          value={number}
        />

        <button className={style.btn} type="submit">
          Add contact
        </button>
      </form>
    );
  }
}

ContactForm.propTypes = {
  onAddContact: PropTypes.func.isRequired,
};

export default ContactForm;
