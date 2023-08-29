import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from './store';
import { fetchContacts } from './store';
import {
  List,
  ListItem,
  ContactName,
  ContactNumber,
  DeleteButton,
} from './App.styled';

const ContactList = () => {
  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);
  const isLoading = useSelector(state => state.contacts.isLoading);
  const error = useSelector(state => state.contacts.error);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
  return (
    <>
      {isLoading && <h1>Loading...</h1>} {error && <h1>{error}</h1>}{' '}
      {filteredContacts && (
        <List>
          {filteredContacts.map(contact => (
            <ListItem key={contact.id}>
              <ContactName>{contact.name}:</ContactName>
              <ContactNumber>{contact.number}</ContactNumber>
              <DeleteButton onClick={() => dispatch(deleteContact(contact.id))}>
                Delete
              </DeleteButton>
            </ListItem>
          ))}
        </List>
      )}
    </>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};

export default ContactList;
