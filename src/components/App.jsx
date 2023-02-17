import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import FilterContact from './FilterContacts/FilterContacts';

function App() {
  const [contacts, setContacts] = useState(() => {
    return (
      JSON.parse(localStorage.getItem('contacts')) ?? [
        { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
        { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
        { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
        { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
      ]
    );
  });

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const [filter, setFilter] = useState('');

  const onAddContact = data => {
    const { name, number } = data;
    const id = nanoid(10);

    const isExistContact = contacts.find(
      contact => contact.name.toLocaleLowerCase() === name.toLocaleLowerCase()
    );

    if (isExistContact) {
      return alert(`${name} is already in contacts`);
    } else {
      const contact = { name, number, id };
      setContacts(prevState => [contact, ...prevState]);
    }
  };

  const removeContact = id => {
    setContacts(prevState => prevState.filter(contact => contact.id !== id));
  };

  const handleFilterChange = event => {
    setFilter(event.target.value);
  };

  const findByName = () => {
    const query = filter.toLocaleLowerCase();

    const filteredContacts = contacts.filter(contact =>
      contact.name.toLocaleLowerCase().includes(query)
    );

    return filteredContacts;
  };

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
      <ContactForm onSubmit={onAddContact} />
      <FilterContact filter={filter} onChange={handleFilterChange} />
      <ContactList list={findByName()} onRemove={removeContact} />
    </div>
  );
}

export default App;
