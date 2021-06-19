import React, { Component } from 'react';
import styles from './ContactEditor.module.css';

class ContactEditor extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = e => {
    this.setState({ name: e.currentTarget.value });
  };
  numberChange = e => {
    this.setState({ number: e.currentTarget.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onSubmit(this.state.name, this.state.number);

    this.setState({ name: '' });
    this.setState({ number: '' });
  };

  render() {
    return (
      <form className={styles.editorForm} onSubmit={this.handleSubmit}>
        <h3 className={styles.editorTitle}>Name</h3>
        <input
          value={this.state.name}
          onChange={this.handleChange}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
        />
        <h3 className={styles.editorTitle}>Number</h3>
        <input
          value={this.state.number}
          onChange={this.numberChange}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
        />
        <button type="submit">Сохранить</button>
      </form>
    );
  }
}

export default ContactEditor;
