import axios from 'axios';

export const instance = axios.create({
  baseURL: 'https://64ee2a231f872182714261b3.mockapi.io/contacts/contacts',
});
