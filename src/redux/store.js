import { combineReducers, configureStore } from '@reduxjs/toolkit';
// import storage from 'redux-persist/lib/storage';
// import {
//   persistStore,
//   persistReducer,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from 'redux-persist';

import { contactsReducer } from './contacts/contactsSlice';
// import { globalReducer } from './global/globalSlice';

// const persistedContactsReducer = persistReducer(
//   { key: 'contacts', storage, whitelist: ['contacts'] },
//   contactsReducer
// );

// const persistedThemeReducer = persistReducer(
//   { key: 'theme', storage },
//   globalReducer
// );

const rootReducer = combineReducers({
  // contacts: persistedContactsReducer,
  contacts: contactsReducer,
  // global: persistedThemeReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  // middleware: getDefaultMiddleware =>
  //   getDefaultMiddleware({
  //     serializableCheck: {
  //       ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
  //     },
  //   }),
});

// export const persistor = persistStore(store);
