import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contactsSlice';
import { nanoid } from '@reduxjs/toolkit';
import { Form, FormLabel, Input } from './ContactForm.styled';

export const ContactForm = () => {
  return (
    <Form onSubmit={handleSubmit}>
      <FormLabel htmlFor={nanoid()}>
        <span>Name</span>
      </FormLabel>
      <Input
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        onChange={handleChange}
        id={nanoid()}
      />

      <FormLabel htmlFor={nanoid()}>
        <span>Number</span>
      </FormLabel>
      <Input
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        onChange={handleChange}
        id={nanoid()}
      />

      <button type="submit">Add contact</button>
    </Form>
  );
};
