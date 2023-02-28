import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { toast } from 'react-toastify';

import { addContacts } from 'redux/operations';
import { selectContacts } from 'redux/contacts/selectors';

import { Section } from 'components/Section/Section';
import { FormComponent, Label, Span, Input, Button } from './Form.styled';

export function Form() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const handleInputChange = evt => {
    const { name, value } = evt.target;

    if (name === 'name') setName(value);
    if (name === 'phone') setPhone(value);
  };

  const handleSubmit = evt => {
    evt.preventDefault();

    if (contacts.some(c => c.name === name)) {
      toast.error(`Contact ${name} already exists!`, {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
      return;
    }
    if (contacts.some(c => c.phone === phone)) {
      toast.error(`Contact ${phone} already exists!`, {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
      return;
    }
    dispatch(addContacts({ name: name.trim(), phone }));

    setName('');
    setPhone('');
  };

  return (
    <Section titlePosition="end" title="Add contacts">
      <FormComponent onSubmit={handleSubmit}>
        <Label>
          <Span>Name</Span>
          <Input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={name}
            onChange={handleInputChange}
          />
        </Label>
        <Label>
          <Span>Number</Span>
          <Input
            type="tel"
            name="phone"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={phone}
            onChange={handleInputChange}
          />
        </Label>
        <Button type="submit">Add contact</Button>
      </FormComponent>
    </Section>
  );
}
