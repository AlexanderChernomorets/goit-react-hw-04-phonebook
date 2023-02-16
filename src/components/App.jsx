import { Component } from 'react';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import FilterContact from './FilterContacts/FilterContacts';

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

  componentDidUpdate(prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  componentDidMount() {
    const contactsToLocalStorage = localStorage.getItem('contacts');
if (contactsToLocalStorage) {
  try {
    const parsedContacts = JSON.parse(contactsToLocalStorage);
    this.setState({ contacts: parsedContacts });
  } catch {
    test.setState({ contacts: [] })
  }
}
   
  }

  formSubmitHandler = data => {
    const { contacts } = this.state;
    const { name } = data;
    const isExistContact = !!contacts.find(contact => contact.name === name);

    if (!isExistContact) {
      this.setState(({ contacts }) => {
        return { contacts: [data, ...contacts] };
      });
    } else {
      alert(`${name} is already in contacts`);
    }
  };

  handleFilterChange = filter => this.setState({ filter });

  removeContact = id =>
    this.setState(({ contacts }) => ({
      contacts: contacts.filter(contact => contact.id !== id),
    }));

  findByName = () => {
    let filterContact = [];
    if (this.state.filter) {
      filterContact = this.state.contacts.filter(
        contact =>
          contact.name.includes(this.state.filter) ||
          contact.name.toLowerCase().includes(this.state.filter)
      );
    } else {
      return this.state.contacts;
    }
    return filterContact;
  };

  render() {
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <ContactForm onSubmit={this.formSubmitHandler} />
        <FilterContact
          filter={this.state.filter}
          onChange={this.handleFilterChange}
        />
        <ContactList
          list={this.state.contacts}
          filter={this.state.filter}
          onRemove={this.removeContact}
          findContact={this.findByName}
        />
      </div>
    );
  }
}

export default App;
