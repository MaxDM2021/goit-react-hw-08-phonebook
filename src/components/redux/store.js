
import { configureStore } from '@reduxjs/toolkit';

import {
    persistStore,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from 'redux-persist'

import { contactsReducer } from './contacts/contactsReduser';
import { filterReducer } from './filterSlice';
import  authReducer  from "./auth/auth-slice"



export const store = configureStore({
  reducer: {
  contact: contactsReducer,
  filter: filterReducer,
  auth: authReducer,
},
  middleware(getDefaultMiddleware) {

  return getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  });
  },
});

export const persistor = persistStore(store);


// ===== Selectors =====

// export const getContacts = state => state.contact.item;

