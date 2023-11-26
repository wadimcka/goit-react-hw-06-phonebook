import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const contactsInitialState = [];

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  reducers: {
    deleteContact(state, action) {
      return state.filter(contact => contact.id !== action.payload);
    },
    addContact: {
      reducer(state, action) {
        return [...state, action.payload];
      },
      prepare({ name, number }) {
        return {
          payload: {
            id: nanoid(),
            name,
            number,
          },
        };
      },
    },
  },
});

export const { deleteContact, addContact } = contactsSlice.actions;

export const contactsReducer = contactsSlice.reducer;
