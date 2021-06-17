import React, { Component } from 'react';

class ContactEditor extends Component {
  state = {
    message: '',
  };

  handleChange = e => {
    this.setState({ message: e.currentTarget.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onSubmit(this.state.message);

    this.setState({ message: '' });
  };

  render() {
    return (
      <form className="ContactEditor" onSubmit={this.handleSubmit}>
        <textarea
          className="ContactEditor__textarea"
          value={this.state.message}
          onChange={this.handleChange}
        ></textarea>
        <button type="submit" className="ContactEditor__button">
          Сохранить
        </button>
      </form>
    );
  }
}

export default ContactEditor;
