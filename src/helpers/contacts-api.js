import axios from 'axios';

axios.defaults.baseURL = 'https://63fcc2cd677c415873133e1e.mockapi.io/api/v1';

export const fetchContacts = async () => {
  const { data } = await axios.get('/contacts');
  return data;
};

export const postContacts = async contact => {
  const { data } = await axios.post('/contacts', contact);
  return data;
};

// export const deleteContact = async contact => {
//   const { data } = await axios.delete('/contacts', contact);
//   return data;
// };
