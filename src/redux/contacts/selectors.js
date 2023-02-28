export const selectContacts = state => state.contacts.contacts;
export const selectLoader = state => state.contacts.isLoading;
export const selectError = state => state.contacts.error;
export const selectFilteredName = state => state.contacts.filteredName;
