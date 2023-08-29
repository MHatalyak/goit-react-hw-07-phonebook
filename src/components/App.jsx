import React from 'react';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';
import { Container, Title } from './App.styled';

const App = () => {
  return (
    <Container>
      <Title>Phonebook</Title>
      <ContactForm />

      <Title>Contacts</Title>
      <Filter />
      <ContactList />
    </Container>
  );
};

export default App;
