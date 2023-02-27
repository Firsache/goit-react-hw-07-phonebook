import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchContacts, postContacts } from 'helpers/contacts-api';

export const getContacts = createAsyncThunk(
  'contacts, getContacts',
  async (_, thunkApi) => {
    try {
      const contacts = await fetchContacts();
      return contacts;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const addContacts = createAsyncThunk(
  'contacts, postContacts',
  async (contact, thunkApi) => {
    try {
      const data = await postContacts(contact);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

// export const delContacts = createAsyncThunk(
//   'contacts, postContacts',
//   async (contact, thunkApi) => {
//     try {
//       const data = await deleteContact(contact);
//       return data;
//     } catch (error) {
//       return thunkApi.rejectWithValue(error.message);
//     }
//   }
// );
