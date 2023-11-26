import React from 'react';
import {
  Contact,
  DeleteContactBtn,
  ListOfContacts,
} from './ContactList.styled';
import { deleteContact } from 'redux/contactsSlice';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';

function ContactList() {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const handlDeleteContact = id => {
    dispatch(deleteContact(id));
  };

  const filteredContacts = filter
    ? contacts.filter(contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
      )
    : contacts;

  return (
    <ListOfContacts>
      {filteredContacts &&
        filteredContacts.map(({ id, name, number }) => (
          <Contact key={id}>
            {name} : {number}
            <DeleteContactBtn
              type="button"
              onClick={() => handlDeleteContact(id)}
            >
              Delete
            </DeleteContactBtn>
          </Contact>
        ))}
    </ListOfContacts>
  );
}

export default ContactList;
