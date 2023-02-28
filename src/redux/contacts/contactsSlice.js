import { createSlice } from '@reduxjs/toolkit';
import { getContacts, addContacts, delContacts } from 'redux/operations';

const initialContactsState = {
  contacts: [],
  isLoading: false,
  error: null,

  filteredName: '',
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: initialContactsState,
  reducers: {
    setFilteredName(state, { payload }) {
      state.filteredName = payload;
    },
  },
  extraReducers: builder => {
    builder
      // get contact
      .addCase(getContacts.pending, pendingHandler)
      .addCase(getContacts.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.contacts = payload;
      })
      .addCase(getContacts.rejected, errorHandler)
      // add contact
      .addCase(addContacts.pending, pendingHandler)
      .addCase(addContacts.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.contacts = [...state.contacts, payload];
      })
      .addCase(addContacts.rejected, errorHandler)
      // delete contact

      .addCase(delContacts.pending, pendingHandler)
      .addCase(delContacts.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.contacts = state.contacts.filter(
          contact => contact.id !== payload
        );
      })
      .addCase(delContacts.rejected, errorHandler);
  },
});

function pendingHandler(state) {
  state.isLoading = true;
  state.error = null;
}

function errorHandler(state, { payload }) {
  state.isLoading = false;
  state.error = payload;
}

export const { setFilteredName } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
