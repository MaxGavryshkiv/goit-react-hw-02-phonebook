import React from 'react';
import styles from './ContactList.module.css';

const ContactList = ({ contacts, onDeleteContact }) => (
  <>
    <ul>
      {contacts.map(({ id, name, number }) => (
        <li key={id} className={styles.listItem}>
          <p>
            {name}:{number}
          </p>
          <button
            className={styles.bttn}
            type="button"
            onClick={() => onDeleteContact(id)}
          >
            Удалить
          </button>
        </li>
      ))}
    </ul>
  </>
);

export default ContactList;
