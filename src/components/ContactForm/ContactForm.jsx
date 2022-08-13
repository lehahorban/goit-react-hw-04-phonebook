import { useState } from 'react';
import PropTypes from 'prop-types';
import style from './ContactForm.module.css';

function ContactForm({ onAddContact }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const onSubmit = event => {
    event.preventDefault();
    onAddContact({ name: name, number: number });
    setName('');
    setNumber('');
  };

  const onChange = event => {
    const { name, value } = event.currentTarget;
    if (name === 'name') {
      setName(value);
    }
    if (name === 'number') {
      setNumber(value);
    }
  };

  return (
    <form className={style.form} onSubmit={onSubmit}>
      <label>Name</label>
      <input
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        onChange={onChange}
        value={name}
      />

      <label>Number</label>
      <input
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        onChange={onChange}
        value={number}
      />

      <button className={style.btn} type="submit">
        Add contact
      </button>
    </form>
  );
}

ContactForm.propTypes = {
  onAddContact: PropTypes.func.isRequired,
};

export default ContactForm;
