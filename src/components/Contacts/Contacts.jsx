import { useDispatch, useSelector } from 'react-redux';
import { selectContacts, selectFilteredName } from 'redux/contacts/selectors';
import { deleteContact } from 'redux/contacts/contactsSlice';

import { Notification } from 'components';
import { Button } from 'components/Form/Form.styled';

import { List, Item, Text } from './Contacts.styled';

export function Contacts() {
  const contacts = useSelector(selectContacts);
  const filteredName = useSelector(selectFilteredName);
  const dispatch = useDispatch();

  const deleteSelectedContact = contactId => {
    dispatch(deleteContact(contactId));
  };

  const getFilteredContacts = (contacts, filter) => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const filteredContacts = getFilteredContacts(contacts, filteredName);

  return (
    <>
      {Boolean(filteredContacts.length) && (
        <List>
          {filteredContacts.map(({ id, name, number }) => (
            <Item key={id}>
              <Text>
                {name}: <span>{number}</span>
              </Text>
              <Button
                onClick={() => {
                  deleteSelectedContact(id);
                }}
              >
                Delete
              </Button>
            </Item>
          ))}
        </List>
      )}
      {!Boolean(contacts.length) && (
        <Notification message="There are no contacts in the phonebook yet..." />
      )}
      {Boolean(contacts.length) && !Boolean(filteredContacts.length) && (
        <Notification message="There isn't such a contact..." />
      )}
    </>
  );
}
