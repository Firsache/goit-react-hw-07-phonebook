import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  deleteContact,
  fetchContacts,
  postContacts,
} from 'helpers/contacts-api';

export const getContacts = createAsyncThunk(
  'contacts/getContacts',
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
  'contacts/postContact',
  async (contact, thunkApi) => {
    try {
      const data = await postContacts(contact);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const delContacts = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, thunkApi) => {
    try {
      const data = await deleteContact(contactId);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

// export const getContactsByFilter = createAsyncThunk(
//   'contacts/getContactsByFilter',
//   async (_, thunkApi) => {
//     try {
//       const contacts = await fetchContacts();
//       return contacts;
//     } catch (error) {
//       return thunkApi.rejectWithValue(error.message);
//     }
//   }
// );
