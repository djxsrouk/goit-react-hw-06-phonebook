import React from 'react';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './FilterSearch/FilterSearch';
import Section from './Section/Section';
import { getContacts } from '../redux/selectors';
import { useSelector } from 'react-redux';

export const App = () => {
  const contacts = useSelector(getContacts);
  return (
    <>
      <Section title="Phonebook">
        <ContactForm />
        <Filter />
        <ContactList />
      </Section>
    </>
  );
};

export default App;
