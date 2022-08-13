import React, { Component } from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';
import style from './ContactList.module.css';

class ContactList extends Component {
  render() {
    const { filterContact, deleteUser } = this.props;
    return (
      <ul className={style.list}>
        <p>Contact</p>
        {filterContact.map(item => (
          <li key={shortid.generate()}>
            {item.name}: {item.number}
            <button onClick={() => deleteUser(item)}>Delete</button>
          </li>
        ))}
      </ul>
    );
  }
}

ContactList.propTypes = {
  filterContact: PropTypes.array.isRequired,
  deleteUser: PropTypes.func.isRequired,
};

export default ContactList;
