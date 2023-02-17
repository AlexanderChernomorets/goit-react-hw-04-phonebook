import { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Title,
  FormContact,
  FormLabel,
  FormButton,
  FormInput,
} from './ContactForm.styled';

function ContactForm({ onSubmit }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = evt => {
    switch (evt.target.name) {
      case 'name':
        setName(evt.target.value);
        break;
      case 'number':
        setNumber(evt.target.value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    onSubmit({ name, number });
    resetForm();
  };

  const resetForm = () => {
    setName('');
    setNumber('');
  };

  return (
    <FormContact onSubmit={handleSubmit}>
      <Title>Phonebook</Title>
      <FormLabel>
        Name
        <FormInput
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          value={name}
          placeholder="🙍‍♂️ Enter contact name"
          onChange={handleChange}
          required
        />
      </FormLabel>
      <FormLabel>
        Number
        <FormInput
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          value={number}
          placeholder="📞 Enter phone number"
          onChange={handleChange}
          required
        />
      </FormLabel>
      <FormButton type="submit">Add contact</FormButton>
    </FormContact>
  );
}

export default ContactForm;

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
