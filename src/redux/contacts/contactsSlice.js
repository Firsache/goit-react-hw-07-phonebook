import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialContactsState = {
  contacts: [],
  filteredName: '',
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: initialContactsState,
  reducers: {
    addContact: {
      prepare: newContact => {
        return { payload: { ...newContact, id: nanoid(6) } };
      },
      reducer: (state, { payload }) => {
        state.contacts = [payload, ...state.contacts];
      },
    },
    deleteContact(state, { payload }) {
      state.contacts = state.contacts.filter(c => c.id !== payload);
    },
    setFilteredName(state, { payload }) {
      state.filteredName = payload;
    },
  },
});

export const { addContact, deleteContact, setFilteredName } =
  contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
